import {workClockSeconds} from './training-safety.js?v=31';
/** Advance elapsed guided intervals without asserting any physical performance. */
export function advanceIntervalClock(session, now = Date.now()) {
  const blocks = session.plan?.blocks || [], initial = session.index;
  if (!session.continuous || !session.timer?.running || !Number.isFinite(now)) return {
    changed: false, index: initial, timer: session.timer, candidates: []
  };
  let index = initial, left = session.timer.left, started = session.timer.started;
  if (!Number.isFinite(started) || !Number.isFinite(left) || now < started) return {
    changed: false, index, timer: session.timer, candidates: []
  };
  let elapsed = Math.max(0,(now - started) / 1000), candidates = [];
  while (index < blocks.length && elapsed >= left) {
    elapsed -= left;
    started += left * 1000;
    if ( ['work', 'skill'].includes(blocks[index].phase)) candidates.push(index);
    index++;
    left = workClockSeconds(blocks[index]);
  }
  return {
    changed: index !== initial, index, timer: {
      left, running: index < blocks.length, started
    }, candidates
  };
}

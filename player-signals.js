// Optional browser capabilities: a missing or denied API must never interrupt training.
export function createPlayerSignals(environment = globalThis) {
  let context;
  return (event, muted = false) => {
    if (muted) return;
    try { environment.navigator?.vibrate?.(event === 'end' ? [180, 80, 180] : 90); } catch {}
    try {
      const Audio = environment.AudioContext || environment.webkitAudioContext || environment.window?.AudioContext ||
        environment.window?.webkitAudioContext;
      if (!Audio) return;
      context ??= new Audio();
      Promise.resolve(context.resume?.()).catch(() => {});
      const oscillator = context.createOscillator(), gain = context.createGain(), duration = event === 'end' ? .45 : .15;
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.frequency.value = event === 'end' ? 880 : event === 'start' ? 660 : 550;
      gain.gain.setValueAtTime(.06, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + duration);
      oscillator.start();
      oscillator.stop(context.currentTime + duration + .01);
    } catch {}
  };
}

// Persist the last delivered second with the timer. Re-render/resume cannot replay a cue.
export function holdCueEvents(timer, left, {start = false} = {}) {
  if (!timer.running) return [];
  const second = Math.ceil(Math.max(0, left)), before = timer.cueSecond;
  timer.cueSecond = second;
  if (start) return ['start'];
  if (second === before) return [];
  if (second === 0) return before === 0 ? [] : ['end'];
  return second <= 3 && (before == null || second < before) ? ['last'] : [];
}

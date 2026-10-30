export const SESSION_DURATIONS = Object.freeze( [30, 45, 60, 75]);
export const sessionMinutes = value => [15, 20].includes(Number(value)) ? 30: Number(value);
// Round cumulative boundaries so adjacent phase groups and the total always agree.
// Exact planning seconds remain unchanged; omit phases with no displayed time.
export function displayPhases(phases = []) {
  let seconds = 0, minutes = 0;
  return phases.map(phase => {
    seconds += Math.max(0, phase.seconds || 0);
    const end = Math.ceil(seconds / 60), shown = end - minutes;
    minutes = end;
    return {
      ... phase, minutes: shown
    };
  }).filter(phase => phase.seconds > 0 && phase.minutes > 0);
}

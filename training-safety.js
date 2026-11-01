const day = 864e5;
const localDay = date => new Intl.DateTimeFormat('en-CA', {timeZone: 'Asia/Jerusalem'}).format(new Date(date));
export const reportedPain = log => log?.pain === true || log?.sets?.some(s => s.pain === true) === true;
export const painRule = 'כאב בזמן תרגיל? לעצור מיד. אין להמשיך או להחליף תרגיל עד לבדיקת מוכנות; אם הכאב נמשך, לפנות לבדיקה מקצועית.';
export function effortText(b) {
  if (b.unit === 'seconds') return 'עתודה טכנית: ' + (b.technicalReserve || 'לפחות 3 שניות של שליטה') + '; לעצור בירידת שליטה.';
  return b.rir != null ? `לעצור כשאפשר לבצע עוד ${b.rir} חזרות נקיות.` : 'לבצע בשליטה ולעצור הרבה לפני קושי.';
}
// Only the existing explicit readiness review resolves pain. Daily check-ins never grant clearance.
export function unresolvedPain(profile = {}, {logs = profile.logs || [], now = new Date(), date = localDay(now), reviewedAt} = {}) {
  if (profile.session?.painReported || reportedPain(profile.session)) return {id: profile.session.id, active: true};
  const reports = logs.filter(l => Date.parse(l.completed_at) <= +now && localDay(l.completed_at) <= date && reportedPain(l))
    .map(l => ({...l, at: Date.parse(l.completed_at)}));
  for (const [d, entry] of Object.entries(profile.checkIns || {})) {
    if (d <= date && entry.pain === true) reports.push({id: 'check-in-' + d, at: Date.parse(entry.updated_at || d + 'T00:00:00Z')});
  }
  const last = reports.sort((a, b) => a.at - b.at).at(-1);
  if (!last) return null;
  const reviewTime = Date.parse(reviewedAt ?? profile.painReviewedAt);
  if (reviewTime >= last.at && reviewTime <= +now) return null;
  return last;
}
// Actual training and an explicit reassessment can end a break; future/empty logs cannot.
export function returnDecision(profile = {}, logs = profile.logs || [], now = new Date()) {
  const dates = [profile.capabilityCheck?.assessedAt,
    ...logs.filter(l => l.sets?.some(s => s.actual > 0)).map(l => l.completed_at)]
    .map(Date.parse).filter(t => Number.isFinite(t) && t <= +now);
  const reassessed = Date.parse(profile.assessmentAt);
  if (dates.length && Number.isFinite(reassessed) && reassessed <= +now) dates.push(reassessed);
  const last = dates.length ? Math.max(...dates) : null;
  return {returnAfterBreak: last !== null && +now - last >= 14 * day, last};
}

// Stored targets and logged actuals are totals across both sides on every surface.
export function doseText(b) {
  const unit=b.unit==='seconds'?'שניות':'חזרות';
  if(b.target==null) return `ניסיון אחד, עד ${(b.attemptTarget|| (b.unit==='seconds'?5:3))/(b.perSide?2:1)} ` +
    `${unit}${b.perSide?' לכל צד':''}; חלון היכרות, כולל מנוחה`;
  return `${b.target/(b.perSide?2:1)} ${unit}${b.perSide?' לכל צד':''}`;
}
export function workClockSeconds(b) {
  return ['work','skill'].includes(b?.phase)&&b.unit==='seconds'&&b.target>0?b.target:b?.seconds||0;
}

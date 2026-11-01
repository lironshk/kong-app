import {exercises} from './data/exercises.js?v=31';
import {movementAtlas} from './data/movement-atlas.js?v=31';
import {escapeHTML as esc} from './ui.js?v=31';
// Review status stays internal; every movement keeps its exact written instructions.
export const reviewedPlate = id => /^(coach-approved|reviewed|approved)$/.test(movementAtlas[id]?.review || '');
export function instructionRoute(block) {
  const e = exercises.find(e => e.id === block.id);
  if (!e) return null;
  return {id:e.id, mode:movementAtlas[e.id] ? 'photo' : 'instructions', apparatus:e.equipment.length ? e.equipment.join(', ') : 'floor',
    steps:[...(e.instructions || [])], conditions:block.reviewedExecution ? {
      setup:block.setup, assistance:block.assistance, range:block.range_of_motion, standard:block.execution_standard
    } : null, stop:'לעצור בכאב או בירידת שליטה; לצאת בשליטה ולנוח. אם המנח אינו ברור, לדלג ולבדוק בהדרכה.'};
}
export function instructionRouteHTML(block) {
  const route = instructionRoute(block);
  if (!route) return '';
  return `<section class="movement-instruction-route" data-instruction-route="${esc(route.id)}"><strong>הדרכה לפי שלבים</strong>` +
    '<ol>' +
    route.steps.map(x=>`<li>${esc(x)}</li>`).join('') + '</ol>' +
    (route.conditions ? '<p>' + Object.values(route.conditions).map(esc).join(' · ') + '</p>' : '') +
    `<p>${esc(route.stop)}</p></section>`;
}

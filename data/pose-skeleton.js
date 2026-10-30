// A two-link inverse solve supplies angles to a fixed-length skeleton. Endpoints
// remain on the authored support surfaces; elbows/knees cannot detach or stretch.
export const bones=[[1,0],[1,2],[2,3],[3,4],[2,5],[5,6],[1,7],[7,8],[1,9],[9,10]];
const distance=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]);
function link(root,target,length){const d=distance(root,target)||1;return root.map((v,i)=>v+(target[i]-v)*length/d)}
function solve(p,root,joint,end,lengths){
 const [upper,lower]=lengths;
 const a=p[root],b=p[end],d=distance(a,b),ux=(b[0]-a[0])/(d||1),uy=(b[1]-a[1])/(d||1);
 const cross=ux*(p[joint][1]-a[1])-uy*(p[joint][0]-a[0]);
 const along=(upper*upper-lower*lower+d*d)/(2*(d||1));
 const h=Math.sqrt(Math.max(0,upper*upper-along*along))*(cross<0?-1:1);
 p[joint]=[a[0]+ux*along-uy*h,a[1]+uy*along+ux*h];
}
export function constrainPose(id,start,end,equipment){
 const phases=[start,end].map(p=>p.map(v=>[...v]));
 if(equipment==='bar'){const bottom=Math.max(...phases.flatMap(p=>p.map(v=>v[1])));if(bottom>194){const scale=146/(bottom-42);for(const p of phases)for(const v of p){v[0]=125+(v[0]-125)*scale;v[1]=42+(v[1]-42)*scale;}}}
 const surfaces=[{id:'ground',a:[20,194],b:[230,194]}],contacts=[[],[]];
 const addSurface=(id,a,b)=>{if(!surfaces.some(s=>s.id===id))surfaces.push({id,a,b});};
 const contact=(phase,joint,surface,target)=>{phases[phase][joint]=[...target];contacts[phase].push({joint,surface});};
 // Equipment is fixed across phases, independently of the solved joints.
 if(['bar','lowbar','rings','parallel'].includes(equipment)){
  const y=equipment==='bar'?42:equipment==='lowbar'?Math.min(...phases.flatMap(p=>[p[8][1],p[10][1]])):equipment==='parallel'?Math.max(...phases.flatMap(p=>[p[8][1],p[10][1]])):Math.min(...phases.flatMap(p=>[p[8][1],p[10][1]]));
  addSurface('grip',[35,y],[210,y]);
  phases.forEach((p,i)=>[8,10].forEach(j=>contact(i,j,'grip',[equipment==='rings'?phases[0][j][0]:p[j][0],y])));
 }
 if(equipment==='wall'){
  addSurface('wall',[224,24],[224,194]);
  phases.forEach((p,i)=>{const inverted=p[2][1]<p[1][1];const joints=inverted?[4,6]:/push|slide/.test(id)?[8,10]:[];joints.forEach(j=>contact(i,j,'wall',[224,p[j][1]]));});
 }
 if(equipment==='pole'){
  addSurface('pole',[40,20],[40,194]);phases.forEach((p,i)=>[8,10].forEach(j=>contact(i,j,'pole',[40,p[j][1]])));
 }
 if(equipment==='box')addSurface('box',[165,164],[225,164]);
 phases.forEach((p,i)=>{
  const hanging=['bar','rings','parallel','pole'].includes(equipment);
  if(['calf','single-calf'].includes(id)){
   for(const j of id==='calf'?[4,6]:[4])contacts[i].push({joint:j,surface:'ground',offset:i===0?[12,0]:[Math.sqrt(108),6]});
   return;
  }
  // Ground contact is authored by the lowest support point, with a shared floor.
  if(!hanging||/foot-support|active-hang|extension-supported|lever-supported/.test(id)){
   const candidates=[4,6,8,10];
   if(['knee-push','bird-dog','cat-cow','thoracic-rotation'].includes(id))for(const j of [3,5])if(Math.abs(p[j][1]-194)<0.01)contacts[i].push({joint:j,surface:'ground'});
   const explicit=[4,6,8,10].filter(j=>Math.abs(p[j][1]-194)<0.01);
   const lying=/bridge|deadbug|heel-tap|reverse-crunch|hollow|prone-w|clamshell|side-leg-raise|dragon/.test(id);
   const bodySupport=lying?[1,2].find(j=>194-p[j][1]>=0&&194-p[j][1]<=12):undefined;
   if(bodySupport!==undefined)contacts[i].push({joint:bodySupport,surface:'ground',offset:[0,194-p[bodySupport][1]]});
   const max=Math.max(...candidates.map(j=>p[j][1]));
   const touching=explicit.length?explicit:bodySupport!==undefined?[]:candidates.filter(j=>p[j][1]>=max-9);
   for(const j of touching){const box=equipment==='box'&&[4,6].includes(j);contact(i,j,box?'box':'ground',[box?Math.max(165,p[j][0]):p[j][0],box?164:194]);}
  }
 });
 // Preserve torso/head lengths across both phases, then solve each limb against
 // its fixed contact endpoint. Each exercise uses one immutable bone-length set.
 const torso=(distance(phases[0][1],phases[0][2])+distance(phases[1][1],phases[1][2]))/2;
 const neck=(distance(phases[0][0],phases[0][1])+distance(phases[1][0],phases[1][1]))/2;
 phases.forEach(p=>{p[0]=link(p[1],p[0],neck);p[2]=link(p[1],p[2],torso);});
 const chains=[[2,3,4],[2,5,6],[1,7,8],[1,9,10]];
 const lengths=chains.map(([root,joint,end])=>{
  const upper=Math.max(...phases.map(p=>distance(p[root],p[joint]))),lower=Math.max(...phases.map(p=>distance(p[joint],p[end])));
  const reach=Math.max(...phases.map(p=>distance(p[root],p[end]))),factor=Math.max(1,reach/(upper+lower));
  return [upper*factor,lower*factor];
 });
 const straightArms=new Set(['wall-handstand','chest-wall-handstand','handstand-shift','handstand-toe-pull','handstand-free','partial-wall-line','pike-support','hollow','push','close-push','wall-push','incline-push','pike-push','elevated-pike-push','pull','chin','pull-negative','explosive-pull','dead-hang','scap-pull','support','tuck-lsit','lsit','one-leg-lsit','tuck-front-lever','advanced-tuck-front-lever','front-lever','lever-assisted-tuck','lever-supported','back-lever','assisted-tuck-back-lever','planche-lean','tuck-planche','tuck-assisted-planche','plank']);
 const straightLegs=new Set(['wall-handstand','chest-wall-handstand','handstand-shift','handstand-toe-pull','handstand-free','partial-wall-line','calf','hollow','planche-lean','push','close-push','wall-push','incline-push','pike-push','elevated-pike-push','side-plank','plank','front-lever','lever-supported','back-lever','lsit']);
 chains.forEach(([r,,e],i)=>{if((i>=2&&straightArms.has(id))||(i<2&&straightLegs.has(id))||(i===1&&['pistol','single-squat','pistol-box'].includes(id))||(i===0&&id==='single-calf'))lengths[i]=Array(2).fill(Math.max(...phases.map(p=>distance(p[r],p[e])))/2*1.000001);});
 phases.forEach(p=>chains.forEach(([r,j,e],i)=>solve(p,r,j,e,lengths[i])));
 return {start:phases[0],end:phases[1],surfaces,contacts:{start:contacts[0],end:contacts[1]},boneLengths:bones.map(([a,b])=>distance(phases[0][a],phases[0][b]))};
}

// Authored side-view endpoints in a common stage. All panels share a 194px floor.
// The skeleton solver supplies fixed-length bones; these are support targets,
// not independently placed elbows and knees.
const rad=d=>d*Math.PI/180;
function study(shoulder,angle,feet,hands,{leg=45,arm=35,knees=[1,1],elbows=[-1,-1],headAngle=angle+180}={}){
 const hip=[shoulder[0]+45*Math.cos(rad(angle)),shoulder[1]+45*Math.sin(rad(angle))];
 const head=[shoulder[0]+24*Math.cos(rad(headAngle)),shoulder[1]+24*Math.sin(rad(headAngle))];
 const chain=(a,b,l,side)=>{const dx=b[0]-a[0],dy=b[1]-a[1],d=Math.hypot(dx,dy)||1,h=Math.sqrt(Math.max(0,l*l-d*d/4))*side;return [(a[0]+b[0])/2-dy/d*h,(a[1]+b[1])/2+dx/d*h]};
 return [head,shoulder,hip,chain(hip,feet[0],leg,knees[0]),feet[0],chain(hip,feet[1],leg,knees[1]),feet[1],chain(shoulder,hands[0],arm,elbows[0]),hands[0],chain(shoulder,hands[1],arm,elbows[1]),hands[1]];
}
const S=(s,a,f,h,o)=>study(s,a,f,h,o),dup=p=>[[...p],[...p]], pair=(a,b=a)=>[a,b];
const stand=S([120,62],90,[[108,194],[132,194]],[[89,121],[151,121]]);
const squat=S([113,103],75,[[83,194],[157,194]],[[70,110],[78,118]],{leg:52,knees:[1,-1]});
const pushTop=S([70,126],33,dup([175,194]),[[70,194],[80,194]],{arm:34.4,leg:40.2});
const pushLow=S([52.5,169],11.5,dup([175,194]),[[70,194],[80,194]],{arm:34.4,leg:40.2});
const hang=S([121,106],90,dup([121,226]),[[93,42],[149,42]],{arm:35,leg:38,knees:[1,-1]});
const pull=S([121,48],90,dup([121,168]),[[93,42],[149,42]],{arm:35,leg:38,elbows:[-1,1]});
const support=S([121,66],90,dup([121,183]),[[121,136],[133,136]],{arm:35.6,leg:39});
const dip=S([121,101],90,[[75,166],[83,174]],[[86,136],[156,136]],{arm:35,leg:39,elbows:[1,-1],knees:[-1,-1]});
const plank=S([70,126],33,dup([175,194]),[[70,194],[80,194]],{arm:34.4,leg:40.2});
const pike=S([83,140],-48,dup([137,194]),[[83,194],[93,194]],{arm:27.5,leg:45});
const pikeLow=S([83,169],-95,dup([137,194]),[[83,194],[93,194]],{arm:27.5,leg:45,elbows:[1,-1],headAngle:140});
const tuck=S([121,76],90,[[165,138],[171,144]],[[121,146],[133,146]],{arm:35.6,leg:33,knees:[-1,-1]});
const lsit=S([121,76],90,[[208,121],[208,127]],[[121,146],[133,146]],{arm:35.6,leg:44,knees:[-1,-1]});
const lever=S([83,111],0,[[215,111],[215,117]],[[93,42],[107,42]],{arm:36.6,leg:44});
const leverTuck=S([83,111],0,[[123,135],[129,141]],[[93,42],[107,42]],{arm:36.6,leg:30,knees:[1,1]});
const leverAdvanced=S([83,111],0,[[173,150],[179,156]],[[93,42],[107,42]],{arm:36.6,leg:33,knees:[-1,-1]});
const frog=S([91,146],-25,[[157,157],[163,163]],[[103,194],[119,194]],{arm:29,leg:28,knees:[1,1],elbows:[1,1]});
const planche=S([70,155],0,[[144,139],[150,145]],[[92,194],[106,194]],{arm:26,leg:30,knees:[-1,-1]});
const rowLow=S([82,147],19,dup([207,194]),[[110,83],[124,83]],{arm:35,leg:45});
const rowHigh=S([107,100],39,dup([207,194]),[[110,83],[124,83]],{arm:35,leg:45,elbows:[1,-1]});
const wallTop=S([152.5,85.74682452694518],120,dup([90,194]),[[224,86],[224,98]],{arm:37,leg:45});
const wallLow=S([173.64132579485728,101.10689681532574],132,dup([90,194]),[[224,86],[224,98]],{arm:37,leg:45,elbows:[1,-1]});
const inclineTop=S([126,114],128,dup([64,194]),[[161,164],[171,164]],{arm:35,leg:45});
const inclineLow=S([149,139],147,dup([64,194]),[[161,164],[171,164]],{arm:35,leg:45,elbows:[1,-1]});
const bridgeLow=S([70,184],0,[[181,194],[191,194]],[[105,194],[115,194]],{leg:44,arm:24,knees:[-1,-1],headAngle:180});
const bridgeHigh=S([70,184],-33,[[181,194],[191,194]],[[105,194],[115,194]],{leg:44,arm:24,knees:[-1,-1],headAngle:180});
const hinge=S([100,100],6,[[139,194],[153,194]],[[98,171],[110,171]],{leg:45,arm:32,knees:[1,1]});
const lunge=S([121,110],90,[[82,194],[202,194]],[[92,147],[149,147]],{leg:46,knees:[1,-1]});
const quad=S([83,135],0,[[159,194],[171,194]],[[83,194],[95,194]],{leg:35,arm:30,knees:[1,1]});
const bird=S([83,135],0,[[159,194],[213,135]],[[83,194],[20,135]],{leg:43,arm:32,knees:[1,1]});
const side=S([72,126],33,dup([185,194]),[[72,194],[72,58]],{leg:46,arm:34.5});
const sideKnee=S([72,126],33,[[159,194],[173,194]],[[72,194],[72,58]],{leg:37,arm:34.5});
const supine=S([73,184],0,[[178,130],[190,140]],[[63,120],[79,120]],{leg:39,arm:33,knees:[-1,-1]});
const hollow=S([73,173],13,dup([204,162]),[[25,136],[31,142]],{leg:45,arm:31,knees:[-1,-1]});
const handstand=S([176,140],-90,[[176,24],[184,24]],[[176,194],[188,194]],{leg:36,arm:28});
const wallstand=S([194,140],-75,[[224,24],[224,32]],[[194,194],[206,194]],{leg:40,arm:28});
const prone=S([75,184],0,[[206,184],[206,190]],[[63,154],[83,154]],{arm:25,leg:44});
const profiles={
 'wall-push':pair(wallTop,wallLow),'incline-push':pair(inclineTop,inclineLow),
 push:pair(pushTop,pushLow),'close-push':pair(pushTop,pushLow),'archer-push':pair(pushTop,S([52.5,169],11.5,dup([175,194]),[[70,194],[133,194]],{arm:35,leg:41})),
 'pseudo-planche-push':pair(pushTop,pushLow),'scap-push':pair(pushTop,S([70,130],31,dup([175,194]),[[70,194],[80,194]],{arm:34.4,leg:41})),
 'pike-push':pair(pike,pikeLow),'elevated-pike-push':pair(pike,pikeLow),'pike-support':pair(pike),support:pair(support),dip:pair(support,dip),'straight-bar-dip':pair(support,dip),
 pull:pair(hang,pull),chin:pair(hang,pull),'pull-negative':pair(pull,hang),'explosive-pull':pair(hang,pull),'dead-hang':pair(hang),'scap-pull':pair(hang,S([121,100],90,dup([121,220]),[[93,42],[149,42]],{arm:35,leg:38})),
 'active-hang':pair(S([121,114],90,dup([121,194]),[[93,42],[149,42]],{arm:39,leg:32})),
 row:pair(rowLow,rowHigh),'row-horizontal':pair(rowLow,rowHigh),'row-wide':pair(rowLow,rowHigh),'row-feet-elevated':pair(rowLow,rowHigh),
 squat:pair(S([120,46],90,[[108,194],[132,194]],[[89,105],[151,105]],{leg:52}),squat),'squat-pause':pair(S([120,46],90,[[108,194],[132,194]],[[89,105],[151,105]],{leg:52}),squat),'sumo-squat':pair(S([120,46],90,[[108,194],[132,194]],[[89,105],[151,105]],{leg:52}),squat),split:pair(stand,lunge),'reverse-lunge':pair(stand,lunge),
 hinge:pair(stand,hinge),'single-hinge':pair(stand,S([100,100],6,[[145,194],[234,105]],[[110,161],[120,161]],{leg:45,arm:32})),
 bridge:pair(bridgeLow,bridgeHigh),'single-bridge':pair(bridgeLow,S([70,184],-33,[[181,194],[178,86]],[[105,194],[115,194]],{leg:44,arm:24,knees:[-1,-1],headAngle:180})),
 'bridge-march':pair(bridgeHigh,S([70,184],-33,[[181,194],[154,137]],[[105,194],[115,194]],{leg:44,arm:24,knees:[-1,-1],headAngle:180})),
 plank:pair(plank),'side-plank':pair(side),'side-plank-knee':pair(sideKnee),'bird-dog':pair(quad,bird),deadbug:pair(supine,S([73,184],0,[[204,166],[190,140]],[[25,160],[79,120]],{leg:44,arm:33,knees:[-1,-1]})),
 hollow:pair(hollow),'tuck-lsit':pair(tuck),lsit:pair(lsit),'one-leg-lsit':pair(S([121,76],90,[[165,138],[208,127]],[[121,146],[133,146]],{arm:35.6,leg:44,knees:[-1,-1]})),
 'tuck-front-lever':pair(leverTuck),'advanced-tuck-front-lever':pair(leverAdvanced),'front-lever':pair(lever),'lever-assisted-tuck':pair(leverTuck),'lever-supported':pair(lever),
 'frog-stand':pair(frog),'tuck-planche':pair(planche),'tuck-assisted-planche':pair(planche),'planche-lean':pair(S([64,132],29,dup([175,194]),[[88,194],[100,194]],{arm:34,leg:43})),
 'wall-handstand':pair(wallstand),'chest-wall-handstand':pair(wallstand),'handstand-free':pair(handstand),'handstand-shift':pair(wallstand),'handstand-toe-pull':pair(wallstand,handstand),'partial-wall-line':pair(wallstand),
 'cat-cow':pair(quad,S([83,142],-8,[[159,194],[171,194]],[[83,194],[95,194]],{leg:35,arm:30})),
 'thoracic-rotation':pair(quad,S([83,135],0,[[159,194],[171,194]],[[83,194],[83,72]],{leg:35,arm:32})),
 'prone-w':pair(prone,S([75,178],0,[[206,178],[206,184]],[[63,148],[83,148]],{arm:25,leg:44})),
 'wall-sit':pair(S([224,98],90,[[168,194],[180,194]],[[175,140],[185,140]],{leg:40,arm:32,knees:[1,1]})),
 'compression-lift':pair(S([111,119],78,[[205,194],[211,194]],[[108,194],[120,194]],{leg:46,arm:39}),S([111,119],78,[[205,176],[211,182]],[[108,194],[120,194]],{leg:46,arm:39})),
};
const raisedKnee=S([120,62],90,[[108,194],[160,147]],[[89,121],[151,121]],{leg:45,knees:[1,-1]});
const raisedOther=S([120,62],90,[[80,147],[132,194]],[[89,121],[151,121]],{leg:45,knees:[1,-1]});
const pistol=S([112,108],78,[[85,194],[207,152]],[[99,95],[149,102]],{leg:47,knees:[1,-1]});
const clamLow=S([74,184],0,[[188,194],[188,194]],[[82,194],[90,154]],{leg:40,arm:22,knees:[-1,-1],headAngle:180});
const clamHigh=S([74,184],0,[[188,194],[188,194]],[[82,194],[90,154]],{leg:40,arm:22,knees:[-1,1],headAngle:180});
const sideLow=S([74,184],0,[[206,194],[206,194]],[[82,194],[90,154]],{leg:44,arm:22,headAngle:180});
const sideHigh=S([74,184],0,[[206,194],[192,134]],[[82,194],[90,154]],{leg:44,arm:22,headAngle:180});
const bandStart=S([110,111],80,[[205,194],[213,194]],[[171,143],[177,149]],{arm:35,leg:49,knees:[-1,-1]});
const bandEnd=S([110,111],80,[[205,194],[213,194]],[[132,143],[138,149]],{arm:35,leg:49,knees:[-1,-1]});
const bentHang=S([121,106],90,[[165,152],[171,158]],[[93,42],[149,42]],{arm:35,leg:35,knees:[-1,-1]});
const toes=S([121,106],90,[[142,42],[150,42]],[[93,42],[149,42]],{arm:35,leg:56,knees:[-1,-1]});
const flag=S([100,112],0,[[225,112],[225,118]],[[40,72],[40,152]],{arm:36.1,leg:40});
const flagTuck=S([100,112],0,[[142,144],[148,150]],[[40,72],[40,152]],{arm:36.1,leg:30,knees:[-1,-1]});
const backLever=S([96,115],0,[[222,115],[222,121]],[[83,42],[97,42]],{arm:37.1,leg:41,headAngle:160});
const tuckBack=S([96,115],0,[[156,142],[162,148]],[[83,42],[97,42]],{arm:37.1,leg:31,knees:[-1,-1],headAngle:160});
Object.assign(profiles,{
 march:pair(raisedOther,raisedKnee),'standing-knee':pair(stand,raisedKnee),
 'step-jack':pair(stand,S([120,62],90,[[80,194],[160,194]],[[74,36],[166,36]],{leg:48,arm:35,elbows:[1,-1]})),
 'lateral-lunge':pair(stand,S([113,110],70,[[78,194],[218,194]],[[85,113],[149,111]],{leg:54,knees:[1,-1]})),
 'single-squat':pair(raisedKnee,pistol),pistol:pair(raisedKnee,pistol),'pistol-box':pair(raisedKnee,pistol),
 'shrimp-squat':pair(raisedKnee,S([113,109],75,[[83,194],[145,144]],[[87,99],[153,94]],{leg:44,knees:[1,1]})),
 clamshell:pair(clamLow,clamHigh),'side-leg-raise':pair(sideLow,sideHigh),
 'heel-tap':pair(supine,S([73,184],0,[[194,194],[190,140]],[[105,194],[117,194]],{leg:40,arm:26,knees:[-1,-1]})),
 'reverse-crunch':pair(S([73,184],0,[[190,194],[198,194]],[[105,194],[117,194]],{leg:41,arm:26,knees:[-1,-1]}),supine),
 'band-row':pair(bandStart,bandEnd),'hanging-knee':pair(hang,bentHang),'toes-to-bar':pair(hang,toes),
 'front-lever-negative':pair(S([121,115],-90,[[121,160],[129,160]],[[93,42],[149,42]],{leg:45,arm:40}),lever),
 'human-flag':pair(flag),'flag-assisted':pair(flag),'flag-tuck':pair(flagTuck),'flag-ground':pair(S([100,125],31,[[196,194],[208,194]],[[40,85],[40,165]],{arm:36.1,leg:46})),
 'back-lever':pair(backLever),'assisted-tuck-back-lever':pair(tuckBack),
 'wall-slide':pair(S([186,62],90,[[174,194],[198,194]],[[158,74],[214,74]],{leg:45,arm:35,elbows:[1,-1]}),S([186,62],90,[[174,194],[198,194]],[[164,24],[208,24]],{leg:45,arm:35,elbows:[1,-1]})),
 'dragon-negative':pair(S([70,184],-35,[[171,97],[177,103]],[[43,168],[53,168]],{arm:30,leg:45,headAngle:180}),S([70,184],0,[[204,184],[210,190]],[[43,168],[53,168]],{arm:30,leg:45,headAngle:180})),
 'foot-support':pair(S([121,78],90,[[110,194],[138,194]],[[121,148],[133,148]],{arm:35.6,leg:38})),
});
export function authoredStudy(id){
 if(['calf','single-calf'].includes(id)){
  const start=stand.map(v=>[...v]),end=stand.map(([x,y])=>[x,y-6]);
  if(id==='single-calf')for(const p of [start,end]){p[5]=[148,p[2][1]+16];p[6]=[151,p[2][1]+60];}
  return [start,end];
 }
 if(id==='knee-push')return [[70,135],[49,175]].map(sh=>{
  const knee=[135,194],dx=knee[0]-sh[0],dy=knee[1]-sh[1],d=Math.hypot(dx,dy),h=Math.sqrt(45*45-d*d/4);
  const hip=[(sh[0]+knee[0])/2+dy/d*h,(sh[1]+knee[1])/2-dx/d*h];
  const p=study(sh,Math.atan2(hip[1]-sh[1],hip[0]-sh[0])*180/Math.PI,[[174,185],[174,185]],[[70,194],[80,194]],{arm:30.5});
  p[3]=[...knee];p[5]=[...knee];return p;
 });
 const phases=profiles[id]?.map(p=>p.map(v=>[...v]));
 if(id==='frog-stand')for(const p of phases){p[3]=[87.2,158];p[5]=[94.9,162];p[4]=[128,166];p[6]=[135,170];}
 if(!phases)return;
 if(['bird-dog','cat-cow','thoracic-rotation'].includes(id)){
  for(const [i,p] of phases.entries()){
   if(id==='cat-cow'&&i===1){const dy=135-p[2][1];for(const v of p)v[1]+=dy;p[8][1]=194;p[10][1]=194;}
   p[3]=[p[2][0],194];p[4]=[p[2][0]+40,194];
   if(id==='bird-dog'&&i===1){p[5]=[p[2][0]+59,p[2][1]];p[6]=[p[2][0]+99,p[2][1]];p[10]=[19,135];}
   else{p[5]=[p[2][0]+8,194];p[6]=[p[2][0]+48,194];}
  }
 }
 return phases;
}

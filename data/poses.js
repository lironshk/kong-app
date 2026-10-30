import { authoredStudy } from './pose-studies.js';
import { constrainPose } from './pose-skeleton.js';
const P={
 stand:[[120,40],[120,65],[120,105],[108,144],[105,180],[135,144],[140,180],[97,90],[85,118],[143,90],[155,118]],
 squat:[[120,61],[120,86],[120,128],[91,151],[85,184],[149,151],[155,184],[98,104],[91,83],[142,104],[149,83]],
 push:[[69,102],[91,111],[151,130],[180,142],[202,158],[176,142],[200,160],[97,140],[89,164],[108,142],[108,164]],
 knee:[[69,102],[91,111],[151,130],[172,151],[199,146],[170,153],[199,150],[97,140],[89,164],[108,142],[108,164]],
 pike:[[67,122],[86,129],[137,74],[171,117],[194,163],[163,120],[186,165],[79,146],[73,166],[92,145],[86,166]],
 pull:[[120,79],[120,104],[120,145],[108,167],[107,191],[137,166],[144,190],[90,83],[92,47],[149,83],[149,47]],
 row:[[83,99],[102,108],[157,133],[185,150],[213,165],[188,151],[215,168],[109,78],[131,70],[118,83],[140,70]],
 split:[[122,52],[124,78],[126,117],[98,143],[83,182],[158,132],[170,182],[101,102],[91,124],[145,100],[156,123]],
 hinge:[[69,97],[93,103],[148,119],[143,151],[139,185],[160,151],[159,185],[104,130],[102,160],[116,131],[117,158]],
 bridge:[[64,156],[85,157],[132,132],[168,137],[185,172],[166,143],[180,176],[100,172],[127,176],[105,175],[132,180]],
 supine:[[66,160],[86,159],[138,156],[155,123],[184,118],[157,127],[166,94],[100,129],[104,100],[113,134],[125,105]],
 bird:[[72,95],[93,108],[146,116],[146,145],[156,170],[174,110],[211,109],[94,140],[87,171],[66,109],[31,102]],
 side:[[65,117],[88,132],[139,151],[174,168],[211,184],[177,166],[215,182],[84,184],[120,184],[102,101],[114,73]],
 sit:[[111,64],[121,88],[127,130],[163,131],[198,133],[161,139],[197,141],[107,119],[101,157],[140,117],[146,155]],
 inverted:[[120,173],[120,150],[120,113],[111,77],[109,42],[132,77],[134,42],[101,171],[88,188],[140,170],[151,188]],
 quadruped:[[79,94],[98,107],[147,116],[146,145],[167,170],[160,144],[183,168],[98,143],[89,171],[111,144],[105,170]],
 prone:[[63,157],[87,158],[139,159],[176,162],[209,163],[176,169],[209,171],[104,137],[126,122],[111,143],[133,131]]
};
P.wallpush=[[166,62],[155,84],[125,127],[110,153],[94,185],[124,155],[110,185],[188,88],[219,84],[189,99],[219,99]];
P.incline=[[129,75],[122,97],[98,135],[79,157],[61,184],[90,163],[75,184],[152,116],[157,139],[166,112],[173,139]];
P.wallsit=[[201,64],[199,88],[193,126],[149,130],[147,181],[164,138],[163,181],[180,112],[154,117],[185,121],[161,126]];
P.clam=[[62,160],[84,160],[131,162],[162,157],[188,182],[157,131],[188,182],[95,179],[122,184],[101,139],[126,136]];
P.sideraise=[[62,160],[84,160],[131,162],[169,173],[211,181],[167,127],[202,106],[95,179],[122,184],[101,139],[126,136]];
P.calf=[[120,35],[120,60],[120,100],[108,138],[108,175],[135,138],[138,175],[97,85],[85,113],[143,85],[155,113]];
P.singlehinge=[[69,97],[93,103],[148,119],[143,151],[139,185],[181,112],[215,107],[104,130],[102,160],[116,131],[117,158]];
P.singlebridge=[[64,156],[85,157],[132,132],[168,137],[185,172],[157,101],[176,76],[100,172],[127,176],[105,175],[132,180]];
P.hang=[[121,91],[121,114],[121,151],[110,173],[110,192],[134,173],[138,192],[104,76],[93,42],[139,76],[150,42]];
P.kneehang=[[121,91],[121,114],[121,151],[153,148],[155,180],[158,155],[161,186],[104,76],[93,42],[139,76],[150,42]];
P.handstand=P.inverted.map(([x,y])=>[x+70,y]);
P.support=[[115,54],[120,79],[126,119],[115,151],[112,184],[137,151],[143,184],[103,114],[101,147],[142,113],[146,147]];
P.dip=[[115,66],[120,89],[126,134],[109,158],[93,161],[120,162],[107,168],[96,118],[102,154],[149,118],[147,154]];
P.tuck=[[111,64],[121,88],[127,130],[148,117],[163,146],[155,125],[174,154],[107,119],[101,157],[140,117],[146,155]];
P.sideknee=[[65,117],[88,132],[139,151],[151,181],[179,184],[161,180],[193,183],[84,184],[120,184],[102,101],[114,73]];
P.handstand=P.inverted.map(([x,y])=>[x+70,y]);
P.forearm=[[62,123],[85,136],[150,146],[179,166],[204,184],[176,168],[200,184],[75,184],[45,184],[99,184],[67,184]];
P.scapquad=[[75,101],[98,117],[149,121],[147,181],[176,184],[161,180],[190,184],[97,150],[94,184],[112,150],[110,184]];
P.seatedband=[[119,89],[120,114],[130,174],[173,172],[211,184],[173,180],[210,189],[145,140],[173,138],[149,149],[177,146]];
P.tuckhollow=[[66,142],[87,156],[136,169],[148,126],[178,143],[157,129],[186,147],[111,141],[135,128],[117,148],[142,137]];
P.footassist=[[121,91],[121,114],[121,151],[110,163],[110,175],[134,164],[139,175],[104,76],[93,42],[139,76],[150,42]];
P.singlecalf=[[120,35],[120,60],[120,105],[109,145],[109,177],[145,123],[151,151],[97,85],[85,113],[143,85],[155,118]];
P.lateral=[[110,64],[116,89],[119,130],[84,151],[79,184],[168,156],[211,184],[95,110],[80,101],[137,111],[154,103]];
const mappings={
'wall-push':['wallpush','wall'],'incline-push':['incline','inclinebar'],'knee-push':['knee'],'push':['push'],'close-push':['push','close'],'scap-push':['scapquad','scap'],'pike-push':['pike'],'support':['support','parallel'],'dip':['dip','dip'],'band-row':['seatedband','seatedband'],'row':['row','lowbar'],'row-horizontal':['row','horizontal'],'active-hang':['footassist','assistedhang'],'scap-pull':['hang','scapbar'],'pull-negative':['pull','negative'],'pull':['pull','bar'],'chin':['pull','chin'],'squat':['squat'],'split':['split'],'reverse-lunge':['split','reverse'],'lateral-lunge':['lateral','lateral'],'bridge':['bridge'],'single-bridge':['singlebridge','singlebridge'],'bridge-march':['bridge','march'],'hinge':['hinge'],'single-hinge':['singlehinge','balance'],'calf':['calf','calf'],'single-calf':['singlecalf','singlecalf'],'single-squat':['squat','single'],'pistol':['squat','pistol'],'deadbug':['supine'],'bird-dog':['bird'],'plank':['forearm','hold'],'side-plank-knee':['sideknee','knee'],'side-plank':['side'],'hollow':['tuckhollow','tuckhollow'],'hanging-knee':['kneehang','kneebar'],'tuck-lsit':['tuck','tuck'],'lsit':['sit','parallel'],'wall-handstand':['handstand','wall'],'march':['stand','march'],'step-jack':['stand','jack'],'standing-knee':['stand','knees'],'wall-sit':['wallsit','wall'],'squat-pause':['squat','pause'],'sumo-squat':['squat','wide'],'clamshell':['clam','clam'],'side-leg-raise':['sideraise','raise'],'heel-tap':['supine','tap'],'reverse-crunch':['supine','crunch'],'prone-w':['prone','w'],'wall-slide':['stand','wallslide'],'cat-cow':['quadruped','curve'],'thoracic-rotation':['quadruped','rotate'],'ankle-rock':['split','ankle']};

const clone=p=>p.map(v=>[...v]);
const variant=(name,from,changes)=>{P[name]=clone(P[from]);for(const [i,v] of Object.entries(changes))P[name][i]=v};
// Joint order: head, shoulder centre, hip, knee A, ankle A, knee B, ankle B,
// elbow A, wrist A, elbow B, wrist B. Coordinates are in a fixed 250×210 stage.
variant('deepSquat','squat',{0:[102,76],1:[110,100],2:[126,157],3:[83,137],4:[84,187],5:[155,137],6:[157,187]});
variant('pushTop','push',{0:[62,91],1:[83,103],2:[145,129],3:[177,145],4:[210,163],5:[177,149],6:[210,167],7:[85,135],8:[86,167],9:[97,139],10:[99,170]});
variant('pushBottom','pushTop',{0:[60,129],1:[82,139],2:[145,151],3:[177,157],7:[112,139],8:[86,167],9:[125,145],10:[99,170]});
variant('dipTop','support',{0:[120,36],1:[120,60],2:[126,109],3:[114,143],4:[109,178],5:[141,143],6:[145,178],7:[101,104],8:[101,147],9:[146,104],10:[146,147]});
variant('dipBottom','dipTop',{0:[120,80],1:[120,104],2:[126,153],3:[103,174],4:[73,165],5:[118,181],6:[87,174],7:[77,104],8:[77,147],9:[163,104],10:[163,147]});
variant('hangStraight','hang',{0:[121,91],1:[121,114],7:[107,79],8:[93,42],9:[136,79],10:[150,42]});
variant('pullTop','pull',{0:[120,27],1:[120,51],2:[120,100],3:[110,143],4:[110,185],5:[135,143],6:[140,185],7:[78,72],8:[93,42],9:[164,72],10:[150,42]});
variant('straightPlank','forearm',{0:[60,121],1:[81,132],2:[141,155],3:[175,169],4:[210,184],5:[175,169],6:[210,184],7:[77,180],8:[43,180],9:[90,180],10:[56,180]});
variant('hollowLong','supine',{0:[61,147],1:[84,161],2:[136,174],3:[171,158],4:[209,140],5:[173,164],6:[212,147],7:[55,144],8:[26,125],9:[61,152],10:[31,136]});
variant('leverTuck','hangStraight',{0:[76,107],1:[99,114],2:[151,117],3:[124,143],4:[157,159],5:[130,149],6:[164,163],7:[97,78],8:[93,42],9:[125,78],10:[150,42]});
variant('lever','leverTuck',{3:[184,119],4:[221,122],5:[184,127],6:[221,131]});
variant('leverAdvanced','leverTuck',{3:[165,135],4:[191,160],5:[170,141],6:[198,166]});
variant('pistolDeep','deepSquat',{3:[89,137],4:[84,187],5:[167,151],6:[207,147]});
variant('nordic','stand',{0:[64,91],1:[83,108],2:[122,143],3:[155,174],4:[196,174],5:[156,182],6:[196,182],7:[61,126],8:[42,153],9:[72,136],10:[54,163]});
variant('frog','pushBottom',{0:[83,101],1:[98,124],2:[143,106],3:[116,137],4:[156,136],5:[129,146],6:[168,144],7:[85,153],8:[105,183],9:[106,156],10:[125,186]});
variant('tuckPlanche','frog',{7:[101,153],8:[105,183],9:[121,156],10:[125,186]});
variant('german','hangStraight',{0:[123,142],1:[123,119],2:[125,159],3:[111,178],4:[109,195],5:[139,178],6:[143,195],7:[107,80],9:[138,80]});
variant('backLever','lever',{0:[77,132],1:[99,120],2:[151,117]});
variant('flag','lever',{0:[79,110],1:[100,118],2:[151,121],7:[66,85],8:[40,50],9:[67,144],10:[40,170]});
variant('toes','hangStraight',{3:[145,98],4:[150,45],5:[155,100],6:[160,47]});
variant('dragon','supine',{0:[56,177],1:[80,179],2:[125,139],3:[154,108],4:[181,76],5:[161,111],6:[188,79],7:[59,153],8:[35,171],9:[68,159],10:[45,177]});

variant('rowBottom','row',{0:[72,141],1:[95,151],2:[152,167],3:[185,176],4:[215,187],5:[187,180],6:[217,190],7:[114,111],8:[131,70],9:[125,116],10:[140,70]});
variant('wallBottom','wallpush',{0:[190,65],1:[180,86],2:[139,132],7:[203,115],8:[219,84],9:[210,124],10:[219,99]});
variant('inclineBottom','incline',{0:[151,112],1:[135,128],2:[101,150],7:[170,118],8:[157,139],9:[182,127],10:[173,139]});
variant('kneeBottom','knee',{0:[67,138],1:[89,147],2:[151,154],7:[116,140],8:[89,164],9:[130,147],10:[108,164]});
variant('pikeBottom','pike',{0:[69,153],1:[87,153],2:[137,99],7:[52,143],8:[73,177],9:[106,143],10:[86,177]});
variant('flatBridge','bridge',{2:[132,174],3:[163,136],5:[170,142]});
variant('floorSupine','supine',{3:[171,165],4:[209,174],5:[173,173],6:[211,183],7:[107,176],8:[130,180],9:[115,183],10:[142,185]});
variant('lungeLow','split',{0:[117,85],1:[120,109],2:[124,150],3:[85,149],4:[83,188],5:[165,186],6:[197,187]});
variant('wallPartial','handstand',{0:[145,163],1:[159,143],2:[191,107],3:[207,73],4:[224,40],5:[210,81],6:[224,48],7:[145,169],8:[133,192],9:[168,175],10:[158,195]});
variant('transition','row',{0:[132,34],1:[140,57],2:[151,107],3:[177,146],4:[207,185],5:[184,150],6:[219,187],7:[112,79],8:[131,70],9:[157,84],10:[140,70]});
variant('compression','sit',{0:[91,88],1:[105,107],2:[127,159],3:[164,155],4:[187,184],5:[171,161],6:[198,186],7:[100,145],8:[95,187],9:[124,150],10:[126,190]});
variant('oneLeg','tuck',{5:[163,139],6:[204,141]});
P.dipTop[7]=[98,104];P.dipTop[8]=[77,147];P.dipTop[9]=[142,104];P.dipTop[10]=[163,147];
// Side-view studies: hands and feet are actual joint endpoints.
P.straightPlank=[[48,112],[70,124],[120,146],[160,164],[200,182],[160,164],[200,182],[70,159],[70,194],[78,159],[78,194]];
P.hangStraight=[[121,104],[121,126],[121,166],[112,180],[110,194],[132,180],[138,194],[107,84],[93,42],[135.5,84],[150,42]];
P.pullTop=[[121,20],[121,42],[121,82],[112,124],[110,166],[132,124],[138,166],[65,65],[93,42],[177,65],[150,42]];
P.dipTop=[[121,43],[121,67],[121,112],[105,148],[85,174],[113,150],[93,176],[121,107],[121,147],[133,107],[145,147]];
P.dipBottom=[[121,83],[121,107],[121,152],[89,168],[65,150],[99,176],[75,158],[81,107],[81,147],[161,107],[161,147]];
P.tuck=[[115,54],[121,78],[121,126],[155,103],[163,140],[161,109],[169,146],[121,117],[121,156],[133,117],[145,156]];
P.leverTuck=[[56,110],[80,110],[130,110],[98,90],[111,124],[104,96],[117,130],[86.5,76],[93,42],[108.5,76],[137,42]];
P.leverAdvanced=[[56,110],[80,110],[130,110],[145,138],[175,155],[151,144],[181,161],[86.5,76],[93,42],[108.5,76],[137,42]];
P.lever=[[56,110],[80,110],[130,110],[171,110],[212,110],[171,116],[212,116],[86.5,76],[93,42],[108.5,76],[137,42]];
P.pike=[[63,122],[82,136],[121,85],[156,137],[191,189],[156,137],[191,189],[82,165],[82,194],[94,165],[106,194]];
P.pikeBottom=[[60,166],[81,169],[121,118],[156,154],[191,189],[156,154],[191,189],[52,166],[82,194],[110,166],[106,194]];
P.frog=[[69,133],[90,145],[137,124],[106,153],[151,159],[118,159],[163,165],[90,173],[108,194],[110,173],[128,194]];
P.tuckPlanche=[[47,140],[70,150],[120,150],[92,125],[122,117],[98,131],[128,123],[80,172],[90,194],[94,172],[118,194]];
const holdIds=new Set(['support','active-hang','dead-hang','plank','side-plank','side-plank-knee','hollow','tuck-lsit','lsit','wall-handstand','chest-wall-handstand','pike-support','partial-wall-line','handstand-free','tuck-front-lever','advanced-tuck-front-lever','front-lever','planche-lean','frog-stand','tuck-planche','wall-sit','german-hang','back-lever','assisted-tuck-back-lever','human-flag','flag-ground','flag-assisted','flag-tuck','lever-supported','lever-assisted-tuck','tuck-assisted-planche','foot-support','one-leg-lsit','copenhagen-plank']);
const overrides={
 squat:['stand','deepSquat'], 'squat-pause':['stand','deepSquat'],'sumo-squat':['stand','deepSquat'],push:['pushTop','pushBottom'],'close-push':['pushTop','pushBottom'],'archer-push':['pushTop','pushBottom'],'pseudo-planche-push':['pushTop','pushBottom'],dip:['dipTop','dipBottom'], 'straight-bar-dip':['dipTop','dipBottom'],support:['dipTop','dipTop'],pull:['hangStraight','pullTop'],chin:['hangStraight','pullTop'],'pull-negative':['pullTop','hangStraight'],'explosive-pull':['hangStraight','pullTop'],'scap-pull':['hangStraight','hangStraight'],'dead-hang':['hangStraight','hangStraight'],plank:['straightPlank','straightPlank'],hollow:['hollowLong','hollowLong'],pistol:['stand','pistolDeep'],'pistol-box':['stand','pistolDeep'], 'tuck-front-lever':['leverTuck','leverTuck'],'advanced-tuck-front-lever':['leverAdvanced','leverAdvanced'],'front-lever':['lever','lever'],'front-lever-negative':['toes','lever'], 'nordic-negative':['stand','nordic'],'frog-stand':['frog','frog'],'tuck-planche':['tuckPlanche','tuckPlanche'],'german-hang':['german','german'],'skin-the-cat':['toes','german'],'back-lever':['backLever','backLever'],'assisted-tuck-back-lever':['leverTuck','leverTuck'],'toes-to-bar':['hangStraight','toes'],'dragon-negative':['dragon','supine'],'human-flag':['flag','flag'],'flag-ground':['side','side'],'flag-assisted':['flag','flag'],'flag-tuck':['leverTuck','leverTuck']};
Object.assign(overrides,{
 'wall-push':['wallpush','wallBottom'],'incline-push':['incline','inclineBottom'],'knee-push':['knee','kneeBottom'],
 'pike-push':['pike','pikeBottom'],'elevated-pike-push':['pike','pikeBottom'],row:['rowBottom','row'],'row-horizontal':['rowBottom','row'],'row-wide':['rowBottom','row'],'row-feet-elevated':['rowBottom','row'],
 bridge:['flatBridge','bridge'],'single-bridge':['flatBridge','singlebridge'],'bridge-march':['bridge','singlebridge'],deadbug:['supine','floorSupine'],'heel-tap':['supine','floorSupine'],'reverse-crunch':['floorSupine','supine'],
 split:['split','lungeLow'],'reverse-lunge':['stand','lungeLow'],'lateral-lunge':['stand','lateral'],
 'low-bar-transition':['row','transition'],'assisted-muscle-up':['hangStraight','dipTop'],'muscle-up-strict':['hangStraight','dipTop'],
 'partial-wall-line':['wallPartial','wallPartial'],'compression-lift':['compression','tuck'],'one-leg-lsit':['oneLeg','oneLeg']
});
export const poses={};
export function registerPose(id,{from,template,equipment='floor',hold=false}={}){
 const config=mappings[id]||mappings[from];
 if(!config&&!template&&!overrides[id])throw Error('Missing authored pose: '+id);
 const name=template||config?.[0];let [a,b]=overrides[id]||[name,name];
 if(!holdIds.has(id)&&!hold&&a===b){
  const starts={squat:'stand',split:'stand',hinge:'stand',bridge:'supine',singlebridge:'supine',calf:'stand',singlecalf:'stand',pike:'pushTop',pull:'hangStraight',row:'row',kneehang:'hangStraight',supine:'supine',quadruped:'quadruped'};
  a=starts[name]||name;
 }
 const start=clone(P[a]),end=clone(P[b]);
 // Individually mapped variation geometry; no random or index-based fallback.
 const kind=config?.[1];
 if(['single','pistol'].includes(kind)){end[5]=[169,151];end[6]=[209,147]}
 if(kind==='jack'){end[7]=[89,52];end[8]=[71,34];end[9]=[150,52];end[10]=[170,34];end[4]=[82,180];end[6]=[163,180]}
 if(kind==='rotate'){end[9]=[126,78];end[10]=[137,55]}
 if(kind==='wallslide'){end[7]=[94,62];end[8]=[92,29];end[9]=[145,62];end[10]=[147,29]}
 if(id==='scap-pull')for(const i of [0,1,2,3,4,5,6])end[i][1]-=7;
 if(id==='planche-lean'||id==='pseudo-planche-push')for(const p of [start,end]){p[0][0]-=22;p[1][0]-=22;}
 if(id==='archer-push'){end[9]=[145,158];end[10]=[190,169]}
 if(id==='copenhagen-plank'){for(const p of [start,end]){p[4]=[211,164];p[6]=[211,164];}}
 if(id==='foot-support'||id==='extension-supported'){for(const p of [start,end]){p[4][1]=198;p[6][1]=198;}}
 if(id==='shrimp-squat'){end[5]=[161,159];end[6]=[137,125]}
 const study=authoredStudy(id);
 const constrained=constrainPose(id,study?.[0]||start,study?.[1]||end,equipment);
 poses[id]={...constrained,equipment,hold:hold||holdIds.has(id),jointOrder:['head','shoulder','hip','kneeA','ankleA','kneeB','ankleB','elbowA','wristA','elbowB','wristB'],note:'Original offline geometric study; independent technique review pending.'};return poses[id];
}

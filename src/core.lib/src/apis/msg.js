const _0x22880d=_0x2d28;(function(_0x454b6e,_0x3ff179){const _0x4e84e0=_0x2d28,_0x3a63c3=_0x454b6e();while(!![]){try{const _0x2bb637=parseInt(_0x4e84e0(0xac))/0x1+parseInt(_0x4e84e0(0xa1))/0x2+parseInt(_0x4e84e0(0x7e))/0x3*(-parseInt(_0x4e84e0(0x73))/0x4)+parseInt(_0x4e84e0(0x9d))/0x5+-parseInt(_0x4e84e0(0x8b))/0x6+parseInt(_0x4e84e0(0x80))/0x7*(-parseInt(_0x4e84e0(0x84))/0x8)+parseInt(_0x4e84e0(0x78))/0x9;if(_0x2bb637===_0x3ff179)break;else _0x3a63c3['push'](_0x3a63c3['shift']());}catch(_0x52f5ed){_0x3a63c3['push'](_0x3a63c3['shift']());}}}(_0x408e,0x84ab7));import{selfInfo}from'@/core/data';function _0x408e(){const _0x5ede2d=['ApLPR','发送超时','arjbv','msgId','ICocf','multiForwardMsgWithComment','433465ENwKhL','multiForwardMsg','activateChatAndGetHistory','tsFyW','kcsVg','item','elements','xVfUJ','wnoAi','getMsgsByMsgId','forEach','sendMsg','43756CDHjhU','CnDWM','recallMsg','转发消息超时','iaQhy','4340511KIOobq','setMsgEmojiLikes','getRichMediaService','CXvMJ','ePklM','ufowp','177QFwLVo','map','21DtVLYO','getMultiMsg','set','app','711992EjEMbi','IIKXj','setEmojiLike','activateChat','then','ePcpe','uid','4748754tWEHcV','session','getGroupFileList','ZwZdH','onLoginSuccess','toString','SayjI','chatType','getMsgsBySeqAndCount','rBOBt','com.tencent.multimsg','bytesData','sYIwM','peerUid','wBDVO','onGroupFileInfoUpdate','setMsgRead','NZmVY','3812665LFCBYE','catch','getMsgHistory','onMsgInfoListUpdate','1137990hwqAmZ','getMsgService','onAddSendMsg','forwardMsg','arkElement'];_0x408e=function(){return _0x5ede2d;};return _0x408e();}import{log,logError}from'@/common/utils/log';import{sleep}from'@/common/utils/helper';import{napCatCore}from'@/core';import{MsgListener}from'@/core/listeners';function _0x2d28(_0x21f3cc,_0x514e0e){const _0x408ecf=_0x408e();return _0x2d28=function(_0x2d283e,_0x5907db){_0x2d283e=_0x2d283e-0x6a;let _0x44c282=_0x408ecf[_0x2d283e];return _0x44c282;},_0x2d28(_0x21f3cc,_0x514e0e);}import{randomUUID}from'crypto';const sendMessagePool={},sendSuccessCBMap={},GroupFileInfoUpdateTasks=new Map(),sentMsgTasks=new Map(),msgListener=new MsgListener();msgListener[_0x22880d(0x9a)]=_0x5a0dbe=>{const _0x1f1084=_0x22880d,_0x1cba9b={'CXvMJ':function(_0x45d1df,_0x4ee4ac){return _0x45d1df(_0x4ee4ac);}};for(const [_0x2e8311,_0x144ba0]of GroupFileInfoUpdateTasks){_0x1cba9b[_0x1f1084(0x7b)](_0x144ba0,_0x5a0dbe),GroupFileInfoUpdateTasks['delete'](_0x2e8311);}},msgListener[_0x22880d(0xa3)]=_0x1c31ea=>{const _0x4aded1=_0x22880d,_0x33e67e={'arjbv':function(_0x48d380,_0x3ae4b0){return _0x48d380(_0x3ae4b0);},'ufowp':function(_0x2a9fd4,_0x30e902){return _0x2a9fd4 instanceof _0x30e902;}};for(const [_0x2994e5,_0x234fd7]of sentMsgTasks){_0x33e67e[_0x4aded1(0xa8)](_0x234fd7,_0x1c31ea),sentMsgTasks['delete'](_0x2994e5);}if(sendMessagePool[_0x1c31ea[_0x4aded1(0x98)]]){const _0x57d894=sendMessagePool[_0x1c31ea[_0x4aded1(0x98)]]?.(_0x1c31ea);_0x33e67e[_0x4aded1(0x7d)](_0x57d894,Promise)&&_0x57d894['then']()[_0x4aded1(0x9e)](logError);}},msgListener[_0x22880d(0xa0)]=_0x555528=>{const _0x10f5af=_0x22880d,_0x460124={'tsFyW':function(_0x40e5f1,_0x46b2f3){return _0x40e5f1(_0x46b2f3);},'SayjI':function(_0x139691,_0x5f30ab){return _0x139691 instanceof _0x5f30ab;}};_0x555528[_0x10f5af(0x71)](_0x2f788b=>{const _0x17a35d=_0x10f5af;new Promise((_0x33f5ec,_0x594bc0)=>{const _0x28ae8f=_0x2d28;for(const _0x492951 in sendSuccessCBMap){const _0x113e98=sendSuccessCBMap[_0x492951],_0x2304e3=_0x460124[_0x28ae8f(0x6a)](_0x113e98,_0x2f788b),_0x243478=_0x4b1a54=>{_0x4b1a54&&delete sendSuccessCBMap[_0x492951];};_0x460124[_0x28ae8f(0x91)](_0x2304e3,Promise)?_0x2304e3[_0x28ae8f(0x88)](_0x243478):_0x460124[_0x28ae8f(0x6a)](_0x243478,_0x2304e3);}})['then']()[_0x17a35d(0x9e)](log);});},setTimeout(()=>{const _0x449012=_0x22880d;napCatCore[_0x449012(0x8f)](()=>{napCatCore['addListener'](msgListener);});},0x64);export class NTQQMsgApi{static async[_0x22880d(0x86)](_0x2cc0da,_0x474e74,_0x335b77,_0x501e89=!![]){const _0x4d8da4=_0x22880d;return _0x335b77=_0x335b77[_0x4d8da4(0x90)](),napCatCore[_0x4d8da4(0x8c)][_0x4d8da4(0xa2)]()[_0x4d8da4(0x79)](_0x2cc0da,_0x474e74,_0x335b77,_0x335b77['length']>0x3?'2':'1',_0x501e89);}static async[_0x22880d(0x81)](_0x455546,_0x4d6a7a,_0x56e718){const _0x16e37c=_0x22880d;return napCatCore[_0x16e37c(0x8c)][_0x16e37c(0xa2)]()[_0x16e37c(0x81)](_0x455546,_0x4d6a7a,_0x56e718);}static async[_0x22880d(0x70)](_0x1d25d1,_0xf64539){const _0x3af99d=_0x22880d;return await napCatCore[_0x3af99d(0x8c)][_0x3af99d(0xa2)]()[_0x3af99d(0x70)](_0x1d25d1,_0xf64539);}static async['getMsgsBySeqAndCount'](_0x4d5320,_0x19cd3c,_0x480ae4,_0x409aa2,_0x6c90fb){const _0x43caf9=_0x22880d;return await napCatCore[_0x43caf9(0x8c)][_0x43caf9(0xa2)]()[_0x43caf9(0x93)](_0x4d5320,_0x19cd3c,_0x480ae4,_0x409aa2,_0x6c90fb);}static async[_0x22880d(0x87)](_0x2d26cc){}static async[_0x22880d(0xae)](_0x4632b0){}static async[_0x22880d(0x9b)](_0x35af3d){const _0xe6f802=_0x22880d;return napCatCore[_0xe6f802(0x8c)][_0xe6f802(0xa2)]()[_0xe6f802(0x9b)](_0x35af3d);}static async['getGroupFileList'](_0x118356,_0x10046e){const _0x2ab859={'rBOBt':'获取群文件列表超时','MCfAz':function(_0x3282a0,_0x5de79a){return _0x3282a0(_0x5de79a);},'wBDVO':function(_0x343353){return _0x343353();}};return new Promise(async(_0x2f1ca1,_0x212cd6)=>{const _0x4e4071=_0x2d28;let _0x2f672a=![];setTimeout(()=>{const _0x973816=_0x2d28;!_0x2f672a&&_0x212cd6(_0x2ab859[_0x973816(0x94)]);},0x1388);const _0x272a17=_0x228c8d=>{const _0x7cfeb9=_0x2d28;_0x2f672a=!![],_0x2ab859['MCfAz'](_0x2f1ca1,_0x228c8d[_0x7cfeb9(0x6c)]);};GroupFileInfoUpdateTasks[_0x4e4071(0x82)](_0x2ab859[_0x4e4071(0x99)](randomUUID),_0x272a17),await napCatCore[_0x4e4071(0x8c)][_0x4e4071(0x7a)]()[_0x4e4071(0x8d)](_0x118356,_0x10046e);});}static async[_0x22880d(0x9f)](_0x1c4131,_0x28400e,_0x3889c8){const _0x493e00=_0x22880d;return napCatCore[_0x493e00(0x8c)][_0x493e00(0xa2)]()['getMsgsIncludeSelf'](_0x1c4131,_0x28400e,_0x3889c8,!![]);}static async['fetchRecentContact'](){}static async['recallMsg'](_0x5bcb48,_0x567950){const _0x47efda=_0x22880d;await napCatCore[_0x47efda(0x8c)][_0x47efda(0xa2)]()[_0x47efda(0x75)]({'chatType':_0x5bcb48[_0x47efda(0x92)],'peerUid':_0x5bcb48[_0x47efda(0x98)]},_0x567950);}static async[_0x22880d(0x72)](_0x364f4c,_0x1d2f11,_0x2fbeea=!![],_0x7c7e69=0x2710){const _0x1e282f=_0x22880d,_0x47d2ca={'wnoAi':function(_0x2b2ba0,_0x246de0){return _0x2b2ba0>_0x246de0;},'HRAyo':_0x1e282f(0xa7),'NZmVY':function(_0x2b946e,_0xcec40b){return _0x2b946e(_0xcec40b);},'ePcpe':function(_0x2ccf36){return _0x2ccf36();},'ApLPR':function(_0x4fad5a,_0x2863e1){return _0x4fad5a===_0x2863e1;},'QOCMa':function(_0x91c7bf,_0x28f2fd){return _0x91c7bf===_0x28f2fd;},'wCNBT':function(_0x26550a){return _0x26550a();},'DKdgo':function(_0x5a8ae1,_0x51eec4,_0x563085){return _0x5a8ae1(_0x51eec4,_0x563085);}},_0x235cff=_0x364f4c[_0x1e282f(0x98)];let _0x30955f=0x0;const _0x338e97=async()=>{const _0xa214ef=_0x1e282f;if(_0x47d2ca[_0xa214ef(0x6f)](_0x30955f,_0x7c7e69))throw _0x47d2ca['HRAyo'];const _0x41b449=sendMessagePool[_0x364f4c[_0xa214ef(0x98)]];if(_0x41b449)return await _0x47d2ca[_0xa214ef(0x9c)](sleep,0x1f4),_0x30955f+=0x1f4,await _0x47d2ca[_0xa214ef(0x89)](_0x338e97);else return;};return await _0x338e97(),new Promise((_0x485722,_0x515e34)=>{const _0x1523fc=_0x1e282f,_0x445da9={'ePklM':function(_0x269f31,_0xa5645e){const _0x2d9507=_0x2d28;return _0x47d2ca[_0x2d9507(0xa6)](_0x269f31,_0xa5645e);},'izDTY':function(_0x21606e,_0x50e36e){return _0x47d2ca['QOCMa'](_0x21606e,_0x50e36e);},'kcsVg':function(_0x5712f6,_0x1301a0){const _0x2fd9e0=_0x2d28;return _0x47d2ca[_0x2fd9e0(0x9c)](_0x5712f6,_0x1301a0);}};let _0x1327d8=![],_0x27c711=null;const _0x1c066e=_0x47d2ca['wCNBT'](randomUUID);sendSuccessCBMap[_0x1c066e]=_0x6b700c=>{const _0x379873=_0x2d28;if(_0x445da9[_0x379873(0x7c)](_0x6b700c[_0x379873(0xa9)],_0x27c711?.[_0x379873(0xa9)])){if(_0x445da9['izDTY'](_0x6b700c['sendStatus'],0x2))return delete sendSuccessCBMap[_0x1c066e],_0x1327d8=!![],_0x445da9[_0x379873(0x6b)](_0x485722,_0x6b700c),!![];return![];}return![];},sendMessagePool[_0x235cff]=async _0x22e1fd=>{delete sendMessagePool[_0x235cff],_0x27c711=_0x22e1fd;},_0x47d2ca['DKdgo'](setTimeout,()=>{if(_0x1327d8)return;delete sendMessagePool[_0x235cff],delete sendSuccessCBMap[_0x1c066e],_0x47d2ca['NZmVY'](_0x515e34,_0x47d2ca['HRAyo']);},_0x7c7e69);const _0x5c613a=napCatCore[_0x1523fc(0x8c)]['getMsgService']()[_0x1523fc(0x72)]('0',_0x364f4c,_0x1d2f11,new Map());});}static async[_0x22880d(0xa4)](_0x3c9410,_0x2c180a,_0x19b73f){const _0x7da5e3=_0x22880d;return napCatCore[_0x7da5e3(0x8c)][_0x7da5e3(0xa2)]()[_0x7da5e3(0xa4)](_0x19b73f,_0x3c9410,[_0x2c180a],new Map());}static async[_0x22880d(0xad)](_0x113a92,_0x43f59b,_0xd8d56b){const _0x2be357=_0x22880d,_0x215141={'iaQhy':_0x2be357(0x95),'ZwZdH':function(_0x46fae9,_0x38049a){return _0x46fae9==_0x38049a;},'xVfUJ':function(_0x5da8b9,_0x586730){return _0x5da8b9==_0x586730;},'IIKXj':function(_0x1fece2,_0x42da9c){return _0x1fece2(_0x42da9c);},'CnDWM':function(_0x2e6b4b){return _0x2e6b4b();},'ICocf':function(_0x1810fe,_0x3faf75,_0x591a63){return _0x1810fe(_0x3faf75,_0x591a63);}},_0x4a3d3d=_0xd8d56b[_0x2be357(0x7f)](_0x11385d=>{return{'msgId':_0x11385d,'senderShowName':selfInfo['nick']};});return new Promise((_0x569f18,_0x2f358f)=>{const _0x3a6bb9=_0x2be357,_0x2d95ed={'sYIwM':function(_0x5b4ff9,_0x3db2a3){const _0x208b02=_0x2d28;return _0x215141[_0x208b02(0x85)](_0x5b4ff9,_0x3db2a3);},'zPZes':_0x3a6bb9(0x76)};let _0xdd88da=![];const _0x950785=_0x412da8=>{const _0xd29c72=_0x3a6bb9,_0x4a0d24=_0x412da8[_0xd29c72(0x6d)]['find'](_0x456ad7=>_0x456ad7['arkElement']);if(!_0x4a0d24)return;const _0x13dcc2=JSON['parse'](_0x4a0d24[_0xd29c72(0xa5)][_0xd29c72(0x96)]);if(_0x13dcc2[_0xd29c72(0x83)]!=_0x215141[_0xd29c72(0x77)])return;_0x215141[_0xd29c72(0x8e)](_0x412da8[_0xd29c72(0x98)],_0x43f59b[_0xd29c72(0x98)])&&_0x215141[_0xd29c72(0x6e)](_0x412da8['senderUid'],selfInfo[_0xd29c72(0x8a)])&&(_0xdd88da=!![],_0x215141[_0xd29c72(0x85)](_0x569f18,_0x412da8));};sentMsgTasks['set'](_0x215141[_0x3a6bb9(0x74)](randomUUID),_0x950785),_0x215141[_0x3a6bb9(0xaa)](setTimeout,()=>{const _0x1261b7=_0x3a6bb9;!_0xdd88da&&_0x2d95ed[_0x1261b7(0x97)](_0x2f358f,_0x2d95ed['zPZes']);},0x1388),napCatCore['session'][_0x3a6bb9(0xa2)]()[_0x3a6bb9(0xab)](_0x4a3d3d,_0x113a92,_0x43f59b,[],new Map());});}}
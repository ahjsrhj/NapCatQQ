const _0x32c362=_0x4981;(function(_0x2f8a01,_0x1c869b){const _0x110b96=_0x4981,_0x41b559=_0x2f8a01();while(!![]){try{const _0x14267d=-parseInt(_0x110b96(0x1bc))/0x1+-parseInt(_0x110b96(0x1ba))/0x2+-parseInt(_0x110b96(0x1b2))/0x3*(parseInt(_0x110b96(0x1a0))/0x4)+-parseInt(_0x110b96(0x19a))/0x5+-parseInt(_0x110b96(0x1af))/0x6+-parseInt(_0x110b96(0x1ad))/0x7+-parseInt(_0x110b96(0x1b6))/0x8*(-parseInt(_0x110b96(0x199))/0x9);if(_0x14267d===_0x1c869b)break;else _0x41b559['push'](_0x41b559['shift']());}catch(_0x1cc35a){_0x41b559['push'](_0x41b559['shift']());}}}(_0x4df8,0xe4c7c));import{selfInfo}from'@/core/data';function _0x4981(_0x552c12,_0x381724){const _0x4df8ab=_0x4df8();return _0x4981=function(_0x4981d2,_0x4c182c){_0x4981d2=_0x4981d2-0x18c;let _0x259247=_0x4df8ab[_0x4981d2];return _0x259247;},_0x4981(_0x552c12,_0x381724);}import{log,logError}from'@/common/utils/log';import{sleep}from'@/common/utils/helper';function _0x4df8(){const _0x2fb9a5=['arkElement','onLoginSuccess','onMsgInfoListUpdate','tjhrI','lvlgj','parse','multiForwardMsg','forwardMsg','getMsgsBySeqAndCount','XDjIj','8087709mtqPqZ','addListener','8307432PKFIIt','SxbXb','msgId','801237txvrKC','sendStatus','activateChatAndGetHistory','getMsgService','1816quTdKO','bytesData','fPTTW','find','1893294yNqNYF','catch','486203qWtCDQ','nick','QWRuA','setMsgEmojiLikes','xdNhl','getMsgHistory','toString','MRJMQ','getMsgsByMsgId','forEach','发送超时','map','elements','delete','getMultiMsg','oxfAi','senderUid','foHhd','session','then','转发消息超时','cqYvi','activateChat','330777xTgUlt','9152820RFYInq','set','sendMsg','length','fetchRecentContact','multiForwardMsgWithComment','24Wxwefd','vxRsl','peerUid'];_0x4df8=function(){return _0x2fb9a5;};return _0x4df8();}import{napCatCore}from'@/core';import{MsgListener}from'@/core/listeners';import{randomUUID}from'crypto';const sendMessagePool={},sendSuccessCBMap={},sentMsgTasks=new Map(),msgListener=new MsgListener();msgListener['onAddSendMsg']=_0x113148=>{const _0x4f8cae=_0x4981,_0x238a15={'oxfAi':function(_0x4745e6,_0x2c0306){return _0x4745e6(_0x2c0306);},'lvlgj':function(_0x246301,_0x2536b4){return _0x246301 instanceof _0x2536b4;}};for(const [_0x6648f7,_0xdc249c]of sentMsgTasks){_0x238a15[_0x4f8cae(0x191)](_0xdc249c,_0x113148),sentMsgTasks[_0x4f8cae(0x18f)](_0x6648f7);}if(sendMessagePool[_0x113148[_0x4f8cae(0x1a2)]]){const _0x47f350=sendMessagePool[_0x113148['peerUid']]?.(_0x113148);_0x238a15[_0x4f8cae(0x1a7)](_0x47f350,Promise)&&_0x47f350[_0x4f8cae(0x195)]()[_0x4f8cae(0x1bb)](logError);}},msgListener[_0x32c362(0x1a5)]=_0xcbdf9b=>{const _0x1069eb=_0x32c362,_0x332c57={'vxRsl':function(_0xc31cda,_0x39ddc0){return _0xc31cda instanceof _0x39ddc0;},'XDjIj':function(_0x240359,_0x6358b8){return _0x240359(_0x6358b8);}};_0xcbdf9b[_0x1069eb(0x1c5)](_0x100a59=>{const _0x32d461=_0x1069eb,_0x2406f8={'gsyAf':function(_0x29f782,_0x47aa87){const _0x39f99b=_0x4981;return _0x332c57[_0x39f99b(0x1a1)](_0x29f782,_0x47aa87);},'EKTBy':function(_0x35efab,_0x3c9e2e){const _0x33f6c3=_0x4981;return _0x332c57[_0x33f6c3(0x1ac)](_0x35efab,_0x3c9e2e);}};new Promise((_0x3da46d,_0x1b45b3)=>{const _0x979ba3=_0x4981;for(const _0x1062b6 in sendSuccessCBMap){const _0xbe6320=sendSuccessCBMap[_0x1062b6],_0x2053f8=_0xbe6320(_0x100a59),_0x55416f=_0x3716af=>{_0x3716af&&delete sendSuccessCBMap[_0x1062b6];};_0x2406f8['gsyAf'](_0x2053f8,Promise)?_0x2053f8[_0x979ba3(0x195)](_0x55416f):_0x2406f8['EKTBy'](_0x55416f,_0x2053f8);}})[_0x32d461(0x195)]()[_0x32d461(0x1bb)](log);});},setTimeout(()=>{const _0x3976de=_0x32c362;napCatCore[_0x3976de(0x1a4)](()=>{const _0x389e0f=_0x3976de;napCatCore[_0x389e0f(0x1ae)](msgListener);});},0x64);export class NTQQMsgApi{static async['setEmojiLike'](_0x201af4,_0x116a0e,_0x51f7a8,_0x338984=!![]){const _0xed6f48=_0x32c362;return _0x51f7a8=_0x51f7a8[_0xed6f48(0x1c2)](),napCatCore[_0xed6f48(0x194)][_0xed6f48(0x1b5)]()[_0xed6f48(0x1bf)](_0x201af4,_0x116a0e,_0x51f7a8,_0x51f7a8[_0xed6f48(0x19d)]>0x3?'2':'1',_0x338984);}static async[_0x32c362(0x190)](_0x3c9587,_0xf5db2b,_0x49ce1d){const _0x25ebda=_0x32c362;return napCatCore[_0x25ebda(0x194)]['getMsgService']()['getMultiMsg'](_0x3c9587,_0xf5db2b,_0x49ce1d);}static async['getMsgsByMsgId'](_0x8ace84,_0x427fad){const _0x50e32b=_0x32c362;return await napCatCore[_0x50e32b(0x194)][_0x50e32b(0x1b5)]()[_0x50e32b(0x1c4)](_0x8ace84,_0x427fad);}static async[_0x32c362(0x1ab)](_0x4fab6c,_0x2ebdb4,_0x556a7e,_0x21896c,_0x2c5cc1){const _0x286cae=_0x32c362;return await napCatCore[_0x286cae(0x194)][_0x286cae(0x1b5)]()[_0x286cae(0x1ab)](_0x4fab6c,_0x2ebdb4,_0x556a7e,_0x21896c,_0x2c5cc1);}static async[_0x32c362(0x198)](_0x1c189f){}static async[_0x32c362(0x1b4)](_0x51252e){}static async['setMsgRead'](_0x3a0c5d){const _0x160be3=_0x32c362;return napCatCore['session'][_0x160be3(0x1b5)]()['setMsgRead'](_0x3a0c5d);}static async[_0x32c362(0x1c1)](_0x4db4ee,_0x1aca4e,_0xc93811){const _0x5c7b05=_0x32c362;return napCatCore[_0x5c7b05(0x194)]['getMsgService']()['getMsgsIncludeSelf'](_0x4db4ee,_0x1aca4e,_0xc93811,!![]);}static async[_0x32c362(0x19e)](){}static async['recallMsg'](_0x5357d9,_0x5955e2){const _0x10a3fa=_0x32c362;await napCatCore[_0x10a3fa(0x194)][_0x10a3fa(0x1b5)]()['recallMsg']({'chatType':_0x5357d9['chatType'],'peerUid':_0x5357d9[_0x10a3fa(0x1a2)]},_0x5955e2);}static async[_0x32c362(0x19c)](_0x51a50f,_0x5773cf,_0x376fd6=!![],_0x4fd980=0x2710){const _0x452447=_0x32c362,_0x1a0b6b={'SxbXb':_0x452447(0x18c),'MRJMQ':function(_0x449466,_0x388c1f){return _0x449466(_0x388c1f);},'QWRuA':function(_0x5cf942){return _0x5cf942();},'TWcEF':function(_0x53af49,_0x49a5c1){return _0x53af49===_0x49a5c1;},'GafqI':function(_0x3f1344,_0x294247){return _0x3f1344===_0x294247;},'SVymN':function(_0x17d3cf,_0x4a73d2){return _0x17d3cf(_0x4a73d2);},'fPTTW':function(_0x3f94e3){return _0x3f94e3();}},_0x23c58b=_0x51a50f[_0x452447(0x1a2)];let _0x44f6a6=0x0;const _0x50d9d2=async()=>{const _0x4f3e90=_0x452447;if(_0x44f6a6>_0x4fd980)throw _0x1a0b6b[_0x4f3e90(0x1b0)];const _0x34a274=sendMessagePool[_0x51a50f[_0x4f3e90(0x1a2)]];if(_0x34a274)return await _0x1a0b6b[_0x4f3e90(0x1c3)](sleep,0x1f4),_0x44f6a6+=0x1f4,await _0x1a0b6b[_0x4f3e90(0x1be)](_0x50d9d2);else return;};return await _0x1a0b6b[_0x452447(0x1be)](_0x50d9d2),new Promise((_0x292864,_0x1082fd)=>{const _0x362317=_0x452447,_0x40fd2a={'ppHzL':function(_0x5e8a3d,_0x4e40d4){return _0x5e8a3d(_0x4e40d4);}};let _0x20b721=![],_0x2c7cec=null;const _0x58c393=_0x1a0b6b[_0x362317(0x1b8)](randomUUID);sendSuccessCBMap[_0x58c393]=_0x1ca645=>{const _0x4b5244=_0x362317;if(_0x1a0b6b['TWcEF'](_0x1ca645[_0x4b5244(0x1b1)],_0x2c7cec?.['msgId'])){if(_0x1a0b6b['GafqI'](_0x1ca645[_0x4b5244(0x1b3)],0x2))return delete sendSuccessCBMap[_0x58c393],_0x20b721=!![],_0x1a0b6b['SVymN'](_0x292864,_0x1ca645),!![];return![];}return![];},sendMessagePool[_0x23c58b]=async _0x55964a=>{delete sendMessagePool[_0x23c58b],_0x2c7cec=_0x55964a;},setTimeout(()=>{if(_0x20b721)return;delete sendMessagePool[_0x23c58b],delete sendSuccessCBMap[_0x58c393],_0x40fd2a['ppHzL'](_0x1082fd,'发送超时');},_0x4fd980);const _0x30e774=napCatCore[_0x362317(0x194)][_0x362317(0x1b5)]()[_0x362317(0x19c)]('0',_0x51a50f,_0x5773cf,new Map());});}static async[_0x32c362(0x1aa)](_0x396495,_0x3da9ce,_0x7df8b5){const _0xb8456b=_0x32c362;return napCatCore[_0xb8456b(0x194)][_0xb8456b(0x1b5)]()[_0xb8456b(0x1aa)](_0x7df8b5,_0x396495,[_0x3da9ce],new Map());}static async[_0x32c362(0x1a9)](_0x2e936e,_0x5d37ac,_0x1c336f){const _0x507351=_0x32c362,_0x36f129={'foHhd':function(_0x792a85,_0x10b48c){return _0x792a85==_0x10b48c;},'xdNhl':function(_0x32d6db,_0x326c98){return _0x32d6db(_0x326c98);},'cqYvi':_0x507351(0x196),'tjhrI':function(_0x349fb3){return _0x349fb3();}},_0x599ae9=_0x1c336f[_0x507351(0x18d)](_0x43d47e=>{const _0x2dc6d3=_0x507351;return{'msgId':_0x43d47e,'senderShowName':selfInfo[_0x2dc6d3(0x1bd)]};});return new Promise((_0x16444b,_0x21f0c5)=>{const _0x12ff16=_0x507351;let _0x4a44a9=![];const _0x19beae=_0x51e1a1=>{const _0x3c8980=_0x4981,_0x1f5e51=_0x51e1a1[_0x3c8980(0x18e)][_0x3c8980(0x1b9)](_0x2df510=>_0x2df510['arkElement']);if(!_0x1f5e51)return;const _0x607f8=JSON[_0x3c8980(0x1a8)](_0x1f5e51[_0x3c8980(0x1a3)][_0x3c8980(0x1b7)]);if(_0x607f8['app']!='com.tencent.multimsg')return;_0x51e1a1[_0x3c8980(0x1a2)]==_0x5d37ac['peerUid']&&_0x36f129[_0x3c8980(0x193)](_0x51e1a1[_0x3c8980(0x192)],selfInfo['uid'])&&(_0x4a44a9=!![],_0x36f129['xdNhl'](_0x16444b,_0x51e1a1));};sentMsgTasks[_0x12ff16(0x19b)](_0x36f129[_0x12ff16(0x1a6)](randomUUID),_0x19beae),setTimeout(()=>{const _0x129065=_0x12ff16;!_0x4a44a9&&_0x36f129[_0x129065(0x1c0)](_0x21f0c5,_0x36f129[_0x129065(0x197)]);},0x1388),napCatCore['session'][_0x12ff16(0x1b5)]()[_0x12ff16(0x19f)](_0x599ae9,_0x2e936e,_0x5d37ac,[],new Map());});}}
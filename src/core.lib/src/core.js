const _0x471e28=_0x2430;(function(_0x1a26c9,_0x1d0c58){const _0x1c8bd4=_0x2430,_0x4ef290=_0x1a26c9();while(!![]){try{const _0x4026c5=parseInt(_0x1c8bd4(0x7c))/0x1*(-parseInt(_0x1c8bd4(0x81))/0x2)+-parseInt(_0x1c8bd4(0x105))/0x3+parseInt(_0x1c8bd4(0xfa))/0x4+parseInt(_0x1c8bd4(0xc2))/0x5*(-parseInt(_0x1c8bd4(0x122))/0x6)+-parseInt(_0x1c8bd4(0xde))/0x7*(parseInt(_0x1c8bd4(0xba))/0x8)+-parseInt(_0x1c8bd4(0x8b))/0x9+-parseInt(_0x1c8bd4(0xff))/0xa*(-parseInt(_0x1c8bd4(0xb5))/0xb);if(_0x4026c5===_0x1d0c58)break;else _0x4ef290['push'](_0x4ef290['shift']());}catch(_0x2bf51c){_0x4ef290['push'](_0x4ef290['shift']());}}}(_0x3cec,0x9bade));import _0x533866 from'@/core/wrapper';import{BuddyListener,GroupListener,LoginListener,MsgListener,ProfileListener,SessionListener}from'@/core/listeners';import{DependsAdapter,DispatcherAdapter,GlobalAdapter}from'@/core/adapters';import _0x396cbf from'node:path';import _0x686818 from'node:os';import _0xfc8fe7 from'node:fs';import{appid,qqVersionConfigInfo}from'@/common/utils/QQBasicInfo';import{hostname,systemVersion}from'@/common/utils/system';import{genSessionConfig}from'@/core/sessionConfig';import{dbUtil}from'@/common/utils/db';import{sleep}from'@/common/utils/helper';import _0x269bcf from'node:crypto';import{rawFriends,friends,groupMembers,groups,selfInfo,stat}from'@/core/data';function _0x3cec(){const _0x50ddb8=['find','IAVoI','loginListener','passwordLogin','isQuickLogin','FcuYV','7810IcenhJ','curVersion','NodeIGlobalAdapter','xryLV','initSession','19288teQZOc','hsSCS','loginService','LQUui','getNTUserDataInfoConfig','LCNKj','loginErrorInfo','session','15ybCxXf','NodeIKernelProfileListener','isDelete','result','tipsDesc','homedir','SvHmW','consoleLog','OKPVb','addKernelMsgListener','quickLogin','[KickedOffLine]\x20[','wUrlb','bpRmF','groupCode','NodeQQNTWrapperUtil','get','onAddSendMsg','resolve','NodeIKernelGroupListener','hlEgq','memberCount','push','onMemberInfoChange','buddyList','set','digest','pPLxa','630xKDHmW','./.config/QQ','read','EsFLs','addKernelBuddyListener','undefined','yASDR','from','tipsTitle','NodeIKernelLoginListener','onQRCodeGetPicture','./NapCat/data','initSession\x20failed','replace','KUbdB','addKernelGroupListener','zSnAb','getGroupService','BnUda','onRecvSysMsg','devUid','qrLogin','\x20has\x20no\x20method\x20','uin','dataPathGlobal','JBBQG','XzoJg','util','4612696ZXVxpM','qzWmg','uWmVf','onQRCodeSessionFailed','errMsg','53470FotHtN',')\x20在线状态变更','vgzYe','数据库初始化失败','createMemberListScene','onGroupListUpdate','3690006MozdkQ','addListener','base64','onLoginFailed','dataPath','mkdirSync','then','./nt_qq/global','quickLoginWithUin','onLineDev','euUXK','onBuddyListChange','LhoOD','catch','V1_WIN_NQ_','message_received','consoleLogLevel','stringify','ProfileListener','jwjLp','mslEg','infos','constructor','fcNKU','pGXEL','fileLog','本账号数据/缓存目录：','clientType','DNFEw','1859754YuwLpq','forEach','initWithDeskTopConfig','NodeIKernelBuddyListener','getBuddyService','init\x20failed\x20','split','sceneId','now','init','RMJSK','initDataListener','onMemberListChange','JCjSO','yeRbc','addKernelLoginListener','map','groupMemberList_MainWindow','hbtie','1257974oxRsoA','DSfnb','hBelH','startNT','JyeSQ','2MTVwkR','md5','BuddyListener','UCYlN','has','initConfig','uqChA','aGTEj','LocalLoginInfoList','hex','6093351EzpKQe','Sfqfq','trVxs','uid','qrcodeUrl','140022013','TjOjO','-v2.db','update','sJDbs','NodeIDispatcherAdapter','mJapT','proxyHandler','onSessionInitComplete','getLoginList','packet_sent','NodeIQQNTWrapperEngine','pngBase64QrcodeData','_GW_B','启动失败:\x20','GroupListener','addKernelProfileListener','message_sent','onLoginSuccessFuncList','packet_received','onProfileDetailInfoChanged','没有可快速登录的QQ号','aJXYh','engine','tqqGP','XEcTV','EiGul','name','last_message_time','assign','getQRCodePicture'];_0x3cec=function(){return _0x50ddb8;};return _0x3cec();}import{NTEventDispatch}from'@/common/utils/EventTask';import{enableConsoleLog,enableFileLog,log,logDebug,logError,setLogLevel,setLogSelfInfo}from'@/common/utils/log';function _0x2430(_0x558fbc,_0x15d386){const _0x3cec54=_0x3cec();return _0x2430=function(_0x24308e,_0x5bbfaf){_0x24308e=_0x24308e-0x73;let _0x28c21c=_0x3cec54[_0x24308e];return _0x28c21c;},_0x2430(_0x558fbc,_0x15d386);}import{napCatConfig}from'@/core/utils/config';export class NapCatCore{[_0x471e28(0xc1)];[_0x471e28(0xf9)];[_0x471e28(0xa7)];[_0x471e28(0xb1)];[_0x471e28(0xbc)];['onLoginSuccessFuncList']=[];['proxyHandler']={'get'(target,prop,receiver){const _0x4e0b6e=_0x471e28,GLHRNt={'aGTEj':function(callee,param1){return callee(param1);},'pPLxa':function(x,y){return x===y;}};if(GLHRNt[_0x4e0b6e(0xdd)](typeof target[prop],_0x4e0b6e(0xe3)))return(...args)=>{const _0x1748d5=_0x4e0b6e;GLHRNt[_0x1748d5(0x88)](logDebug,target[_0x1748d5(0x11b)][_0x1748d5(0xab)]+_0x1748d5(0xf4)+prop);};return Reflect[_0x4e0b6e(0xd2)](target,prop,receiver);}};constructor(){const _0x2e366c=_0x471e28,_0x462d58={'DSfnb':function(_0x4e22ed,_0x3d106e){return _0x4e22ed(_0x3d106e);},'KUbdB':function(_0x3ef272,_0x5c95a0){return _0x3ef272+_0x5c95a0;},'UCYlN':function(_0x526663,_0x50b69d){return _0x526663+_0x50b69d;},'EiGul':'当前账号(','Skupp':')已登录,无法重复登录','JCjSO':function(_0x59290a,_0x5282a0,_0x4a68b7){return _0x59290a(_0x5282a0,_0x4a68b7);},'mslEg':_0x2e366c(0x102),'BnUda':_0x2e366c(0xe9),'FcuYV':function(_0x3fd874,_0x2a0714,_0x26c559){return _0x3fd874(_0x2a0714,_0x26c559);},'DNFEw':'登录失败','jujxY':function(_0x44ff0d,_0x20de4c){return _0x44ff0d==_0x20de4c;}};this[_0x2e366c(0xa7)]=new _0x533866[(_0x2e366c(0x9b))](),this[_0x2e366c(0xf9)]=new _0x533866[(_0x2e366c(0xd1))](),this[_0x2e366c(0xbc)]=new _0x533866['NodeIKernelLoginService'](),this[_0x2e366c(0xc1)]=new _0x533866['NodeIQQNTWrapperSession'](),this[_0x2e366c(0xb1)]=new LoginListener(),this[_0x2e366c(0xb1)]['onUserLoggedIn']=_0x291793=>{const _0x35633a=_0x2e366c;_0x462d58['DSfnb'](logError,_0x462d58[_0x35633a(0xec)](_0x462d58[_0x35633a(0x84)](_0x462d58[_0x35633a(0xaa)],_0x291793),_0x462d58['Skupp']));},this[_0x2e366c(0xb1)]['onQRCodeLoginSucceed']=_0x39e886=>{const _0x203631=_0x2e366c,_0x5ef03b={'EsFLs':function(_0x37af99,_0x2a5658,_0x25a000){const _0x53dd76=_0x2430;return _0x462d58[_0x53dd76(0x76)](_0x37af99,_0x2a5658,_0x25a000);},'bpRmF':_0x462d58[_0x203631(0x119)],'xryLV':function(_0x4bb2c4,_0x3fb4a5,_0x3902bb){const _0x2515c5=_0x203631;return _0x462d58[_0x2515c5(0x76)](_0x4bb2c4,_0x3fb4a5,_0x3902bb);},'LhoOD':function(_0x233a52,_0x5e679f){const _0x5ac3e8=_0x203631;return _0x462d58[_0x5ac3e8(0x7d)](_0x233a52,_0x5e679f);},'hsSCS':_0x462d58[_0x203631(0xf0)]};this['initSession'](_0x39e886[_0x203631(0xf5)],_0x39e886[_0x203631(0x8e)])[_0x203631(0x10b)](_0x502dc0=>{const _0x518a13=_0x203631,_0x3d982e={'hbtie':_0x5ef03b[_0x518a13(0xcf)]};selfInfo['uin']=_0x39e886[_0x518a13(0xf5)],selfInfo[_0x518a13(0x8e)]=_0x39e886[_0x518a13(0x8e)],napCatConfig[_0x518a13(0xe0)](),_0x5ef03b[_0x518a13(0xb8)](setLogLevel,napCatConfig['fileLogLevel'],napCatConfig[_0x518a13(0x115)]),enableFileLog(napCatConfig[_0x518a13(0x11e)]),_0x5ef03b[_0x518a13(0x111)](enableConsoleLog,napCatConfig[_0x518a13(0xc9)]),_0x5ef03b[_0x518a13(0x111)](setLogSelfInfo,selfInfo);const _0x140a78=_0x396cbf[_0x518a13(0xd4)](this[_0x518a13(0x109)],_0x5ef03b[_0x518a13(0xbb)]);_0xfc8fe7['mkdirSync'](_0x140a78,{'recursive':!![]}),_0x5ef03b[_0x518a13(0xe1)](logDebug,_0x518a13(0x11f),_0x140a78),dbUtil[_0x518a13(0x12b)](_0x396cbf[_0x518a13(0xd4)](_0x140a78,'./'+_0x39e886[_0x518a13(0xf5)]+_0x518a13(0x92)))['then'](()=>{const _0x144b48=_0x518a13,_0x1042d3={'tqqGP':function(_0x360c83,_0x5999b6,_0x19e40b){const _0x4176c5=_0x2430;return _0x5ef03b[_0x4176c5(0xe1)](_0x360c83,_0x5999b6,_0x19e40b);},'sJDbs':function(_0x302839,_0x47f8a0){return _0x302839 instanceof _0x47f8a0;}};this[_0x144b48(0x74)](),this[_0x144b48(0xa2)][_0x144b48(0x79)](_0x8fde9f=>{const _0xffac48=_0x144b48;new Promise((_0x3d15ab,_0x47b257)=>{const _0x40ab30=_0x2430,_0x9105ef=_0x1042d3[_0x40ab30(0xa8)](_0x8fde9f,_0x39e886[_0x40ab30(0xf5)],_0x39e886[_0x40ab30(0x8e)]);_0x1042d3[_0x40ab30(0x94)](_0x9105ef,Promise)&&_0x9105ef[_0x40ab30(0x10b)](_0x3d15ab)[_0x40ab30(0x112)](_0x47b257);})[_0xffac48(0x10b)]();});})[_0x518a13(0x112)](_0x59aec5=>{const _0x495845=_0x518a13;logError(_0x3d982e[_0x495845(0x7b)],_0x59aec5);});})[_0x203631(0x112)](_0xf1bb16=>{const _0x349ac8=_0x203631;logError(_0x349ac8(0xea),_0xf1bb16);throw new Error(_0x349ac8(0x9e)+JSON[_0x349ac8(0x116)](_0xf1bb16));});},this[_0x2e366c(0xb1)][_0x2e366c(0xfd)]=(_0x265d02,_0x3380fc,_0x1545c5)=>{const _0x28c948=_0x2e366c;_0x462d58[_0x28c948(0xb4)](logError,_0x462d58[_0x28c948(0x121)],_0x1545c5),_0x462d58['jujxY'](_0x265d02,0x1)&&_0x3380fc==0x3&&this[_0x28c948(0xbc)]['getQRCodePicture']();},this[_0x2e366c(0xb1)][_0x2e366c(0x108)]=_0x51f202=>{const _0xc4ef03=_0x2e366c;_0x462d58['FcuYV'](logError,_0x462d58[_0xc4ef03(0x121)],_0x51f202);},this[_0x2e366c(0xb1)]=new Proxy(this['loginListener'],this['proxyHandler']),this[_0x2e366c(0xbc)][_0x2e366c(0x78)](new _0x533866[(_0x2e366c(0xe7))](this[_0x2e366c(0xb1)])),this[_0x2e366c(0x86)]();}get[_0x471e28(0x109)](){const _0x275ec6=_0x471e28,_0x9bc302={'GByvt':_0x275ec6(0xdf)};let _0x579aa1=this['util'][_0x275ec6(0xbe)]();return!_0x579aa1&&(_0x579aa1=_0x396cbf[_0x275ec6(0xd4)](_0x686818[_0x275ec6(0xc7)](),_0x9bc302['GByvt']),_0xfc8fe7[_0x275ec6(0x10a)](_0x579aa1,{'recursive':!![]})),_0x579aa1;}get['dataPathGlobal'](){const _0x23c9d7=_0x471e28,_0x4d2637={'JBBQG':_0x23c9d7(0x10c)};return _0x396cbf['resolve'](this[_0x23c9d7(0x109)],_0x4d2637[_0x23c9d7(0xf7)]);}[_0x471e28(0x86)](){const _0x3633d3=_0x471e28,_0xa720dc={'aJXYh':'Windows\x2010\x20Pro'};this[_0x3633d3(0xa7)][_0x3633d3(0x124)]({'base_path_prefix':'','platform_type':0x3,'app_type':0x4,'app_version':qqVersionConfigInfo['curVersion'],'os_version':_0xa720dc[_0x3633d3(0xa6)],'use_xlog':!![],'qua':_0x3633d3(0x113)+qqVersionConfigInfo[_0x3633d3(0xb6)][_0x3633d3(0xeb)]('-','_')+_0x3633d3(0x9d),'global_path_config':{'desktopGlobalPath':this[_0x3633d3(0xf6)]},'thumb_config':{'maxSide':0x144,'minSide':0x30,'longLimit':0x6,'density':0x2}},new _0x533866[(_0x3633d3(0xb7))](new GlobalAdapter())),this[_0x3633d3(0xbc)][_0x3633d3(0x86)]({'machineId':'','appid':appid,'platVer':systemVersion,'commonPath':this[_0x3633d3(0xf6)],'clientVer':qqVersionConfigInfo[_0x3633d3(0xb6)],'hostName':hostname});}[_0x471e28(0xb9)](_0x24f796,_0x20cee7){const _0x247138=_0x471e28,_0x5ba8c4={'zSnAb':function(_0xfddb13,_0x452ccb){return _0xfddb13===_0x452ccb;},'vMqLS':function(_0x3f6517,_0x11759e){return _0x3f6517(_0x11759e);},'TjOjO':function(_0xaed9c4,_0x182732,_0x529d81,_0x59a047){return _0xaed9c4(_0x182732,_0x529d81,_0x59a047);},'jwjLp':function(_0x56bb36,_0x2154b7){return _0x56bb36(_0x2154b7);},'jRxUD':_0x247138(0x127)};return new Promise(async(_0x33fc89,_0x5d7f45)=>{const _0x1090be=_0x247138,_0x3964ea=await _0x5ba8c4[_0x1090be(0x91)](genSessionConfig,_0x24f796,_0x20cee7,this[_0x1090be(0x109)]),_0xa38a71=new SessionListener();_0xa38a71[_0x1090be(0x98)]=_0x98b33f=>{const _0x45566b=_0x1090be;if(_0x5ba8c4[_0x45566b(0xee)](_0x98b33f,0x0))return _0x33fc89(0x0);_0x5ba8c4['vMqLS'](_0x5d7f45,_0x98b33f);},this['session']['init'](_0x3964ea,new _0x533866['NodeIDependsAdapter'](new DependsAdapter()),new _0x533866[(_0x1090be(0x95))](new DispatcherAdapter()),new _0x533866['NodeIKernelSessionListener'](_0xa38a71));try{this[_0x1090be(0xc1)][_0x1090be(0x7f)](0x0);}catch(_0x9a95e5){try{this[_0x1090be(0xc1)][_0x1090be(0x7f)]();}catch(_0x462c1f){_0x5ba8c4[_0x1090be(0x118)](_0x5d7f45,_0x5ba8c4['jRxUD']+_0x462c1f);}}});}['initDataListener'](){const _0x50e5bb=_0x471e28,_0x12314={'XEcTV':function(_0x17348b,_0x39c0c2){return _0x17348b===_0x39c0c2;},'RMJSK':function(_0x12861f,_0x3b976d){return _0x12861f(_0x3b976d);},'hlEgq':function(_0x2c3c88,_0x23d2d5){return _0x2c3c88+_0x23d2d5;},'IAVoI':_0x50e5bb(0x100),'wUrlb':function(_0x550fa5,_0x4838b7){return _0x550fa5(_0x4838b7);},'LQUui':function(_0x182a7f,_0xee9592){return _0x182a7f+_0xee9592;},'QfENd':_0x50e5bb(0xcd),'hKJbB':function(_0x466fdf,_0xd7689){return _0x466fdf/_0xd7689;},'uWmVf':function(_0x34960d,_0x58d190){return _0x34960d===_0x58d190;},'hBelH':function(_0x182d39,_0x21eebf){return _0x182d39===_0x21eebf;},'OKPVb':_0x50e5bb(0x7a),'JmImQ':function(_0x3d21ef,_0x2b155d,_0x8e10e6){return _0x3d21ef(_0x2b155d,_0x8e10e6);}},_0x3f1f13=new MsgListener();_0x3f1f13[_0x50e5bb(0x10e)]=_0x33c676=>{const _0x8a9c0d=_0x50e5bb,_0x82237f={'JyeSQ':function(_0x4a2b2c,_0x10e455){const _0x440925=_0x2430;return _0x12314[_0x440925(0xa9)](_0x4a2b2c,_0x10e455);},'BKmSd':function(_0x4a543a,_0x518d2f){const _0x3177d1=_0x2430;return _0x12314[_0x3177d1(0x73)](_0x4a543a,_0x518d2f);},'Sfqfq':function(_0x282ebc,_0x96fbf7){return _0x12314['hlEgq'](_0x282ebc,_0x96fbf7);},'gCmwj':'账号设备(','fcNKU':_0x12314[_0x8a9c0d(0xb0)]};_0x33c676[_0x8a9c0d(0x79)](_0x147ceb=>{const _0x47395b=_0x8a9c0d;_0x82237f[_0x47395b(0x80)](_0x147ceb[_0x47395b(0x120)],0x2)&&_0x82237f['BKmSd'](log,_0x82237f[_0x47395b(0x8c)](_0x82237f[_0x47395b(0x8c)](_0x82237f['gCmwj'],_0x147ceb[_0x47395b(0xf2)]),_0x82237f[_0x47395b(0x11c)]));});},_0x3f1f13['onKickedOffLine']=_0x55e50a=>{const _0x1873a8=_0x50e5bb;_0x12314[_0x1873a8(0xce)](log,_0x12314[_0x1873a8(0xd6)](_0x12314[_0x1873a8(0xbd)](_0x12314[_0x1873a8(0xd6)](_0x12314['QfENd'],_0x55e50a[_0x1873a8(0xe6)]),']\x20'),_0x55e50a[_0x1873a8(0xc6)]));},_0x3f1f13[_0x50e5bb(0xd3)]=_0x1511a=>{const _0x329799=_0x50e5bb;stat[_0x329799(0x9a)]+=0x1,stat[_0x329799(0xa1)]+=0x1,stat[_0x329799(0xac)]=Math['floor'](_0x12314['hKJbB'](Date[_0x329799(0x12a)](),0x3e8));},_0x3f1f13['onRecvMsg']=_0x3d3aa9=>{const _0x2b8d30=_0x50e5bb;stat[_0x2b8d30(0xa3)]+=0x1,stat[_0x2b8d30(0x114)]+=_0x3d3aa9['length'],stat['last_message_time']=Math['floor'](Date[_0x2b8d30(0x12a)]()/0x3e8);},_0x3f1f13[_0x50e5bb(0xf1)]=(..._0x51f56a)=>{const _0x8c62f0=_0x50e5bb;stat[_0x8c62f0(0xa3)]+=0x1;},this[_0x50e5bb(0x106)](_0x3f1f13);const _0x4acf4f=new BuddyListener();_0x4acf4f[_0x50e5bb(0x110)]=_0x4269da=>{const _0x2d9964=_0x50e5bb;rawFriends['length']=0x0,rawFriends[_0x2d9964(0xd8)](..._0x4269da);for(const _0x35e6b5 of _0x4269da){for(const _0x4fc6f1 of _0x35e6b5[_0x2d9964(0xda)]){const _0x42eb31=friends[_0x2d9964(0xd2)](_0x4fc6f1[_0x2d9964(0x8e)]);_0x42eb31?Object['assign'](_0x42eb31,_0x4fc6f1):friends[_0x2d9964(0xdb)](_0x4fc6f1[_0x2d9964(0x8e)],_0x4fc6f1);}}},this[_0x50e5bb(0x106)](_0x4acf4f),this[_0x50e5bb(0xc1)][_0x50e5bb(0x126)]()['getBuddyList'](!![])[_0x50e5bb(0x10b)](_0x8b22ac=>{});const _0x2614fb=new ProfileListener();_0x2614fb[_0x50e5bb(0xa4)]=_0x3c3da9=>{const _0x526a08=_0x50e5bb;_0x12314[_0x526a08(0xfc)](_0x3c3da9[_0x526a08(0x8e)],selfInfo[_0x526a08(0x8e)])&&Object['assign'](selfInfo,_0x3c3da9);},_0x2614fb['onSelfStatusChanged']=_0x4195b7=>{},this[_0x50e5bb(0x106)](_0x2614fb);const _0x46d09f=new GroupListener();_0x46d09f[_0x50e5bb(0x104)]=(_0x505421,_0x138cfd)=>{_0x138cfd['map'](_0x21b102=>{const _0x10e9af=_0x2430,_0x23028b=groups[_0x10e9af(0xd2)](_0x21b102['groupCode']);_0x23028b&&_0x12314[_0x10e9af(0x7e)](_0x21b102[_0x10e9af(0xd7)],_0x23028b[_0x10e9af(0xd7)])?Object[_0x10e9af(0xad)](_0x23028b,_0x21b102):groups[_0x10e9af(0xdb)](_0x21b102[_0x10e9af(0xd0)],_0x21b102);const _0x4e3ba9=this[_0x10e9af(0xc1)][_0x10e9af(0xef)]()[_0x10e9af(0x103)](_0x21b102['groupCode'],_0x12314[_0x10e9af(0xca)]);this[_0x10e9af(0xc1)][_0x10e9af(0xef)]()['getNextMemberList'](_0x4e3ba9,undefined,0xbb8)[_0x10e9af(0x10b)](_0x2f4941=>{});});},_0x46d09f[_0x50e5bb(0x75)]=_0x4fa70b=>{const _0x54bb49=_0x50e5bb,_0x1639da=_0x4fa70b[_0x54bb49(0x129)]['split']('_')[0x0];if(groupMembers[_0x54bb49(0x85)](_0x1639da)){const _0x27bbaf=groupMembers[_0x54bb49(0xd2)](_0x1639da);_0x4fa70b[_0x54bb49(0x11a)][_0x54bb49(0x123)]((_0x47f080,_0x35f14e)=>{const _0x5cb588=_0x54bb49,_0x480405=_0x27bbaf[_0x5cb588(0xd2)](_0x35f14e);_0x480405?Object[_0x5cb588(0xad)](_0x480405,_0x47f080):_0x27bbaf[_0x5cb588(0xdb)](_0x35f14e,_0x47f080);});}else groupMembers['set'](_0x1639da,_0x4fa70b['infos']);},_0x46d09f[_0x50e5bb(0xd9)]=(_0x2cb44d,_0x103287,_0x553a19)=>{const _0x49a9b2=_0x50e5bb;_0x12314[_0x49a9b2(0x7e)](_0x103287,0x0)&&_0x553a19['get'](selfInfo['uid'])&&_0x553a19[_0x49a9b2(0xd2)](selfInfo[_0x49a9b2(0x8e)])?.[_0x49a9b2(0xc4)]&&_0x12314['JmImQ'](setTimeout,()=>{groups['delete'](_0x2cb44d);},0x1388);const _0x35538e=groupMembers[_0x49a9b2(0xd2)](_0x2cb44d);_0x35538e?_0x553a19['forEach']((_0x5ce629,_0x3020e9)=>{const _0x292bdf=_0x49a9b2,_0x164bdf=_0x35538e[_0x292bdf(0xd2)](_0x3020e9);_0x164bdf?Object[_0x292bdf(0xad)](_0x164bdf,_0x5ce629):_0x35538e[_0x292bdf(0xdb)](_0x3020e9,_0x5ce629);}):groupMembers['set'](_0x2cb44d,_0x553a19);},this[_0x50e5bb(0x106)](_0x46d09f);}[_0x471e28(0x106)](_0x269a8c){const _0x3c94af=_0x471e28,_0x38d0c5={'mJapT':_0x3c94af(0x83),'trVxs':_0x3c94af(0x9f),'yeRbc':'MsgListener','bhRAI':_0x3c94af(0x117)};_0x269a8c=new Proxy(_0x269a8c,this[_0x3c94af(0x97)]);switch(_0x269a8c['constructor']['name']){case _0x38d0c5[_0x3c94af(0x96)]:{return this[_0x3c94af(0xc1)][_0x3c94af(0x126)]()[_0x3c94af(0xe2)](new _0x533866[(_0x3c94af(0x125))](_0x269a8c));}case _0x38d0c5[_0x3c94af(0x8d)]:{return this['session'][_0x3c94af(0xef)]()[_0x3c94af(0xed)](new _0x533866[(_0x3c94af(0xd5))](_0x269a8c));}case _0x38d0c5[_0x3c94af(0x77)]:{return this[_0x3c94af(0xc1)]['getMsgService']()[_0x3c94af(0xcb)](new _0x533866['NodeIKernelMsgListener'](_0x269a8c));}case _0x38d0c5['bhRAI']:{return this[_0x3c94af(0xc1)]['getProfileService']()[_0x3c94af(0xa0)](new _0x533866[(_0x3c94af(0xc3))](_0x269a8c));}default:return-0x1;}}['onLoginSuccess'](_0x2303f0){const _0x1cb2e6=_0x471e28;NTEventDispatch['init']({'ListenerMap':_0x533866,'WrapperSession':this[_0x1cb2e6(0xc1)]}),this[_0x1cb2e6(0xa2)][_0x1cb2e6(0xd8)](_0x2303f0);}async[_0x471e28(0xcc)](_0x3f2a0b){const _0x4954cc=_0x471e28,_0x2b9ed6={'yiiRO':_0x4954cc(0xa5),'yASDR':function(_0x39b059,_0x4b73ac){return _0x39b059+_0x4b73ac;}},_0x2866f9=await this[_0x4954cc(0xbc)]['getLoginList']();if(_0x2866f9[_0x4954cc(0xc5)]!==0x0)throw new Error(_0x2b9ed6['yiiRO']);const _0x45d758=_0x2866f9[_0x4954cc(0x89)][_0x4954cc(0xaf)](_0x21fa42=>_0x21fa42['uin']===_0x3f2a0b);if(!_0x45d758||!_0x45d758?.[_0x4954cc(0xb3)])throw new Error(_0x3f2a0b+'快速登录不可用');await sleep(0x3e8);const _0x59bb28=await this['loginService'][_0x4954cc(0x10d)](_0x3f2a0b);if(!_0x59bb28[_0x4954cc(0xc5)])throw new Error(_0x2b9ed6[_0x4954cc(0xe4)]('快速登录失败\x20',_0x59bb28[_0x4954cc(0xc0)][_0x4954cc(0xfe)]));return _0x59bb28;}async[_0x471e28(0xf3)](_0x2365ad){const _0x2c2fe2={'pGXEL':'data:image/png;base64,','euUXK':function(_0x190c27,_0x1b8048,_0x3b454f,_0xde7bbb){return _0x190c27(_0x1b8048,_0x3b454f,_0xde7bbb);}};return new Promise((_0x335d5d,_0x4e688d)=>{const _0x45071f=_0x2430,_0x1d7370={'vgzYe':_0x2c2fe2[_0x45071f(0x11d)],'uqChA':_0x45071f(0x107),'Emggp':function(_0x2e743c,_0x50d2fc,_0x2857ec,_0x23b36c){const _0x5ae81b=_0x45071f;return _0x2c2fe2[_0x5ae81b(0x10f)](_0x2e743c,_0x50d2fc,_0x2857ec,_0x23b36c);}};this[_0x45071f(0xb1)][_0x45071f(0xe8)]=_0xe2e048=>{const _0x3806e7=_0x45071f,_0xdb24fb=_0xe2e048[_0x3806e7(0x9c)][_0x3806e7(0x128)](_0x1d7370[_0x3806e7(0x101)])[0x1],_0x530031=Buffer[_0x3806e7(0xe5)](_0xdb24fb,_0x1d7370[_0x3806e7(0x87)]);_0x1d7370['Emggp'](_0x2365ad,_0xe2e048[_0x3806e7(0x8f)],_0xe2e048[_0x3806e7(0x9c)],_0x530031);},this[_0x45071f(0xbc)][_0x45071f(0xae)]();});}async[_0x471e28(0xb2)](_0x4bdb93,_0x23a731,_0x353522,_0x3bb14e,_0x392e5e){const _0x312ec7=_0x471e28,_0x5c88ef={'SyQbm':_0x312ec7(0x82),'XzoJg':_0x312ec7(0x8a),'govzY':function(_0x57dc6e,_0x2082fa){return _0x57dc6e&&_0x2082fa;},'qzWmg':function(_0x9ff8b6,_0x353b2b){return _0x9ff8b6||_0x353b2b;},'SvHmW':function(_0x1506aa,_0x3f2f93){return _0x1506aa(_0x3f2f93);},'ugcSj':'140022008','LCNKj':_0x312ec7(0x90)},_0x29efd2=_0x269bcf['createHash'](_0x5c88ef['SyQbm'])[_0x312ec7(0x93)](_0x23a731)[_0x312ec7(0xdc)](_0x5c88ef[_0x312ec7(0xf8)]),_0x15b290={'uin':_0x4bdb93,'passwordMd5':_0x29efd2,'step':_0x5c88ef['govzY'](_0x353522,_0x3bb14e)&&_0x392e5e?0x1:0x0,'newDeviceLoginSig':'','proofWaterSig':_0x5c88ef[_0x312ec7(0xfb)](_0x353522,''),'proofWaterRand':_0x3bb14e||'','proofWaterSid':_0x5c88ef['qzWmg'](_0x392e5e,'')};await this['loginService']['getLoginList'](),await _0x5c88ef[_0x312ec7(0xc8)](sleep,0x3e8);const _0x48adee=await this['loginService'][_0x312ec7(0xb2)](_0x15b290);switch(_0x48adee[_0x312ec7(0xc5)]){case'0':{break;}case _0x5c88ef['ugcSj']:{break;}case'4':case _0x5c88ef[_0x312ec7(0xbf)]:default:}}async['getQuickLoginList'](){const _0x26528a=_0x471e28,_0x3c7ddb=await this[_0x26528a(0xbc)][_0x26528a(0x99)]();return _0x3c7ddb;}}export const napCatCore=new NapCatCore();
const _0x1bc2d2=_0x8525;(function(_0x1f1e13,_0x1cfdb0){const _0x2c58be=_0x8525,_0x45b406=_0x1f1e13();while(!![]){try{const _0x2f2a36=-parseInt(_0x2c58be(0x13f))/0x1+parseInt(_0x2c58be(0x139))/0x2+parseInt(_0x2c58be(0x13d))/0x3*(parseInt(_0x2c58be(0x145))/0x4)+parseInt(_0x2c58be(0x136))/0x5+-parseInt(_0x2c58be(0x137))/0x6*(parseInt(_0x2c58be(0x141))/0x7)+parseInt(_0x2c58be(0x149))/0x8*(parseInt(_0x2c58be(0x14b))/0x9)+parseInt(_0x2c58be(0x146))/0xa*(-parseInt(_0x2c58be(0x13b))/0xb);if(_0x2f2a36===_0x1cfdb0)break;else _0x45b406['push'](_0x45b406['shift']());}catch(_0x3d2ff3){_0x45b406['push'](_0x45b406['shift']());}}}(_0x1a5a,0x4ba03));import{logError}from'@/common/utils/log';import{RequestUtil}from'@/common/utils/request';function _0x1a5a(){const _0x15cec6=['12017951TLwssq','isExpired','3Srmrvz','获取rkey失败','9812fZWqeJ','getTime','14ckxdgs','http://napcat-sign.wumiao.wang:2082/rkey','XiSKT','bVoub','1119516KKQbwo','10zLhmQS','QgLjd','refreshRkey','919216kHmNET','cjxqU','27UdYnqg','serverUrl','expired_time','1882180UaLmBH','80892jmiRhe','rkeyData','876118vathcq','HttpGetJson'];_0x1a5a=function(){return _0x15cec6;};return _0x1a5a();}class RkeyManager{['serverUrl']='';[_0x1bc2d2(0x138)]={'group_rkey':'','private_rkey':'','expired_time':0x0};constructor(_0x164552){const _0x431b66=_0x1bc2d2;this[_0x431b66(0x14c)]=_0x164552;}async['getRkey'](){const _0x38b4c1=_0x1bc2d2,_0x3a485d={'bVoub':function(_0x426bdc,_0x43622f,_0xa7193b){return _0x426bdc(_0x43622f,_0xa7193b);}};if(this[_0x38b4c1(0x13c)]())try{await this[_0x38b4c1(0x148)]();}catch(_0x3ce3e9){_0x3a485d[_0x38b4c1(0x144)](logError,_0x38b4c1(0x13e),_0x3ce3e9);}return this[_0x38b4c1(0x138)];}[_0x1bc2d2(0x13c)](){const _0x27f569=_0x1bc2d2,_0x2e38dd={'cjxqU':function(_0x1308e2,_0x2c0a1e){return _0x1308e2/_0x2c0a1e;},'QgLjd':function(_0x2f354c,_0x20d697){return _0x2f354c>_0x20d697;}},_0x1e1dfd=_0x2e38dd[_0x27f569(0x14a)](new Date()[_0x27f569(0x140)](),0x3e8);return _0x2e38dd[_0x27f569(0x147)](_0x1e1dfd,this[_0x27f569(0x138)][_0x27f569(0x135)]);}async[_0x1bc2d2(0x148)](){const _0x3a1ed2=_0x1bc2d2,_0x3fb6ba={'XiSKT':'GET'};this[_0x3a1ed2(0x138)]=await RequestUtil[_0x3a1ed2(0x13a)](this[_0x3a1ed2(0x14c)],_0x3fb6ba[_0x3a1ed2(0x143)]);}}function _0x8525(_0x34c923,_0x3fcb1c){const _0x1a5a2d=_0x1a5a();return _0x8525=function(_0x852527,_0xe8d257){_0x852527=_0x852527-0x135;let _0x4dbc99=_0x1a5a2d[_0x852527];return _0x4dbc99;},_0x8525(_0x34c923,_0x3fcb1c);}export const rkeyManager=new RkeyManager(_0x1bc2d2(0x142));
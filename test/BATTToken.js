var tokenOutput={"contracts":{"BATTToken.sol:BATTToken":{"abi":"[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"tokenAddress\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferAnyERC20Token\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]","bin":"6060604052341561000f57600080fd5b5b5b60018054600160a060020a03191633600160a060020a03161790555b600154600160a060020a031660009081526003602052604090206a084595161401484a00000090555b5b610b48806100666000396000f300606060405236156100b45763ffffffff60e060020a60003504166306fdde0381146100c3578063095ea7b31461014e57806318160ddd1461018457806323b872dd146101a9578063313ce567146101e557806370a082311461020e57806379ba50971461023f5780638da5cb5b1461025457806395d89b4114610283578063a9059cbb1461030e578063d4ee1d9014610344578063dc39d06d14610373578063dd62ed3e146103a9578063f2fde38b146103e0575b34156100bf57600080fd5b5b5b005b34156100ce57600080fd5b6100d6610401565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156101135780820151818401525b6020016100fa565b50505050905090810190601f1680156101405780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561015957600080fd5b610170600160a060020a0360043516602435610461565b604051901515815260200160405180910390f35b341561018f57600080fd5b610197610508565b60405190815260200160405180910390f35b34156101b457600080fd5b610170600160a060020a0360043581169060243516604435610517565b604051901515815260200160405180910390f35b34156101f057600080fd5b6101f8610768565b60405160ff909116815260200160405180910390f35b341561021957600080fd5b610197600160a060020a036004351661076d565b60405190815260200160405180910390f35b341561024a57600080fd5b6100bf61078c565b005b341561025f57600080fd5b61026761081b565b604051600160a060020a03909116815260200160405180910390f35b341561028e57600080fd5b6100d661082a565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156101135780820151818401525b6020016100fa565b50505050905090810190601f1680156101405780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561031957600080fd5b610170600160a060020a0360043516602435610861565b604051901515815260200160405180910390f35b341561034f57600080fd5b6102676109f3565b604051600160a060020a03909116815260200160405180910390f35b341561037e57600080fd5b610170600160a060020a0360043516602435610a02565b604051901515815260200160405180910390f35b34156103b457600080fd5b610197600160a060020a0360043581169060243516610aa7565b60405190815260200160405180910390f35b34156103eb57600080fd5b6100bf600160a060020a0360043516610ad4565b005b606060405190810160405280602b81526020017f426f6b6b79506f6f426168277320417373697374656420546f6b656e2054726181526020017f6e7366657220546f6b656e00000000000000000000000000000000000000000081525081565b60008115806104935750600160a060020a03338116600090815260046020908152604080832093871683529290522054155b151561049e57600080fd5b600160a060020a03338116600081815260046020908152604080832094881680845294909152908190208590557f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a35060015b92915050565b6a084595161401484a00000081565b600160a060020a0383166000908152600360205260408082205473__BATTToken.sol:SafeMath________________9163b67d77c5919085908590516020015260405160e060020a63ffffffff85160281526004810192909252602482015260440160206040518083038186803b151561059057600080fd5b6102c65a03f415156105a157600080fd5b5050506040518051600160a060020a0380871660009081526003602090815260408083209490945560048152838220339093168252919091528181205473__BATTToken.sol:SafeMath________________935063b67d77c59290918691516020015260405160e060020a63ffffffff85160281526004810192909252602482015260440160206040518083038186803b151561063d57600080fd5b6102c65a03f4151561064e57600080fd5b5050506040518051600160a060020a0380871660009081526004602090815260408083203385168452825280832094909455918716815260039091528181205473__BATTToken.sol:SafeMath________________935063771602f79290918691516020015260405160e060020a63ffffffff85160281526004810192909252602482015260440160206040518083038186803b15156106ed57600080fd5b6102c65a03f415156106fe57600080fd5b5050506040518051600160a060020a03808616600081815260036020526040908190209390935592508616907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060015b9392505050565b601281565b600160a060020a0381166000908152600360205260409020545b919050565b60025433600160a060020a039081169116146107a757600080fd5b600254600154600160a060020a0391821691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3600280546001805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a038416179091551690555b565b600154600160a060020a031681565b60408051908101604052600581527f4241545454000000000000000000000000000000000000000000000000000000602082015281565b600160a060020a0333166000908152600360205260408082205473__BATTToken.sol:SafeMath________________9163b67d77c5919085908590516020015260405160e060020a63ffffffff85160281526004810192909252602482015260440160206040518083038186803b15156108da57600080fd5b6102c65a03f415156108eb57600080fd5b5050506040518051600160a060020a033381166000908152600360205260408082209390935590861681528181205473__BATTToken.sol:SafeMath________________935063771602f79290918691516020015260405160e060020a63ffffffff85160281526004810192909252602482015260440160206040518083038186803b151561097957600080fd5b6102c65a03f4151561098a57600080fd5b5050506040518051600160a060020a03808616600081815260036020526040908190209390935592503316907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060015b92915050565b600254600160a060020a031681565b60015460009033600160a060020a03908116911614610a2057600080fd5b600154600160a060020a038085169163a9059cbb91168460006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b1515610a8357600080fd5b6102c65a03f11515610a9457600080fd5b50505060405180519150505b5b92915050565b600160a060020a038083166000908152600460209081526040808320938516835292905220545b92915050565b60015433600160a060020a03908116911614610aef57600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b505600a165627a7a72305820a52515680d689139e5af0fcb0504fe18691e8d8922945d57f685a449193934cd0029"},"BATTToken.sol:ERC20Interface":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]","bin":""},"BATTToken.sol:Owned":{"abi":"[{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]","bin":"6060604052341561000f57600080fd5b5b60008054600160a060020a03191633600160a060020a03161790555b5b6102138061003c6000396000f300606060405263ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166379ba5097811461005e5780638da5cb5b14610073578063d4ee1d90146100a2578063f2fde38b146100d1575b600080fd5b341561006957600080fd5b6100716100f2565b005b341561007e57600080fd5b610086610181565b604051600160a060020a03909116815260200160405180910390f35b34156100ad57600080fd5b610086610190565b604051600160a060020a03909116815260200160405180910390f35b34156100dc57600080fd5b610071600160a060020a036004351661019f565b005b60015433600160a060020a0390811691161461010d57600080fd5b600154600054600160a060020a0391821691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a038416179091551690555b565b600054600160a060020a031681565b600154600160a060020a031681565b60005433600160a060020a039081169116146101ba57600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b505600a165627a7a7230582062081a7e8306cf204ee60e6b9d52e5f8b6bf1d42c180829f1768534758858a0f0029"},"BATTToken.sol:SafeMath":{"abi":"[{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"add\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"sub\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]","bin":"6060604052341561000f57600080fd5b5b60ea8061001e6000396000f300606060405263ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663771602f781146046578063b67d77c5146064575b600080fd5b60526004356024356082565b60405190815260200160405180910390f35b605260043560243560a8565b60405190815260200160405180910390f35b600082820183811080159060965750828110155b1515609d57fe5b8091505b5092915050565b60008282111560b357fe5b508082035b929150505600a165627a7a7230582040d8de92b50419fe6361539b01374570759aba1a6ff514112a4d341e664f73640029"}},"version":"0.4.16+commit.d7661dd9.Darwin.appleclang"};

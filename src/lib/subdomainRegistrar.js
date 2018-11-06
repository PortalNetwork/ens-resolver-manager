const Promise = require('bluebird');
const subdomainInterface = [
    {
        "anonymous": false,
        "inputs": [],
        "name": "DomainTransfersLocked",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "lockDomainOwnershipTransfers",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_subdomain",
                "type": "string"
            },
            {
                "name": "_domain",
                "type": "string"
            },
            {
                "name": "_topdomain",
                "type": "string"
            },
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_target",
                "type": "address"
            }
        ],
        "name": "newSubdomain",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousRegistry",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newRegistry",
                "type": "address"
            }
        ],
        "name": "RegistryUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "creator",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "subdomain",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "domain",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "topdomain",
                "type": "string"
            }
        ],
        "name": "SubdomainCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousResolver",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newResolver",
                "type": "address"
            }
        ],
        "name": "ResolverUpdated",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "transferContractOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_node",
                "type": "bytes32"
            },
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "transferDomainOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_registry",
                "type": "address"
            },
            {
                "name": "_resolver",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_registry",
                "type": "address"
            }
        ],
        "name": "updateRegistry",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_resolver",
                "type": "address"
            }
        ],
        "name": "updateResolver",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_domain",
                "type": "string"
            },
            {
                "name": "_topdomain",
                "type": "string"
            }
        ],
        "name": "domainOwner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "locked",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "registry",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "resolver",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_subdomain",
                "type": "string"
            },
            {
                "name": "_domain",
                "type": "string"
            },
            {
                "name": "_topdomain",
                "type": "string"
            }
        ],
        "name": "subdomainOwner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_subdomain",
                "type": "string"
            },
            {
                "name": "_domain",
                "type": "string"
            },
            {
                "name": "_topdomain",
                "type": "string"
            }
        ],
        "name": "subdomainTarget",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

/**
 * @class
 */
function SubdomainRegistrar(web3, address){
    this.web3 = web3;
    const subdomainRegistrarContract = web3.eth.contract(subdomainInterface);
    this.subdomainRegistrarPromise = Promise.resolve(Promise.promisifyAll(subdomainRegistrarContract.at(address)));
}

module.exports = SubdomainRegistrar;

// function SubdomainRegistrar(web3, address) {
//     this.web3 = web3;
//     const subdomainContract = web3.eth.contract(subdomainInterface);
//     this.registrarPromise = Promise.resolve(Promise.promisifyAll(subdomainContract.at(address)));
// }
  
// SubdomainRegistrar.prototype.newSubdomain = (name) => {
//     return this.registrarPromise.then(registrar=> {
//         return registrar.entriesAsync(name);
//     });
// }
  
// module.exports = Registrar;
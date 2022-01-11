/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MunicoinExchange,
  MunicoinExchangeInterface,
} from "../MunicoinExchange";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Municoin",
        name: "_municoin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Buy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "Close",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
    ],
    name: "PriceChange",
    type: "event",
  },
  {
    inputs: [],
    name: "available",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "buyTransactions",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "closedTransactions",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountSold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "municoin",
    outputs: [
      {
        internalType: "contract Municoin",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "openTransactions",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountSold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "transactionCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "openTransactionsLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "closedTransactionsLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "buyTransactionsLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "sell",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "closeSellTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "closeExchange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620021843803806200218483398181016040528101906200003791906200014d565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006002819055506000600381905550506200017f565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200010182620000d4565b9050919050565b60006200011582620000f4565b9050919050565b620001278162000108565b81146200013357600080fd5b50565b60008151905062000147816200011c565b92915050565b600060208284031215620001665762000165620000cf565b5b6000620001768482850162000136565b91505092915050565b611ff5806200018f6000396000f3fe6080604052600436106100dd5760003560e01c8063981cbbfc1161007f578063b77bf60011610059578063b77bf600146102be578063d79875eb146102e9578063d96a094a14610312578063e0fbebbb1461032e576100dd565b8063981cbbfc14610226578063a035b1fe14610268578063b744476414610293576100dd565b80632bfe2a92116100bb5780632bfe2a92146101645780633d158a7a1461018f578063441c03e4146101d057806348a0d754146101fb576100dd565b80630494963d146100e257806306c003d8146100f957806329d1810914610122575b600080fd5b3480156100ee57600080fd5b506100f7610359565b005b34801561010557600080fd5b50610120600480360381019061011b9190611827565b61054e565b005b34801561012e57600080fd5b5061014960048036038101906101449190611827565b610665565b60405161015b969594939291906118a4565b60405180910390f35b34801561017057600080fd5b506101796106d1565b6040516101869190611905565b60405180910390f35b34801561019b57600080fd5b506101b660048036038101906101b19190611827565b6106de565b6040516101c7959493929190611920565b60405180910390f35b3480156101dc57600080fd5b506101e5610744565b6040516101f29190611905565b60405180910390f35b34801561020757600080fd5b50610210610751565b60405161021d9190611905565b60405180910390f35b34801561023257600080fd5b5061024d60048036038101906102489190611827565b610757565b60405161025f969594939291906118a4565b60405180910390f35b34801561027457600080fd5b5061027d6107c3565b60405161028a9190611905565b60405180910390f35b34801561029f57600080fd5b506102a86107c9565b6040516102b59190611905565b60405180910390f35b3480156102ca57600080fd5b506102d36107d6565b6040516102e09190611905565b60405180910390f35b3480156102f557600080fd5b50610310600480360381019061030b9190611973565b6107dc565b005b61032c60048036038101906103279190611827565b610b5b565b005b34801561033a57600080fd5b50610343610ee7565b6040516103509190611a12565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103b157600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161046b9190611a2d565b602060405180830381865afa158015610488573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ac9190611a5d565b6040518363ffffffff1660e01b81526004016104c9929190611a8a565b6020604051808303816000875af11580156104e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050c9190611aeb565b61051557600080fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b60005b60058054905081101561066057816005828154811061057357610572611b18565b5b906000526020600020906006020160000154141561064d573373ffffffffffffffffffffffffffffffffffffffff16600582815481106105b6576105b5611b18565b5b906000526020600020906006020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461063e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063590611ba4565b60405180910390fd5b61064781610f0d565b50610662565b808061065890611bf3565b915050610551565b505b50565b6005818154811061067557600080fd5b90600052602060002090600602016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154908060040154908060050154905086565b6000600680549050905090565b600781815481106106ee57600080fd5b90600052602060002090600502016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154908060040154905085565b6000600780549050905090565b60035481565b6006818154811061076757600080fd5b90600052602060002090600602016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154908060040154908060050154905086565b60025481565b6000600580549050905090565b60045481565b81600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016108389190611a2d565b602060405180830381865afa158015610855573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108799190611a5d565b10156108ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b190611c88565b60405180910390fd5b81600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b8152600401610918929190611ca8565b602060405180830381865afa158015610935573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109599190611a5d565b101561099a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099190611d1d565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016109f993929190611d3d565b6020604051808303816000875af1158015610a18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3c9190611aeb565b610a4557600080fd5b60006040518060c0016040528060045481526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018381526020016000815260200142815250905060046000815480929190610aa290611bf3565b9190505550610aaf6112af565b60058190806001815401808255809150506001900390600052602060002090600602016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a082015181600501555050505050565b806003541015610ba0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9790611dc0565b60405180910390fd5b610ba9816112c1565b341015610beb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be290611e2c565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610c48929190611a8a565b6020604051808303816000875af1158015610c67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8b9190611aeb565b610c9457600080fd5b60006040518060a0016040528060045481526020013373ffffffffffffffffffffffffffffffffffffffff168152602001838152602001610cd4846112c1565b815260200142815250905060046000815480929190610cf290611bf3565b919050555060078190806001815401808255809150506001900390600052602060002090600502016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003015560808201518160040155505060008290505b6000811115610ea95760006005600081548110610dba57610db9611b18565b5b9060005260206000209060060201600401546005600081548110610de157610de0611b18565b5b906000526020600020906006020160020154610dfd9190611e4c565b905081811115610e4d57816005600081548110610e1d57610e1c611b18565b5b90600052602060002090600602016004016000828254610e3d9190611e80565b9250508190555060009150610ea3565b8082610e599190611e4c565b9150806005600081548110610e7157610e70611b18565b5b90600052602060002090600602016004016000828254610e919190611e80565b92505081905550610ea26000610f0d565b5b50610d9a565b7fe3d4187f6ca4248660cc0ac8b8056515bac4a8132be2eca31d6d0cc170722a7e3384604051610eda929190611a8a565b60405180910390a1505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6005805490508110610f1e57600080fd5b600060058281548110610f3457610f33611b18565b5b90600052602060002090600602016040518060c0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820154815250509050806020015173ffffffffffffffffffffffffffffffffffffffff166108fc826060015183608001516110099190611ed6565b9081150290604051600060405180830381858888f19350505050158015611034573d6000803e3d6000fd5b5060068190806001815401808255809150506001900390600052602060002090600602016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a082015181600501555050806060015181608001517f6f85eafd2ee4262990a69612967f8e54126f2343a62867dc87f5821eebb35ae360405160405180910390a360008290505b600160058054905061112a9190611e4c565b8110156112305760056001826111409190611e80565b8154811061115157611150611b18565b5b90600052602060002090600602016005828154811061117357611172611b18565b5b9060005260206000209060060201600082015481600001556001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060028201548160020155600382015481600301556004820154816004015560058201548160050155905050808061122890611bf3565b915050611118565b50600580548061124357611242611f30565b5b60019003818190600052602060002090600602016000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556002820160009055600382016000905560048201600090556005820160009055505090555050565b6112b76112d8565b6112bf611507565b565b6000600254826112d19190611ed6565b9050919050565b60008060005b6005805490508110156114bd57600581815481106112ff576112fe611b18565b5b9060005260206000209060060201600201546005828154811061132557611324611b18565b5b90600052602060002090600602016004015410156114aa57816005828154811061135257611351611b18565b5b9060005260206000209060060201600401546005838154811061137857611377611b18565b5b9060005260206000209060060201600201546113949190611e4c565b61139e9190611e80565b82846113aa9190611ed6565b600583815481106113be576113bd611b18565b5b906000526020600020906006020160040154600584815481106113e4576113e3611b18565b5b9060005260206000209060060201600201546114009190611e4c565b6005848154811061141457611413611b18565b5b9060005260206000209060060201600301546114309190611ed6565b61143a9190611e80565b6114449190611f8e565b92506005818154811061145a57611459611b18565b5b906000526020600020906006020160040154600582815481106114805761147f611b18565b5b9060005260206000209060060201600201548361149d9190611e80565b6114a79190611e4c565b91505b80806114b590611bf3565b9150506112de565b5060025482146114fc57817ff347ee99503bf19c028bd6b18f3c676e82a9bb5b2bb5225aebe0fd62fd6a0d1960405160405180910390a2816002819055505b806003819055505050565b60005b6005805490508110156117e95760006001826115269190611e80565b90505b6005805490508110156117d5576005818154811061154a57611549611b18565b5b906000526020600020906006020160030154600583815481106115705761156f611b18565b5b90600052602060002090600602016003015411156117c25760006005838154811061159e5761159d611b18565b5b90600052602060002090600602016040518060c0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015481526020016004820154815260200160058201548152505090506005828154811061165557611654611b18565b5b90600052602060002090600602016005848154811061167757611676611b18565b5b9060005260206000209060060201600082015481600001556001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060028201548160020155600382015481600301556004820154816004015560058201548160050155905050806005838154811061173657611735611b18565b5b90600052602060002090600602016000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a08201518160050155905050505b80806117cd90611bf3565b915050611529565b5080806117e190611bf3565b91505061150a565b50565b600080fd5b6000819050919050565b611804816117f1565b811461180f57600080fd5b50565b600081359050611821816117fb565b92915050565b60006020828403121561183d5761183c6117ec565b5b600061184b84828501611812565b91505092915050565b61185d816117f1565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061188e82611863565b9050919050565b61189e81611883565b82525050565b600060c0820190506118b96000830189611854565b6118c66020830188611895565b6118d36040830187611854565b6118e06060830186611854565b6118ed6080830185611854565b6118fa60a0830184611854565b979650505050505050565b600060208201905061191a6000830184611854565b92915050565b600060a0820190506119356000830188611854565b6119426020830187611895565b61194f6040830186611854565b61195c6060830185611854565b6119696080830184611854565b9695505050505050565b6000806040838503121561198a576119896117ec565b5b600061199885828601611812565b92505060206119a985828601611812565b9150509250929050565b6000819050919050565b60006119d86119d36119ce84611863565b6119b3565b611863565b9050919050565b60006119ea826119bd565b9050919050565b60006119fc826119df565b9050919050565b611a0c816119f1565b82525050565b6000602082019050611a276000830184611a03565b92915050565b6000602082019050611a426000830184611895565b92915050565b600081519050611a57816117fb565b92915050565b600060208284031215611a7357611a726117ec565b5b6000611a8184828501611a48565b91505092915050565b6000604082019050611a9f6000830185611895565b611aac6020830184611854565b9392505050565b60008115159050919050565b611ac881611ab3565b8114611ad357600080fd5b50565b600081519050611ae581611abf565b92915050565b600060208284031215611b0157611b006117ec565b5b6000611b0f84828501611ad6565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082825260208201905092915050565b7f4e6f74206f776e65720000000000000000000000000000000000000000000000600082015250565b6000611b8e600983611b47565b9150611b9982611b58565b602082019050919050565b60006020820190508181036000830152611bbd81611b81565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611bfe826117f1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611c3157611c30611bc4565b5b600182019050919050565b7f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000600082015250565b6000611c72601283611b47565b9150611c7d82611c3c565b602082019050919050565b60006020820190508181036000830152611ca181611c65565b9050919050565b6000604082019050611cbd6000830185611895565b611cca6020830184611895565b9392505050565b7f4e6f7420656e6f75676820616c6c6f77616e6365000000000000000000000000600082015250565b6000611d07601483611b47565b9150611d1282611cd1565b602082019050919050565b60006020820190508181036000830152611d3681611cfa565b9050919050565b6000606082019050611d526000830186611895565b611d5f6020830185611895565b611d6c6040830184611854565b949350505050565b7f4e6f7420656e6f75676820746f6b656e7320617661696c61626c650000000000600082015250565b6000611daa601b83611b47565b9150611db582611d74565b602082019050919050565b60006020820190508181036000830152611dd981611d9d565b9050919050565b7f4e6f7420656e6f75676820455448000000000000000000000000000000000000600082015250565b6000611e16600e83611b47565b9150611e2182611de0565b602082019050919050565b60006020820190508181036000830152611e4581611e09565b9050919050565b6000611e57826117f1565b9150611e62836117f1565b925082821015611e7557611e74611bc4565b5b828203905092915050565b6000611e8b826117f1565b9150611e96836117f1565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611ecb57611eca611bc4565b5b828201905092915050565b6000611ee1826117f1565b9150611eec836117f1565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611f2557611f24611bc4565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611f99826117f1565b9150611fa4836117f1565b925082611fb457611fb3611f5f565b5b82820490509291505056fea2646970667358221220372898cd4c21c8b61ba0841543ce91582e05ec0d51ecd720f6aad1877bdcc2b064736f6c634300080b0033";

type MunicoinExchangeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MunicoinExchangeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MunicoinExchange__factory extends ContractFactory {
  constructor(...args: MunicoinExchangeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MunicoinExchange";
  }

  deploy(
    _municoin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MunicoinExchange> {
    return super.deploy(
      _municoin,
      overrides || {}
    ) as Promise<MunicoinExchange>;
  }
  getDeployTransaction(
    _municoin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_municoin, overrides || {});
  }
  attach(address: string): MunicoinExchange {
    return super.attach(address) as MunicoinExchange;
  }
  connect(signer: Signer): MunicoinExchange__factory {
    return super.connect(signer) as MunicoinExchange__factory;
  }
  static readonly contractName: "MunicoinExchange";
  public readonly contractName: "MunicoinExchange";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MunicoinExchangeInterface {
    return new utils.Interface(_abi) as MunicoinExchangeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MunicoinExchange {
    return new Contract(address, _abi, signerOrProvider) as MunicoinExchange;
  }
}

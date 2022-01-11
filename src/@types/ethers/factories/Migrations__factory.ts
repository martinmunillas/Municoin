/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Migrations, MigrationsInterface } from "../Migrations";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "last_completed_migration",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
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
        name: "completed",
        type: "uint256",
      },
    ],
    name: "setCompleted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "new_address",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610396806100606000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630900f01014610051578063445df0ac1461006d5780638da5cb5b1461008b578063fdacd576146100a9575b600080fd5b61006b6004803603810190610066919061027c565b6100c5565b005b610075610190565b60405161008291906102c2565b60405180910390f35b610093610196565b6040516100a091906102ec565b60405180910390f35b6100c360048036038101906100be9190610333565b6101ba565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561018d5760008190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff1660e01b815260040161015991906102c2565b600060405180830381600087803b15801561017357600080fd5b505af1158015610187573d6000803e3d6000fd5b50505050505b50565b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561021657806001819055505b50565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102498261021e565b9050919050565b6102598161023e565b811461026457600080fd5b50565b60008135905061027681610250565b92915050565b60006020828403121561029257610291610219565b5b60006102a084828501610267565b91505092915050565b6000819050919050565b6102bc816102a9565b82525050565b60006020820190506102d760008301846102b3565b92915050565b6102e68161023e565b82525050565b600060208201905061030160008301846102dd565b92915050565b610310816102a9565b811461031b57600080fd5b50565b60008135905061032d81610307565b92915050565b60006020828403121561034957610348610219565b5b60006103578482850161031e565b9150509291505056fea264697066735822122088a098a7cec788936f5d0b0abef682c23427db21aa07da723439c066aaf0a63364736f6c634300080b0033";

type MigrationsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MigrationsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Migrations__factory extends ContractFactory {
  constructor(...args: MigrationsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Migrations";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Migrations> {
    return super.deploy(overrides || {}) as Promise<Migrations>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Migrations {
    return super.attach(address) as Migrations;
  }
  connect(signer: Signer): Migrations__factory {
    return super.connect(signer) as Migrations__factory;
  }
  static readonly contractName: "Migrations";
  public readonly contractName: "Migrations";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MigrationsInterface {
    return new utils.Interface(_abi) as MigrationsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Migrations {
    return new Contract(address, _abi, signerOrProvider) as Migrations;
  }
}

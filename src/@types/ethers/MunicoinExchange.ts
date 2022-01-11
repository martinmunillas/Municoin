/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MunicoinExchangeInterface extends utils.Interface {
  contractName: "MunicoinExchange";
  functions: {
    "available()": FunctionFragment;
    "buyTransactions(uint256)": FunctionFragment;
    "closedTransactions(uint256)": FunctionFragment;
    "municoin()": FunctionFragment;
    "openTransactions(uint256)": FunctionFragment;
    "price()": FunctionFragment;
    "transactionCount()": FunctionFragment;
    "openTransactionsLength()": FunctionFragment;
    "closedTransactionsLength()": FunctionFragment;
    "buyTransactionsLength()": FunctionFragment;
    "sell(uint256,uint256)": FunctionFragment;
    "buy(uint256)": FunctionFragment;
    "closeSellTransaction(uint256)": FunctionFragment;
    "closeExchange()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "available", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "buyTransactions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closedTransactions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "municoin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "openTransactions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "price", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transactionCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "openTransactionsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "closedTransactionsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyTransactionsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sell",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "buy", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "closeSellTransaction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closeExchange",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "available", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closedTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "municoin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "openTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transactionCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openTransactionsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closedTransactionsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buyTransactionsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sell", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "closeSellTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closeExchange",
    data: BytesLike
  ): Result;

  events: {
    "Buy(address,uint256)": EventFragment;
    "Close(uint256,uint256)": EventFragment;
    "PriceChange(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Buy"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Close"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceChange"): EventFragment;
}

export type BuyEvent = TypedEvent<
  [string, BigNumber],
  { buyer: string; amount: BigNumber }
>;

export type BuyEventFilter = TypedEventFilter<BuyEvent>;

export type CloseEvent = TypedEvent<
  [BigNumber, BigNumber],
  { amount: BigNumber; price: BigNumber }
>;

export type CloseEventFilter = TypedEventFilter<CloseEvent>;

export type PriceChangeEvent = TypedEvent<[BigNumber], { newPrice: BigNumber }>;

export type PriceChangeEventFilter = TypedEventFilter<PriceChangeEvent>;

export interface MunicoinExchange extends BaseContract {
  contractName: "MunicoinExchange";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MunicoinExchangeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    available(overrides?: CallOverrides): Promise<[BigNumber]>;

    buyTransactions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        owner: string;
        amount: BigNumber;
        price: BigNumber;
        timestamp: BigNumber;
      }
    >;

    closedTransactions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        owner: string;
        amount: BigNumber;
        price: BigNumber;
        amountSold: BigNumber;
        timestamp: BigNumber;
      }
    >;

    municoin(overrides?: CallOverrides): Promise<[string]>;

    openTransactions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        owner: string;
        amount: BigNumber;
        price: BigNumber;
        amountSold: BigNumber;
        timestamp: BigNumber;
      }
    >;

    price(overrides?: CallOverrides): Promise<[BigNumber]>;

    transactionCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    openTransactionsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    closedTransactionsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    buyTransactionsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    sell(
      _amount: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buy(
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    closeSellTransaction(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    closeExchange(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  available(overrides?: CallOverrides): Promise<BigNumber>;

  buyTransactions(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, BigNumber, BigNumber] & {
      id: BigNumber;
      owner: string;
      amount: BigNumber;
      price: BigNumber;
      timestamp: BigNumber;
    }
  >;

  closedTransactions(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
      id: BigNumber;
      owner: string;
      amount: BigNumber;
      price: BigNumber;
      amountSold: BigNumber;
      timestamp: BigNumber;
    }
  >;

  municoin(overrides?: CallOverrides): Promise<string>;

  openTransactions(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
      id: BigNumber;
      owner: string;
      amount: BigNumber;
      price: BigNumber;
      amountSold: BigNumber;
      timestamp: BigNumber;
    }
  >;

  price(overrides?: CallOverrides): Promise<BigNumber>;

  transactionCount(overrides?: CallOverrides): Promise<BigNumber>;

  openTransactionsLength(overrides?: CallOverrides): Promise<BigNumber>;

  closedTransactionsLength(overrides?: CallOverrides): Promise<BigNumber>;

  buyTransactionsLength(overrides?: CallOverrides): Promise<BigNumber>;

  sell(
    _amount: BigNumberish,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buy(
    _amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  closeSellTransaction(
    id: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  closeExchange(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    available(overrides?: CallOverrides): Promise<BigNumber>;

    buyTransactions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        owner: string;
        amount: BigNumber;
        price: BigNumber;
        timestamp: BigNumber;
      }
    >;

    closedTransactions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        owner: string;
        amount: BigNumber;
        price: BigNumber;
        amountSold: BigNumber;
        timestamp: BigNumber;
      }
    >;

    municoin(overrides?: CallOverrides): Promise<string>;

    openTransactions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        owner: string;
        amount: BigNumber;
        price: BigNumber;
        amountSold: BigNumber;
        timestamp: BigNumber;
      }
    >;

    price(overrides?: CallOverrides): Promise<BigNumber>;

    transactionCount(overrides?: CallOverrides): Promise<BigNumber>;

    openTransactionsLength(overrides?: CallOverrides): Promise<BigNumber>;

    closedTransactionsLength(overrides?: CallOverrides): Promise<BigNumber>;

    buyTransactionsLength(overrides?: CallOverrides): Promise<BigNumber>;

    sell(
      _amount: BigNumberish,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    buy(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    closeSellTransaction(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    closeExchange(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Buy(address,uint256)"(buyer?: null, amount?: null): BuyEventFilter;
    Buy(buyer?: null, amount?: null): BuyEventFilter;

    "Close(uint256,uint256)"(
      amount?: BigNumberish | null,
      price?: BigNumberish | null
    ): CloseEventFilter;
    Close(
      amount?: BigNumberish | null,
      price?: BigNumberish | null
    ): CloseEventFilter;

    "PriceChange(uint256)"(
      newPrice?: BigNumberish | null
    ): PriceChangeEventFilter;
    PriceChange(newPrice?: BigNumberish | null): PriceChangeEventFilter;
  };

  estimateGas: {
    available(overrides?: CallOverrides): Promise<BigNumber>;

    buyTransactions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    closedTransactions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    municoin(overrides?: CallOverrides): Promise<BigNumber>;

    openTransactions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    price(overrides?: CallOverrides): Promise<BigNumber>;

    transactionCount(overrides?: CallOverrides): Promise<BigNumber>;

    openTransactionsLength(overrides?: CallOverrides): Promise<BigNumber>;

    closedTransactionsLength(overrides?: CallOverrides): Promise<BigNumber>;

    buyTransactionsLength(overrides?: CallOverrides): Promise<BigNumber>;

    sell(
      _amount: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buy(
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    closeSellTransaction(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    closeExchange(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    available(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buyTransactions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    closedTransactions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    municoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    openTransactions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    price(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transactionCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    openTransactionsLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    closedTransactionsLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buyTransactionsLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sell(
      _amount: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buy(
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    closeSellTransaction(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    closeExchange(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

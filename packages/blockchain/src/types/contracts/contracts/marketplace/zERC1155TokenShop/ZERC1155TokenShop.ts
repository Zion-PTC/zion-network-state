/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface ZERC1155TokenShopInterface extends utils.Interface {
  functions: {
    "getContractBalanceOfToken(uint256)": FunctionFragment;
    "getPrice()": FunctionFragment;
    "getRaisedCapital()": FunctionFragment;
    "getShopStatus()": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "tokensBoughtByBuyer(address,uint256)": FunctionFragment;
    "withdrawRaisedCapital(uint256)": FunctionFragment;
    "withdrawTokensOnSale(uint256,uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getContractBalanceOfToken"
      | "getPrice"
      | "getRaisedCapital"
      | "getShopStatus"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "supportsInterface"
      | "tokensBoughtByBuyer"
      | "withdrawRaisedCapital"
      | "withdrawTokensOnSale"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getContractBalanceOfToken",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "getPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRaisedCapital",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getShopStatus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensBoughtByBuyer",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawRaisedCapital",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTokensOnSale",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getContractBalanceOfToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRaisedCapital",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getShopStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensBoughtByBuyer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawRaisedCapital",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawTokensOnSale",
    data: BytesLike
  ): Result;

  events: {
    "CapitalWithdrawal(address,uint256)": EventFragment;
    "PriceChanged(address,uint256)": EventFragment;
    "ShopCreated(address,address,address,address,address,uint256)": EventFragment;
    "Sold(address,uint256,uint256)": EventFragment;
    "TokenOnSaleWithdrawal(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CapitalWithdrawal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ShopCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sold"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenOnSaleWithdrawal"): EventFragment;
}

export interface CapitalWithdrawalEventObject {
  submitter: string;
  amount: BigNumber;
}
export type CapitalWithdrawalEvent = TypedEvent<
  [string, BigNumber],
  CapitalWithdrawalEventObject
>;

export type CapitalWithdrawalEventFilter =
  TypedEventFilter<CapitalWithdrawalEvent>;

export interface PriceChangedEventObject {
  submitter: string;
  newPrice: BigNumber;
}
export type PriceChangedEvent = TypedEvent<
  [string, BigNumber],
  PriceChangedEventObject
>;

export type PriceChangedEventFilter = TypedEventFilter<PriceChangedEvent>;

export interface ShopCreatedEventObject {
  shopAddress: string;
  owner: string;
  membership: string;
  tokenContract: string;
  tokenUsedForPayement: string;
  price: BigNumber;
}
export type ShopCreatedEvent = TypedEvent<
  [string, string, string, string, string, BigNumber],
  ShopCreatedEventObject
>;

export type ShopCreatedEventFilter = TypedEventFilter<ShopCreatedEvent>;

export interface SoldEventObject {
  buyer: string;
  id: BigNumber;
  amount: BigNumber;
}
export type SoldEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  SoldEventObject
>;

export type SoldEventFilter = TypedEventFilter<SoldEvent>;

export interface TokenOnSaleWithdrawalEventObject {
  submitter: string;
  amount: BigNumber;
}
export type TokenOnSaleWithdrawalEvent = TypedEvent<
  [string, BigNumber],
  TokenOnSaleWithdrawalEventObject
>;

export type TokenOnSaleWithdrawalEventFilter =
  TypedEventFilter<TokenOnSaleWithdrawalEvent>;

export interface ZERC1155TokenShop extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ZERC1155TokenShopInterface;

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
    getContractBalanceOfToken(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRaisedCapital(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { raisedCapital: BigNumber }>;

    getShopStatus(
      overrides?: CallOverrides
    ): Promise<[number] & { shopStatus: number }>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    tokensBoughtByBuyer(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdrawRaisedCapital(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawTokensOnSale(
      id: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getContractBalanceOfToken(
    id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPrice(overrides?: CallOverrides): Promise<BigNumber>;

  getRaisedCapital(overrides?: CallOverrides): Promise<BigNumber>;

  getShopStatus(overrides?: CallOverrides): Promise<number>;

  onERC1155BatchReceived(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>[],
    arg3: PromiseOrValue<BigNumberish>[],
    arg4: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BigNumberish>,
    arg4: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  tokensBoughtByBuyer(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdrawRaisedCapital(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawTokensOnSale(
    id: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getContractBalanceOfToken(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getRaisedCapital(overrides?: CallOverrides): Promise<BigNumber>;

    getShopStatus(overrides?: CallOverrides): Promise<number>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tokensBoughtByBuyer(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawRaisedCapital(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    withdrawTokensOnSale(
      id: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;
  };

  filters: {
    "CapitalWithdrawal(address,uint256)"(
      submitter?: null,
      amount?: null
    ): CapitalWithdrawalEventFilter;
    CapitalWithdrawal(
      submitter?: null,
      amount?: null
    ): CapitalWithdrawalEventFilter;

    "PriceChanged(address,uint256)"(
      submitter?: null,
      newPrice?: null
    ): PriceChangedEventFilter;
    PriceChanged(submitter?: null, newPrice?: null): PriceChangedEventFilter;

    "ShopCreated(address,address,address,address,address,uint256)"(
      shopAddress?: null,
      owner?: null,
      membership?: null,
      tokenContract?: null,
      tokenUsedForPayement?: null,
      price?: null
    ): ShopCreatedEventFilter;
    ShopCreated(
      shopAddress?: null,
      owner?: null,
      membership?: null,
      tokenContract?: null,
      tokenUsedForPayement?: null,
      price?: null
    ): ShopCreatedEventFilter;

    "Sold(address,uint256,uint256)"(
      buyer?: null,
      id?: null,
      amount?: null
    ): SoldEventFilter;
    Sold(buyer?: null, id?: null, amount?: null): SoldEventFilter;

    "TokenOnSaleWithdrawal(address,uint256)"(
      submitter?: null,
      amount?: null
    ): TokenOnSaleWithdrawalEventFilter;
    TokenOnSaleWithdrawal(
      submitter?: null,
      amount?: null
    ): TokenOnSaleWithdrawalEventFilter;
  };

  estimateGas: {
    getContractBalanceOfToken(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getRaisedCapital(overrides?: CallOverrides): Promise<BigNumber>;

    getShopStatus(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokensBoughtByBuyer(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawRaisedCapital(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawTokensOnSale(
      id: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getContractBalanceOfToken(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRaisedCapital(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getShopStatus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokensBoughtByBuyer(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawRaisedCapital(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawTokensOnSale(
      id: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
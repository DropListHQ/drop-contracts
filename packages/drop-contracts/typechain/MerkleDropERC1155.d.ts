/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MerkleDropERC1155Interface extends ethers.utils.Interface {
  functions: {
    "claim(uint256,uint256,uint256,uint256,address,bytes32[])": FunctionFragment;
    "claimStartedForToken(uint256)": FunctionFragment;
    "claimedBitMap(uint256)": FunctionFragment;
    "expiryTimestamp()": FunctionFragment;
    "init(address,address,bytes32,uint256,bytes32)": FunctionFragment;
    "initialized()": FunctionFragment;
    "ipfsHash()": FunctionFragment;
    "isClaimed(uint256)": FunctionFragment;
    "isExpired()": FunctionFragment;
    "merkleRoot()": FunctionFragment;
    "token()": FunctionFragment;
    "tokensLeft(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claim",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BytesLike[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimStartedForToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimedBitMap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "expiryTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "init",
    values: [string, string, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialized",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ipfsHash", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isClaimed",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "isExpired", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "merkleRoot",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokensLeft",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimStartedForToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimedBitMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "expiryTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ipfsHash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isClaimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isExpired", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokensLeft", data: BytesLike): Result;

  events: {
    "Claimed(uint256,uint256,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
}

export type ClaimedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string] & {
    index: BigNumber;
    tokenId: BigNumber;
    amount: BigNumber;
    account: string;
  }
>;

export class MerkleDropERC1155 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MerkleDropERC1155Interface;

  functions: {
    claim(
      index: BigNumberish,
      tokenId: BigNumberish,
      amount: BigNumberish,
      maxSupply: BigNumberish,
      account: string,
      merkleProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimStartedForToken(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    claimedBitMap(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    expiryTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    init(
      tokenOwner_: string,
      token_: string,
      merkleRoot_: BytesLike,
      expiryTimestamp_: BigNumberish,
      ipfsHash_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;

    ipfsHash(overrides?: CallOverrides): Promise<[string]>;

    isClaimed(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isExpired(overrides?: CallOverrides): Promise<[boolean]>;

    merkleRoot(overrides?: CallOverrides): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    tokensLeft(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  claim(
    index: BigNumberish,
    tokenId: BigNumberish,
    amount: BigNumberish,
    maxSupply: BigNumberish,
    account: string,
    merkleProof: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimStartedForToken(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  claimedBitMap(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  expiryTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  init(
    tokenOwner_: string,
    token_: string,
    merkleRoot_: BytesLike,
    expiryTimestamp_: BigNumberish,
    ipfsHash_: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  ipfsHash(overrides?: CallOverrides): Promise<string>;

  isClaimed(index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  isExpired(overrides?: CallOverrides): Promise<boolean>;

  merkleRoot(overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  tokensLeft(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    claim(
      index: BigNumberish,
      tokenId: BigNumberish,
      amount: BigNumberish,
      maxSupply: BigNumberish,
      account: string,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    claimStartedForToken(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    claimedBitMap(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    expiryTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    init(
      tokenOwner_: string,
      token_: string,
      merkleRoot_: BytesLike,
      expiryTimestamp_: BigNumberish,
      ipfsHash_: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    ipfsHash(overrides?: CallOverrides): Promise<string>;

    isClaimed(index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    isExpired(overrides?: CallOverrides): Promise<boolean>;

    merkleRoot(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;

    tokensLeft(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Claimed(uint256,uint256,uint256,address)"(
      index?: BigNumberish | null,
      tokenId?: null,
      amount?: null,
      account?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, string],
      {
        index: BigNumber;
        tokenId: BigNumber;
        amount: BigNumber;
        account: string;
      }
    >;

    Claimed(
      index?: BigNumberish | null,
      tokenId?: null,
      amount?: null,
      account?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, string],
      {
        index: BigNumber;
        tokenId: BigNumber;
        amount: BigNumber;
        account: string;
      }
    >;
  };

  estimateGas: {
    claim(
      index: BigNumberish,
      tokenId: BigNumberish,
      amount: BigNumberish,
      maxSupply: BigNumberish,
      account: string,
      merkleProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimStartedForToken(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimedBitMap(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    expiryTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    init(
      tokenOwner_: string,
      token_: string,
      merkleRoot_: BytesLike,
      expiryTimestamp_: BigNumberish,
      ipfsHash_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;

    ipfsHash(overrides?: CallOverrides): Promise<BigNumber>;

    isClaimed(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isExpired(overrides?: CallOverrides): Promise<BigNumber>;

    merkleRoot(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    tokensLeft(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      index: BigNumberish,
      tokenId: BigNumberish,
      amount: BigNumberish,
      maxSupply: BigNumberish,
      account: string,
      merkleProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimStartedForToken(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimedBitMap(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    expiryTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    init(
      tokenOwner_: string,
      token_: string,
      merkleRoot_: BytesLike,
      expiryTimestamp_: BigNumberish,
      ipfsHash_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ipfsHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isClaimed(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isExpired(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    merkleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokensLeft(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

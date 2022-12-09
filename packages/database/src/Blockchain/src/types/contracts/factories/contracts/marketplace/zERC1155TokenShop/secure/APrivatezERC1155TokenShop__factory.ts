/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  APrivatezERC1155TokenShop,
  APrivatezERC1155TokenShopInterface,
} from "../../../../../contracts/marketplace/zERC1155TokenShop/secure/APrivatezERC1155TokenShop";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "submitter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "CapitalWithdrawal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "submitter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
    ],
    name: "PriceChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "shopAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract Membership",
        name: "membership",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract ERC1155",
        name: "tokenContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "tokenUsedForPayement",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "ShopCreated",
    type: "event",
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
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Sold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "submitter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenOnSaleWithdrawal",
    type: "event",
  },
];

export class APrivatezERC1155TokenShop__factory {
  static readonly abi = _abi;
  static createInterface(): APrivatezERC1155TokenShopInterface {
    return new utils.Interface(_abi) as APrivatezERC1155TokenShopInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): APrivatezERC1155TokenShop {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as APrivatezERC1155TokenShop;
  }
}
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPrivatezPausable,
  IPrivatezPausableInterface,
} from "../../../../../contracts/security/zPausable/secure/IPrivatezPausable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
];

export class IPrivatezPausable__factory {
  static readonly abi = _abi;
  static createInterface(): IPrivatezPausableInterface {
    return new utils.Interface(_abi) as IPrivatezPausableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPrivatezPausable {
    return new Contract(address, _abi, signerOrProvider) as IPrivatezPausable;
  }
}

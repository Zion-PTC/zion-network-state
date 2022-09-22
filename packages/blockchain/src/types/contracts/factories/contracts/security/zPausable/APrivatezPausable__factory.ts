/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  APrivatezPausable,
  APrivatezPausableInterface,
} from "../../../../contracts/security/zPausable/APrivatezPausable";

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

export class APrivatezPausable__factory {
  static readonly abi = _abi;
  static createInterface(): APrivatezPausableInterface {
    return new utils.Interface(_abi) as APrivatezPausableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): APrivatezPausable {
    return new Contract(address, _abi, signerOrProvider) as APrivatezPausable;
  }
}

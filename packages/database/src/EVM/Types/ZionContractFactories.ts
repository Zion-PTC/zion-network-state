import { types, Factories } from "@zionstate/blockchain";
import { ERC1155TokenShop__factory } from "@zionstate/blockchain/dist/types/contracts";
import { Membership__factory } from "@zionstate/blockchain/dist/types/contracts";
import { ProvaMaster__factory } from "@zionstate/blockchain/dist/types/contracts";
import { USDC__factory } from "@zionstate/blockchain/dist/types/contracts";
import { ethers, Signer } from "ethers";

export type ERC1155IndividualURI_Factory =
  types.ZionContractsTypeScript.ERC1155IndividualURI__factory;

export type ERC1155IndividualURI =
  types.ZionContractsTypeScript.ERC1155IndividualURI;

export type ContractFactory = ethers.ContractFactory;

export class ZionContractFactories {
  contractFactories: {
    ERC1155IndividualURI: ERC1155IndividualURI_Factory;
    ERC1155TokenShop: ERC1155TokenShop__factory;
    Membership: Membership__factory;
    ProvaMaster: ProvaMaster__factory;
    USDC: USDC__factory;
    [key: string]: any;
  };
  constructor(public signer?: Signer) {
    if (!signer) throw new Error("");
    const ERC1155IndividualURI = Factories.getERC1155IndividualURI(signer);
    const ERC1155TokenShop = Factories.getERC1155TokenShop(signer);
    const Membership = Factories.getMembership(signer);
    const ProvaMaster = Factories.getProvaMaster(signer);
    const USDC = Factories.getUSDC(signer);
    this.contractFactories = {
      ERC1155IndividualURI,
      ERC1155TokenShop,
      Membership,
      ProvaMaster,
      USDC,
    };
  }
}

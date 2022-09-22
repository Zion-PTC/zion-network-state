import { IEVM } from "./EVM";
import { NetworksTypes } from "./Types";

export type getBalanceType = (
  this: IEVM,
  address: string,
  network: NetworksTypes
) => Promise<string>;

export const getBalance: getBalanceType = async function (address, network) {
  const ethereum = this.providers.ethereum.etherscan;
  const gnosis = this.providers.gnosis.block_scout;
  const polygon = this.providers.polygon.alchemy;
  let balanceInWei;
  switch (network) {
    case "ethereum":
      balanceInWei = await ethereum.getBalance(address);
      break;
    case "gnosis":
      balanceInWei = await gnosis.getBalance(address);
      break;
    case "polygon":
      balanceInWei = await polygon.getBalance(address);
      break;
    default:
      balanceInWei = await ethereum.getBalance(address);
      break;
  }
  return this.formatEther(balanceInWei);
};

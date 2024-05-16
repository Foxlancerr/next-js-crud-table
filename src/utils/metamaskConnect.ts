import { ethers } from "ethers";

export function hasMetaMaskInstall() {
  if (!(window as any).ethereum) {
    alert("Metamask wallet is not installed");
    return;
  } else {
    alert("Metamask wallet is installed");
  }
}

export const connectMetaMask = async () => {
  try {
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    const account = accounts[0];

    return account;
  } catch (error) {
    console.log(error);
  }
};
export const disConnectMetaMask = async () => {
  try {
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    const account = accounts[0];
  } catch (error) {
    console.log(error);
  }
};

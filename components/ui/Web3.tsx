"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";
import { ReactNode } from "react";

const projectId = "763b1c8185c7e326cc7786cf2127c3e4";

const sepolia = {
	chainId: 11155111,
	name: "Sepolia",
	currency: "ETH",
	explorerUrl: "https://sepolia.etherscan.io/",
	rpcUrl: "https://ethereum-sepolia-rpc.publicnode.com	"
};

const metadata = {
	name: "My Website",
	description: "My Website description",
	url: "https://mywebsite.com",
	icons: ["https://avatars.mywebsite.com/"]
};

const ethersConfig = defaultConfig({
	metadata
});

createWeb3Modal({
	ethersConfig,
	chains: [sepolia],
	projectId
});

export function Web3Modal({ children }: { children: ReactNode }) {
	return children;
}

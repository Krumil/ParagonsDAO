"use client";

import abi from "@/contracts/abi.json";
import { Button } from "@/components/ui/Button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Toast } from "@/components/ui/Toast";
import { ethers, Contract } from "ethers";
import { useEffect, useState } from "react";
import { useWeb3Modal, useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers5/react";

import { FC } from "react";

const ConnectButton: FC = () => {
	const { open } = useWeb3Modal();
	const { address, isConnected } = useWeb3ModalAccount();
	const { walletProvider } = useWeb3ModalProvider();
	const [displayAddress, setDisplayAddress] = useState("Connect");
	const [amount, setAmount] = useState(0);
	const [toastVisible, setToastVisible] = useState(false);
	const [toastProps, setToastProps] = useState({
		title: "",
		message: "",
		duration: 3000
	});

	const toast = ({ title, message, duration }: { title: string; message: string; duration: number }) => {
		setToastVisible(true);
		setToastProps({ title, message, duration });
	};

	useEffect(() => {
		if (isConnected && address) {
			setDisplayAddress(`${address.slice(0, 6)}...${address.slice(-4)}`);
		} else {
			setDisplayAddress("Connect");
		}
	}, [isConnected, address]);

	const createContract: () => { contract: Contract } | undefined = () => {
		if (!walletProvider) return undefined;

		const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
		const signer = ethersProvider.getSigner();
		const contract = new Contract("0xa0718475f1Da087578DcD067b4B03d0b36a2B472" as string, abi, signer);
		return { contract };
	};

	const mint = async () => {
		const response = createContract();
		if (!response) return;
		const { contract } = response;
		const formattedAmount = ethers.utils.parseEther(amount.toString());
		try {
			const mintTx = await contract.mint(address, formattedAmount);
			const link = `https://sepolia.etherscan.io/tx/${mintTx.hash}`;

			toast({
				title: "Transaction submitted",
				message: "See your transaction " + link,
				duration: 100000
			});
			const receipt = await mintTx.wait();
			if (receipt.status === 1) {
				setToastVisible(false);
				setTimeout(() => {
					toast({
						title: "Transaction successful",
						message: "See your transaction " + link,
						duration: 5000
					});
				}, 1000);
			} else {
				setToastVisible(false);
				setTimeout(() => {
					toast({
						title: "Transaction failed",
						message: "Something went wrong while minting tokens. Please try again.",
						duration: 5000
					});
				}, 1000);
			}
		} catch (error) {
			console.error("Error minting tokens:", error);
		}
	};

	const burn = async () => {
		const response = createContract();
		if (!response) return;
		const { contract } = response;
		const formattedAmount = ethers.utils.parseEther(amount.toString());
		try {
			const burnTx = await contract.burn(address, formattedAmount);
			const link = `https://sepolia.etherscan.io/tx/${burnTx.hash}`;
			console.log("Transaction submitted:", burnTx.hash);

			toast({
				title: "Transaction submitted",
				message: "See your transaction " + link,
				duration: 100000
			});

			const receipt = await burnTx.wait();
			console.log("Transaction mined:", receipt);
			if (receipt.status === 1) {
				toast({
					title: "Transaction successful",
					message: "See your transaction " + link,
					duration: 5000
				});
			} else {
				toast({
					title: "Transaction failed",
					message: "Something went wrong while burning tokens. Please try again.",
					duration: 5000
				});
			}
		} catch (error) {
			console.error("Error burning tokens:", error);
		}
	};

	return (
		<div className='flex'>
			<Button className='mr-4' onClick={() => open()}>
				{displayAddress}
			</Button>

			{isConnected && (
				<Dialog>
					<DialogTrigger asChild>
						<Button>Actions</Button>
					</DialogTrigger>
					<DialogContent className='w-[300px] rounded-xl'>
						<DialogHeader>
							<DialogTitle>What you wanna do?</DialogTitle>
						</DialogHeader>
						<Input
							placeholder='PDT Amount'
							type='number'
							className='my-10 mx-auto w-[200px]'
							onChange={e => setAmount(Number(e.target.value))}
						/>
						<div className='flex justify-center items-center'>
							<Button className='mx-4' onClick={() => mint()} disabled={amount <= 0}>
								Mint
							</Button>
							<Button className='mx-4' onClick={() => burn()} disabled={amount <= 0}>
								Burn
							</Button>
						</div>
					</DialogContent>
				</Dialog>
			)}

			{toastVisible && (
				<Toast title={toastProps.title} message={toastProps.message} duration={toastProps.duration} />
			)}
		</div>
	);
};
export { ConnectButton };

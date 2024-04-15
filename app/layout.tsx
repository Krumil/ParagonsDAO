import "@/styles/globals.css";
import Header from "@/components/header";
import type { Metadata } from "next";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { Web3Modal } from "@/components/ui/Web3";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ParagonsDAO x Krumil",
	description: "ParagonsDAO x Krumil"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={workSans.className}>
			<body className='dark'>
				<ApolloWrapper>
					<Web3Modal>
						<Header />
						<main>
							<div>{children}</div>
						</main>
					</Web3Modal>
				</ApolloWrapper>
			</body>
		</html>
	);
}

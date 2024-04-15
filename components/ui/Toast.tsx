"use client";

import { useState, useEffect, FC } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

interface ToastProps {
	title: string;
	message: string;
	duration?: number;
}

const Toast: FC<ToastProps> = ({ title, message, duration = 3000 }) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (message) {
			setVisible(true);
			setTimeout(() => setVisible(false), duration);
		}
	}, [message, duration]);

	if (!visible) return null;

	return (
		<Card className='fixed bottom-4 mx-auto w-[300px]'>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<CardDescription>{message}</CardDescription>
			</CardContent>
		</Card>
	);
};

export { Toast };

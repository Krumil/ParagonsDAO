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
	const [formattedMessage, setFormattedMessage] = useState("");

	useEffect(() => {
		if (message) {
			setVisible(true);
			const link = message.match(/https?:\/\/[^\s]+/);
			if (link) {
				const [start] = link;
				const formatted = message.replace(start, `<a href="${start}" target="_blank">here</a>`);
				setFormattedMessage(formatted);
			}
			setTimeout(() => setVisible(false), duration);
		}
	}, [message, duration]);

	if (!visible) return null;

	return (
		<Card className='fixed bottom-4 mx-auto w-[300px] z-100 transform -translate-x-1/2 left-1/2'>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<CardDescription dangerouslySetInnerHTML={{ __html: formattedMessage }} />
			</CardContent>
		</Card>
	);
};

export { Toast };

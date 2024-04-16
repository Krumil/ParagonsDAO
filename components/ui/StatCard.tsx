import { FC } from "react";

interface StatCardProps {
	title: string;
	value: number;
	unit: string;
}

const StatCard: FC<StatCardProps> = ({ title, value, unit }) => {
	const formattedValue = Math.round(value * 100) / 100;
	return (
		<div className='flex flex-col h-[100px] rounded-lg p-4 bg-secondary'>
			<div className='flex justify-between items-center'>
				<h2 className='text-md font-semibold'>{title}</h2>
			</div>
			<div className='grow flex flex-col justify-center'>
				<p className='text-xl font-bold'>
					{formattedValue} {unit}
				</p>
			</div>
		</div>
	);
};

export { StatCard };

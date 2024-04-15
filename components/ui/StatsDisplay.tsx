"use client";

import { FC } from "react";
import { StatCard } from "@/components/ui/StatCard";

interface TotalStats {
	volume: number;
	sales: number;
	average_price: number;
	num_owners: number;
	market_cap: number;
	floor_price: number;
	floor_price_symbol: string;
}

interface IntervalStats {
	interval: string;
	volume: number;
	volume_diff: number;
	volume_change: number;
	sales: number;
	sales_diff: number;
	average_price: number;
}

interface Stats {
	total: TotalStats;
	intervals: IntervalStats[];
}

const StatsDisplay: FC<{ stats: Stats }> = ({ stats }) => {
	return (
		<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
			<StatCard title='Total Volume' value={stats.total.volume} unit='ETH' />
			<StatCard title='Total Sales' value={stats.total.sales} unit='' />
			<StatCard title='Average Price' value={stats.total.average_price} unit='ETH' />
			<StatCard title='Owners' value={stats.total.num_owners} unit='' />
			<StatCard title='Market Cap' value={stats.total.market_cap} unit='ETH' />
			<StatCard title='Floor Price' value={stats.total.floor_price} unit='ETH' />
		</div>
	);
};

export { StatsDisplay };

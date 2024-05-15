import { useEffect, useState } from "react";
import './Details.css';

export type DetailsRow = {
	name: string;
	rate: number;
	amount: number;
}

export default function Details(props: { data: DetailsRow[] }) {

	const [summary, setSummary] = useState({ rate: 0, amount: 0 });

	useEffect(() => {
		const newSummary = { rate: 0, amount: 0 };
		for (const row of props.data) {
			newSummary.rate += row.rate;
			newSummary.amount += row.amount;
		}
		setSummary(newSummary);
	}, [props.data]);

	return (
		<div>
			<div className="header">
				<h1>Details</h1>
				<div>
					<span>Rate Sum: {summary.rate}</span>
					<span>Amount Sum: {summary.amount}</span>
				</div>
			</div>
			<table>
				<thead>
					<th>Name</th>
					<th>Rate</th>
					<th>Amount</th>
				</thead>
				<tbody>
					{props.data.map(row => (
						<tr key={row.name}>
							<td>{row.name}</td>
							<td>{row.rate}</td>
							<td>{row.amount}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
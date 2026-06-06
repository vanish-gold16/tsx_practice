import type {Transaction} from "../types.ts";
import {TransactionItem} from "./TransactionItem.tsx";

type TransactionListProps = {
    transactions: Transaction[]
}

export default function TransactionList({ transactions }: TransactionListProps) {
    return (
        <ul className="transaction-list">
            {transactions.map((transaction) => (
                <TransactionItem
                    transaction={transaction}
                    key={transaction.id}
                />
            ))}
        </ul>
    )
}
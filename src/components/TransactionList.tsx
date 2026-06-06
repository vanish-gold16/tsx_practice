import type {Transaction} from "../types.ts";
import {TransactionItem} from "./TransactionItem.tsx";

type TransactionListProps = {
    transactions: Transaction[]
    onDelete: (id: string) => void
}

export default function TransactionList({ transactions, onDelete }: TransactionListProps) {
    return (
        <ul className="transaction-list">
            {transactions.length === 0 && (
                <p className="empty">Нет операций</p>
            )}
            {transactions.map((transaction) => (
                <TransactionItem
                    transaction={transaction}
                    key={transaction.id}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    )
}
import {useState} from "react";
import type {Transaction, TransactionType} from "../types.ts";

type TransactionFormProps = {
    onAdd: (transaction: Transaction) => void
}

export default function TransactionForm( {onAdd }: TransactionFormProps) {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [type, setType] = useState<TransactionType>('expense')

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        const newTransaction: Transaction = {
            id: crypto.randomUUID(),
            title: title,
            amount: Number(amount),
            type: type,
            createdAt: new Date().toISOString(),
        }

        onAdd(newTransaction)
        setTitle('')
        setAmount('')
        setType('expense')
    }

    return (
        <form
            className="form"
            onSubmit={handleSubmit}
        >
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Название"
            />
            <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Сумма"
            />
            <select
                value={type}
                onChange={(e) => setType(e.target.value as TransactionType)}
            >
                <option value="expense">Расход</option>
                <option value="income">Доход</option>
            </select>
            <button type="submit">
                Добавить
            </button>
        </form>
    )
}
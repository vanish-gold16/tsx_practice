import './App.css'
// Пока импортируем образец и тестовые данные — пригодятся на Этапе 1.
// По мере выполнения задания ты добавишь сюда свои компоненты и состояние.
// import { TransactionItem } from './components/TransactionItem'
import { sampleTransactions } from './data'
import TransactionList from "./components/TransactionList.tsx";
import {useEffect, useState} from "react";
import type {Transaction} from "./types.ts";
import TransactionForm from "./components/TransactionForm.tsx";
import Summary from "./components/Summary.tsx";

function App() {
    const [transactions, setTransactions] = useState<Transaction[]>(() => {
        const saved = localStorage.getItem('transactions')
        return saved ? JSON.parse(saved) : sampleTransactions
    })
    const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all')

    const visibleTransactions =
        filter === 'all'
            ? transactions
            :transactions.filter(t => t.type === filter)

    function handleAdd(transaction: Transaction) {
        setTransactions(prev => [transaction, ...prev])
    }

    function handleDelete(id: string) {
        setTransactions(prev => prev.filter(t => t.id !== id))
    }

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions))
    }, [transactions]);

    return (
        <div className="app">
            <header className="app__header">
                <h1>💰 Мои финансы</h1>
                <p className="app__subtitle">Простой трекер доходов и расходов</p>
            </header>

        <main className="app__main">
            <div
                className="filter"
            >
                <button
                    className={filter === 'all' ? 'is-active' : ''}
                    onClick={() => setFilter('all')}
                >
                    Все
                </button>
                <button
                    className={filter === 'income' ? 'is-active' : ''}
                    onClick={() => setFilter('income')}
                >
                    Доходы
                </button>
                <button
                    className={filter === 'expense' ? 'is-active' : ''}
                    onClick={() => setFilter('expense')}
                >
                    Расходы
                </button>
            </div>
            <Summary transactions={transactions} />
            <TransactionList
                transactions={visibleTransactions}
                onDelete={handleDelete}
            />
            <TransactionForm
                onAdd={handleAdd}
            />
        </main>
        </div>
    )
}

export default App

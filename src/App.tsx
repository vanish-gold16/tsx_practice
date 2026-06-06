import './App.css'
// Пока импортируем образец и тестовые данные — пригодятся на Этапе 1.
// По мере выполнения задания ты добавишь сюда свои компоненты и состояние.
// import { TransactionItem } from './components/TransactionItem'
import { sampleTransactions } from './data'
import TransactionList from "./components/TransactionList.tsx";
import {useState} from "react";
import type {Transaction} from "./types.ts";
import TransactionForm from "./components/TransactionForm.tsx";

function App() {
    const [transactions, setTransactions] = useState<Transaction[]>(sampleTransactions)

    function handleAdd(transaction: Transaction) {
        setTransactions(prev => [transaction, ...prev])
    }

    return (
        <div className="app">
            <header className="app__header">
                <h1>💰 Мои финансы</h1>
                <p className="app__subtitle">Простой трекер доходов и расходов</p>
            </header>

        <main className="app__main">
            <TransactionList
                transactions={transactions} />
            <TransactionForm
                onAdd={handleAdd}
            />
        </main>
        </div>
    )
}

export default App

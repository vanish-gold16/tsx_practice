import './App.css'
// Пока импортируем образец и тестовые данные — пригодятся на Этапе 1.
// По мере выполнения задания ты добавишь сюда свои компоненты и состояние.
// import { TransactionItem } from './components/TransactionItem'
// import { sampleTransactions } from './data'

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>💰 Мои финансы</h1>
        <p className="app__subtitle">Простой трекер доходов и расходов</p>
      </header>

      <main className="app__main">
        {/*
          ┌─────────────────────────────────────────────────────────────┐
          │  ЗДЕСЬ ТЫ БУДЕШЬ СТРОИТЬ ПРИЛОЖЕНИЕ.                          │
          │                                                              │
          │  Открой README.md — там пошаговое задание. Начни с «Этап 1»: │
          │  вывести список операций из sampleTransactions, используя    │
          │  компонент TransactionItem как образец.                      │
          └─────────────────────────────────────────────────────────────┘
        */}
        <p className="placeholder">
          Тут пока пусто. Загляни в <code>README.md</code> и начни с «Этап&nbsp;1».
        </p>
      </main>
    </div>
  )
}

export default App

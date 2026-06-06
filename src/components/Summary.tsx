import type {Transaction} from "../types.ts";

type SummaryProps = {
    transactions: Transaction[]
}

export default function Summary({ transactions }: SummaryProps) {
    const totalIncome = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0)
    const totalExpense = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0)
    const balance = totalIncome - totalExpense

    return (
        <div className="summary">
            <div className="summary__card">
                <div className="summary__label">Доходы</div>
                <div className="summary__value summary__value--income">
                    {totalIncome.toLocaleString('ru-RU')} ₽
                </div>
            </div>
            <div className="summary__card">
                <div className="summary__label">Расходы</div>
                <div className="summary__value summary__value--expense">
                    {totalExpense.toLocaleString('ru-RU')} ₽
                </div>
            </div>
            <div className="summary__card">
                <div className="summary__label">Баланс</div>
                <div className="summary__value summary__value--balance">
                    {balance.toLocaleString('ru-RU')} ₽
                </div>
            </div>
        </div>
    )
}
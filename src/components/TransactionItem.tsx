import type { Transaction } from '../types'

// ─────────────────────────────────────────────────────────────────────────
//  TransactionItem — ОБРАЗЕЦ компонента. Я написал его полностью, чтобы ты
//  видел паттерн «типизированный компонент на React + TypeScript».
//  Остальные компоненты (список, сводку, форму) ты напишешь сам по этому образцу.
// ─────────────────────────────────────────────────────────────────────────

// Пропсы (props) — входные данные компонента, как аргументы у функции.
// Их обязательно типизируем: TransactionItem ДОЛЖЕН получить объект transaction.
// Если забудешь его передать — TypeScript подсветит ошибку ещё до запуска.
interface TransactionItemProps {
  transaction: Transaction,
  onDelete: (id: string) => void,
}

// Компонент — это функция, которая возвращает JSX (разметку).
// { transaction } — деструктуризация: достаём поле transaction из объекта пропсов.
export function TransactionItem({ transaction, onDelete }: TransactionItemProps) {
  const { title, amount, type } = transaction

  // Производные значения считаем прямо в теле компонента — это обычные переменные.
  const isIncome = type === 'income'
  const sign = isIncome ? '+' : '−'

  return (
    // Шаблонная строка в className позволяет менять стиль в зависимости от типа.
    <li className={`transaction transaction--${type}`}>
      <span className="transaction__title">{title}</span>
      <span className="transaction__amount">
        {/* toLocaleString красиво разбивает число на разряды: 80 000 */}
        {sign}
        {amount.toLocaleString('ru-RU')} ₽
      </span>
        <button
            type="button"
            className="transaction__delete"
            onClick={() => onDelete(transaction.id)}
        >
            x
        </button>
    </li>
  )
}

import type { Transaction } from './types'

// Несколько готовых операций, чтобы было что выводить на «Этапе 1»,
// пока ты ещё не сделал форму добавления. Потом эти данные можно удалить.
export const sampleTransactions: Transaction[] = [
  { id: '1', title: 'Зарплата', amount: 80000, type: 'income', createdAt: '2026-06-01T10:00:00.000Z' },
  { id: '2', title: 'Продукты', amount: 3500, type: 'expense', createdAt: '2026-06-02T18:30:00.000Z' },
  { id: '3', title: 'Кофе с собой', amount: 250, type: 'expense', createdAt: '2026-06-03T09:15:00.000Z' },
  { id: '4', title: 'Фриланс-заказ', amount: 15000, type: 'income', createdAt: '2026-06-04T14:00:00.000Z' },
  { id: '5', title: 'Такси', amount: 600, type: 'expense', createdAt: '2026-06-05T22:40:00.000Z' },
]

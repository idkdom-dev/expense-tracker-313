import { Injectable, signal } from '@angular/core';
import { Expense } from './expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  expenses = signal<Expense[]>([]);

  getExpenseById(id: string) {
    return this.expenses().find((expense) => expense.id === id);
  }

  addExpense(expense: Expense) {
    this.expenses.update((list) => [...list, expense]);
  }

  removeExpense(id: string) {
    this.expenses.update((list) => list.filter((e) => e.id !== id));
  }
}

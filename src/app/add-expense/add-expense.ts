import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../expense-service';
import { Expense } from '../expense';

@Component({
  selector: 'app-add-expense',
  imports: [FormsModule],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.css',
})
export class AddExpense {
  title = '';
  amount: number | null = null;
  category: string = '';

  constructor(
    private expenseService: ExpenseService,
    private router: Router,
  ) {}

  addExpense() {
    if (!this.title || this.amount === null || !this.category) return;

    const expense: Expense = {
      id: Date.now().toString(),
      title: this.title,
      amount: Number(this.amount),
      category: this.category as any,
    };

    this.expenseService.addExpense(expense);
  }
}

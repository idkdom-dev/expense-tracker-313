import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExpenseService } from '../expense-service';
import { Expense } from '../expense';

@Component({
  selector: 'app-expense-item',
  imports: [RouterLink],
  templateUrl: './expense-item.html',
  styleUrl: './expense-item.css',
})
export class ExpenseItem {
  @Input() expenseId?: string;

  constructor(private expenseService: ExpenseService) {}

  get expense(): Expense | undefined {
    return this.expenseId ? this.expenseService.getExpenseById(this.expenseId) : undefined;
  }
}

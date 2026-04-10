import { Component } from '@angular/core';
import { ExpenseService } from '../expense-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(public expenseService: ExpenseService) {}

  get totalExpenses(): number {
    return this.expenseService.expenses().reduce((s, e) => s + e.amount, 0);
  }

  get count(): number {
    return this.expenseService.expenses().length;
  }

  get highest(): number {
    const arr = this.expenseService.expenses();
    return arr.length ? Math.max(...arr.map((e) => e.amount)) : 0;
  }

  get average(): number {
    const arr = this.expenseService.expenses();
    return arr.length ? arr.reduce((s, e) => s + e.amount, 0) / arr.length : 0;
  }
}

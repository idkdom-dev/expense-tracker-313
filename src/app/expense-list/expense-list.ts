import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExpenseItem } from '../expense-item/expense-item';
import { ExpenseService } from '../expense-service';

@Component({
  selector: 'app-expense-list',
  imports: [RouterModule, ExpenseItem],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList {
  expenseService = inject(ExpenseService);
}

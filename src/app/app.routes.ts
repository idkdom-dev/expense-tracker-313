import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { AddExpense } from './add-expense/add-expense';
import { EditExpense } from './edit-expense/edit-expense';
import { ExpenseList } from './expense-list/expense-list';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'add-expense', component: AddExpense },
  { path: 'edit-expense/:id', component: EditExpense },
  { path: 'view-expenses', component: ExpenseList },
  { path: 'edit-expense', component: EditExpense },
];

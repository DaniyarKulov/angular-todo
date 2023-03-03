import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPagesComponent } from './pages/auth-pages/auth-pages.component';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AuthPagesComponent,
  },
];

@NgModule({
  declarations: [AuthPagesComponent, CounterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthModule {}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface TodoDto {
  id: number;
  title: string;
  completed: boolean;
}
export interface Todo extends TodoDto {
  edit: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}
  getTodos(): Observable<Todo[]> {
    return this.http
      .get<TodoDto[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        map((todos: TodoDto[]) => {
          return todos.map((todo: TodoDto) => {
            return { ...todo, edit: false };
          });
        })
      );
  }
  getPage(num: number) {
    return this.http
      .get<TodoDto[]>('https://jsonplaceholder.typicode.com/todos', {
        params: { _page: num },
      })
      .pipe(
        map((todos: TodoDto[]) => {
          return todos.map((todo: TodoDto) => {
            return { ...todo, edit: false };
          });
        })
      );
  }
}

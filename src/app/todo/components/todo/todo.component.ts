import { Component } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  tasks: Todo[] = [];
  todoText = '';
  lastCount = this.tasks.length;
  currentPage = 0;
  disabledNext = false;
  constructor(private todoService: TodoService) {
    this.loadPage();
  }
  loadPage() {
    this.todoService.getPage(this.currentPage).subscribe((todos) => {
      if (todos.length !== 0) {
        this.tasks = todos;
        this.disabledNext = false;
      } else {
        this.disabledNext = true;
      }
    });
  }
  increment() {
    this.currentPage += 1;
    this.loadPage();
  }
  decrement() {
    this.currentPage -= 1;
    this.loadPage();
  }
  toggleTask(id: number) {
    const findTask = this.tasks.find((t) => t.id === id);
    if (findTask) {
      findTask.completed = !findTask.completed;
    }
  }
  addTodo() {
    this.tasks.push({
      id: ++this.lastCount,
      title: this.todoText,
      completed: false,
      edit: false,
    });
    this.todoText = '';
  }
  deleteTodo(id: number) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
  deleteTasks() {
    this.tasks = [];
  }
  submitEdit(text: string, id: number) {
    const findTask = this.tasks.find((t) => t.id === id);
    if (findTask) {
      findTask.title = text;
      findTask.edit = false;
    }
  }
}

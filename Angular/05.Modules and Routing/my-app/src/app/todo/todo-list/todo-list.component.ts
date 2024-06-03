import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log('Todo-List Destroyed!');
  }
}

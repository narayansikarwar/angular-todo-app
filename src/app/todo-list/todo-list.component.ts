import { Component, OnInit } from "@angular/core";

class TodoListView {
  Description: string = '';
  Time: string = '12:00 AM';
  IsDue: boolean = false;
  Priority: 'Low' | 'Medium' | 'High' = 'Low';

  constructor(description: string, priority: 'Low' | 'Medium' | 'High' = 'Low') {
    this.Description = description;
    this.Priority = priority;
  }

}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: TodoListView[] = [
    new TodoListView('Wakeup', 'Low'),
    new TodoListView('Walking', 'Medium'),
    new TodoListView('Running', 'High'),
    new TodoListView('Breakfast', 'Medium'),
    new TodoListView('School', 'High'),
    new TodoListView('Study', 'High'),
    new TodoListView('Entertainment', 'High')
  ];

  constructor() {
  }

  ngOnInit() {

  }
}

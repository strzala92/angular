import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos:Todo[];


  constructor(private todoService:TodoService) { }

  ngOnInit() {
   this.todoService.getTodos().subscribe(todos => {
     this.todos = todos;
   });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos:any[];

  constructor(
    public firebaseService:FireService
    
    ) { }

  ngOnInit() {
    this.getData();
    console.log(this.todos)
  }

  getData(){
    this.firebaseService.getTasks().subscribe(result => {
      result.map(e =>{ 
        const id = e.payload.doc.id;
        const data = e.payload.doc.data();
        this.todos = [{id , ...data}]
      })
    });
  }

}

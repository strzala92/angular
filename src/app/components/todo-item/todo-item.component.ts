import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { FireService } from '../../services/fire.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo : Todo;
  constructor(private firebaseService:FireService) { }
  

  ngOnInit() {
  }

  setClasses(){
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    }
    return classes;
  }
  onToggle(todo){
     this.firebaseService.addTask({'title':'asd','completed':true })
   
    
    console.log(todo)
  }


}

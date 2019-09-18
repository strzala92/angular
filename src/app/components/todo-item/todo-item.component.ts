import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FireService } from '../../services/fire.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Output() removeTodo = new EventEmitter<any>();
  @Input() todo : any;

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
     this.firebaseService.createTask('Title');
  }
  
  remove(todo): void {
    this.removeTodo.emit(todo.payload.doc.id);
  }



}

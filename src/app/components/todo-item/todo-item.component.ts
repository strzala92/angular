import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Output()
  removeTodo = new EventEmitter<any>();
  @Output()
  toggleTodo = new EventEmitter<any>();
  @Input() todo : any; 

  constructor() { }

  ngOnInit() {
  }

  setClasses(){
    let classes = {
      todo: true,
      'is-completed': this.todo.payload.doc.data().completed
    }
    return classes;
  }
  onToggle(todo){
      this.toggleTodo.emit(todo);
  }

  remove(todo): void {
    this.removeTodo.emit(todo.payload.doc.id);
  }



}

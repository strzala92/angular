import { Component, OnInit, Input } from '@angular/core';
import { FireService } from 'src/app/services/fire.service';
import { Router, Params } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos:any[];
  exampleForm: FormGroup;

  validation_messages = {
    'title': [
      { type: 'required', message: 'Title is required.' }
    ]
  };

  constructor(
    private firebaseService:FireService,
    private router: Router,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.createForm();
    this.getData();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      title: ['', Validators.required ],
    });
  }
  resetFields(){
    this.exampleForm = this.fb.group({
      title: new FormControl('', Validators.required),
    });
  }

  getData(){
    this.firebaseService.getTasks().subscribe(
      result => {
      this.todos = result;
    });
  }

  onSubmit(value){
    console.log(value)
    this.firebaseService.createTask(value)
    .then(
      res => {
        this.resetFields();
        this.getData();
      }
    )
  }
  removeTodo(todo) {
    this.firebaseService.deleteTask(todo).then(
      res => {this.getData();}
    )
  }

}

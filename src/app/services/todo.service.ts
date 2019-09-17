import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

  
@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit_5';

  constructor(private http: HttpClient) { }

  getTodos(){
   
  }
  toggleCompleted(todo:Todo){
 
  }
}

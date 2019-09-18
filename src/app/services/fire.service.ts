import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireService {
  
  constructor(
    public db: AngularFirestore,
    ) { }
    todoCollectionRef: AngularFirestoreCollection<any>;
    todo$: Observable<any>;


updateTask(todoKey, value){
  const valuenew ={
    'title':value.title,
    'completed':!value.completed
  }
  return this.db.collection('tasks').doc(todoKey).set(valuenew);
}

deleteTask(todoKey){
  return this.db.collection('tasks').doc(todoKey).delete();
}

getTasks(){
  return this.db.collection('tasks').snapshotChanges();
}

createTask(value){
  return this.db.collection('tasks').add({
    title: value.title,
    completed: false,
  });
}
}

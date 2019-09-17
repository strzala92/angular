import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class FireService {
  
  constructor(
    public db: AngularFirestore,
    ) { }
    todoCollectionRef: AngularFirestoreCollection<any>;
    todo$: Observable<any>;
  getTasks(){
    return this.db.collection('tasks').snapshotChanges();
}


  addTask(title){
   this.db.collection('tasks').add(title);
}
}

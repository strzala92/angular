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

//   getTasks(){
//     return this.db.collection('tasks').snapshotChanges();
// }


getTask(userKey){
  return this.db.collection('tasks').doc(userKey).snapshotChanges();
}

updateTask(userKey, value){
  value.titleToSearch = value.title.toLowerCase();
  return this.db.collection('tasks').doc(userKey).set(value);
}

deleteTask(userKey){
  return this.db.collection('tasks').doc(userKey).delete();
}

getTasks(){
  return this.db.collection('tasks').snapshotChanges();
}

searchTask(searchValue){
  return this.db.collection('tasks',ref => ref.where('title', '>=', searchValue)
    .where('title', '<=', searchValue + '\uf8ff'))
    .snapshotChanges()
}

createTask(value){
  return this.db.collection('tasks').add({
    title: value.title,
    completed: false,
  });
}
}

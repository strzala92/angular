import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(public db: AngularFirestore) { }

  getAvatars(){
   console.log(this.db)
}
}

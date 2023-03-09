import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {
userCollection : AngularFirestoreCollection <User>;

  constructor(private afs: AngularFirestore) {
  //   this.Users =  this.afs.collection('one').snapshotChanges().map( changes => {

  //   })
  this.userCollection = this.afs.collection('one');
  }
  getAlluser() {
    return this.afs.collection('one').snapshotChanges();
  }
  addusers(user:User){
    
    this.afs.collection('one').add(user)
    .then(() => {
      console.log('Document added successfully');
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    }); 
  }
  delete(user: User) {
    this.afs.collection('one').doc(user.phone.value).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
 }
}

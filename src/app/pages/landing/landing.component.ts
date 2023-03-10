import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user.model';
import { DataService } from 'src/app/Services/data.service';
import { duplicateNameValidator } from 'src/app/shared/duplicateNameValidator';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {
  user :User ={
    id : '',
    firstName: '',
    lastName: '',
    phone: '',
    Time: '',
    date: '',
  } ;
  errors: any = [];
  selectedDate ?: string;
  constructor( private afs: AngularFirestore , private data : DataService) { }
    profileForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]),
      time: new FormControl('', [
        Validators.required,
      ]),
      userDate: new FormControl('', [
        Validators.required,
      ]),
      
    },
    
    { validators: duplicateNameValidator });
  ngOnInit() {
    this.selectedDate = new Date().toISOString().split('T')[0];
  }
  getSelectedValue(value :any){
    this.user.Time=value;
  }
  onSubmit(){
    this.user.firstName=this.profileForm.get('firstName')?.value;
    this.user.lastName=this.profileForm.get('lastName')?.value;
    this.user.phone=this.profileForm.get('phone')?.value;
    this.user.date=this.selectedDate;
    if(window.confirm("انت بحاجة الى دفع عربون لتاكيد الحجز اما عن طريق حوالة بنكية انت كنت من اهل نابلس بامكانك التواصل معنا لدفع العربون نقدا وشكرا")){
    this.data.addusers(this.user);
    this.profileForm.reset();}
    }
}

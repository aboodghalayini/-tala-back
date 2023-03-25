import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user.model';
import { DataService } from 'src/app/Services/data.service';
import { duplicateNameValidator } from 'src/app/shared/duplicateNameValidator';

@Component({
  selector: 'app-dashpord',
  templateUrl: './dashpord.component.html',
  styleUrls: ['./dashpord.component.css']
})
export class DashpordComponent {
  add : boolean = false;
  updatedata : boolean = false;
  user :User ={
    id : '',
    firstName: '',
    lastName: '',
    phone: '',
    Time: '',
    date: '',
    status: '',
    done: false,
  } ;
  doneee: boolean=false;
  users: User[] = [];
  errors: any = [];
  selectedDate : string = '';
  status : string | number = '' ;
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
    status: new FormControl('', [
      Validators.required,
    ]),
    userDate: new FormControl('', [
      Validators.required,
    ]),
    
  },
  
  { validators: duplicateNameValidator });
  list?:User[] ;
  addu(){
    this.add =true;
  }
  constructor(private Data:DataService ){}
  ngOnInit(){
    this.getdata();

  }
  getdata(){
    this.Data.getAlluser().subscribe(res => {
      this.list = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data
      })
    })
  }
  delet(user: User){
    if(window.confirm('هل انت متاكد بالغاء الحجز ل ' + user.firstName + ' ? ')) {
      this.Data.delete(user);
    }
    this.getdata();
  }
  
  getSelectedValue(value :any){
    this.user.Time=value;
  }
  getSelectedValuestatus(value :any){
    this.user.status=value;
  }
  onSubmit(){
    this.user.firstName=this.profileForm.get('firstName')?.value;
    this.user.lastName=this.profileForm.get('lastName')?.value;
    this.user.phone=this.profileForm.get('phone')?.value;
    this.user.done=this.doneee;
    this.user.date=this.selectedDate;
    for (var i=0;i<this.users.length;i++){
       if (this.user.Time == 12){
        if(this.users[i].date==this.user.date){
          if(this.users[i].status==this.user.status){
         window.confirm(" !هذا التاريخ محجوز اختر تاريخ اخر");
         this.profileForm.reset();
         return;
       }
      }
    }
     if(this.users[i].date==this.user.date){
       window.confirm(" !هذا التاريخ محجوز اختر تاريخ اخر");
       this.profileForm.reset();
       return;
    }
  }
    if(window.confirm("انت بحاجة الى دفع عربون لتاكيد الحجز اما عن طريق حوالة بنكية انت كنت من اهل نابلس بامكانك التواصل معنا لدفع العربون نقدا وشكرا")){
    this.Data.addusers(this.user);
    }
    this.profileForm.reset();
    }
    donedel(user : User) {
      user.done=true;
      this.Data.update(user);
    }
}

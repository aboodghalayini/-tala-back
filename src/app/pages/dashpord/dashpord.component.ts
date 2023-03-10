import { Component } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-dashpord',
  templateUrl: './dashpord.component.html',
  styleUrls: ['./dashpord.component.css']
})
export class DashpordComponent {
  list?:User[] ;
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
      console.log(user.id);
    }
    this.getdata();
  }
}

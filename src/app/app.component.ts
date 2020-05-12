import { Details } from './details';
import { HttpClient } from '@angular/common/http';

import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpservice';
  data;
  id1:number;
  first1:string;
  last1:string;
  email1:string;
  phone1:string;
  index:number;
  
  url="http://localhost:3000/Abc"
  constructor(private http:HttpClient){
    this.http.get(this.url).subscribe((res:Details[])=>{
     this.data=res
   
    })
  }
  ondelete(obj){
    this.http.delete(this.url +"/"+obj.id).subscribe(res=>{
      let index=this.data.indexOf(obj)
      this.data.splice(index,1)
    })
  }
  onsubmit(dat){
    let newData=dat.value
    this.http.post(this.url,newData).subscribe(res=>{
      this.data.push(newData)
      dat.reset()
    })
  }
  onupdate(d){
    this.id1=d.id;
    this.first1=d.first;
    this.last1=d.last;
    this.email1=d.email;
    this.phone1=d.phone;
    this.index=this.data.indexOf(d)
    

  }
  onedit(dat1){
    let modifiedData=dat1.value
    this.http.put(this.url+"/"+this.id1,modifiedData).subscribe(res=>{
      this.data[this.index]=modifiedData
      dat1.reset()
    })
  }

}

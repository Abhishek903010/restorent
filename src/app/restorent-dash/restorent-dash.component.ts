import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { RestaurentModule } from '../restaurent/restaurent.module';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-restorent-dash',
  templateUrl: './restorent-dash.component.html',
  styleUrls: ['./restorent-dash.component.css']
})
export class RestorentDashComponent implements OnInit {
  
  showAdd!:boolean;
  showbtn!:boolean;
  formValue!:FormGroup
  restaurentModelObj: RestaurentModule=new RestaurentModule; 
  allRestaurantData: any;
  constructor(private formBuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue= this.formBuilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      address:[''],
      services:['']
    })
   this.getAllData();
  }
  clickAddResto(){
    this.formValue.reset();
    this.showAdd=true;
    this.showbtn=false;
  }
  addResto(){
this.restaurentModelObj.name=this.formValue.value.name;    
this.restaurentModelObj.email=this.formValue.value.email;    
this.restaurentModelObj.mobile=this.formValue.value.mobile;
this.restaurentModelObj.address=this.formValue.value.address;
this.restaurentModelObj.services=this.formValue.value.services;    

this.api.postRestaurant(this.restaurentModelObj).subscribe(res=>{
  
  alert("Restaurant Record Added Successfull 00");
  //clear fill form data
  let ref = document.getElementById('clear');
  ref?.click();

  this.formValue.reset();
  this.getAllData()
},
err=>{
  alert("something wrong")
}
)
}
getAllData(){
  this.api.getRestaurant().subscribe(res=>{
    this.allRestaurantData=res;
    
  })
}
deleteResto(data:any){
  this.api.DeletRestaurant(data.id).subscribe(res=>{
  alert("record deleted successfully")
  this.getAllData();
  })
}
onEditResto(data:any){
  this.showAdd=false;
  this.showbtn=true;
  this.restaurentModelObj.id=data.id;
  this.formValue.controls['name'].setValue(data.name);
  this.formValue.controls['email'].setValue(data.email);
  this.formValue.controls['mobile'].setValue(data.mobile);
  this.formValue.controls['address'].setValue(data.address);
  this.formValue.controls['services'].setValue(data.services);
}
updateResto()
{
  this.restaurentModelObj.name=this.formValue.value.name;    
this.restaurentModelObj.email=this.formValue.value.email;    
this.restaurentModelObj.mobile=this.formValue.value.mobile;
this.restaurentModelObj.address=this.formValue.value.address;
this.restaurentModelObj.services=this.formValue.value.services;  
this.api.UpdateRestaurant(this.restaurentModelObj,this.restaurentModelObj.id).subscribe(res=>{
  alert("Restaurant Records Update")
   //clear fill form data
   let ref = document.getElementById('clear');
   ref?.click();
 
   this.formValue.reset();
   this.getAllData();
})

}

}



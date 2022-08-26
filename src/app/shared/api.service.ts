import { Injectable } from '@angular/core';
import{ HttpClient}from '@angular/common/http'
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  //create Reatautant using Post Method 
  postRestaurant(data:any){
    return this._http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
      return
    }))
  }
  //get restaurant data using Get Method
  getRestaurant(){
    return this._http.get<any>("http://localhost:3000/posts")
  }
  //Update Restaurant using Put method
  UpdateRestaurant(data:any,id:number){
    return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
      return res
    }))
  }
   //Delet Restaurant using Put method
   DeletRestaurant(id:number){
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
} 

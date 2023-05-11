import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ContactSchema } from 'src/models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  //BASE_URL='http://localhost:3000'
  //change base url with the one from render
  BASE_URL='https://contact-app-angular.onrender.com'

  
  constructor(private http:HttpClient) { }
   
  //handle error
  handleError(error:HttpErrorResponse){
    let errorMsg:string=''
    if(error.error){
      errorMsg=`Error: ${error.message}`
    }
    else{
      errorMsg=`Status:${error.status} \n Error: ${error.message}`
    }
    return throwError(()=>errorMsg)
  }
  
  //get all contacts 
  getAllContacts(){
    //api call : url = http://localhost:3000/contacts req: get
    return this.http.get(`${this.BASE_URL}/contacts`)
  }

  //view a contact
  viewcontact(id:any){
    //api call : url = http://localhost:3000/contacts/cal1 req: get
    return this.http.get(`${this.BASE_URL}/contacts/${id}`)
  }

  //get a particular group
  getGroup(id:any){
    //api call : url = http://localhost:3000/groups/3 req: get
    return this.http.get(`${this.BASE_URL}/groups/${id}`)
  }

   //get all groups
   getGroups(){
    //api call : url = http://localhost:3000/groups
    return this.http.get(`${this.BASE_URL}/groups`)
  }

  //add contact 
  addContact(contact:ContactSchema){
    //api call : post
    return this.http.post(`${this.BASE_URL}/contacts`,contact)
  }

  //delete contact
  deleteContact(id:any){
    //api call
    return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
  }

  //edit a contact
  editContact(id:any,contact:ContactSchema){
    //api call
    return this.http.put(`${this.BASE_URL}/contacts/${id}`,contact)
  }
}

export class ContactSchema{
    //id:string show error bcz id not initialized.if we dont know value then put'?' to say if id present then do this
    id?:string
    name?:string
    photo?:any
    email?:string
    mobile?:string
    company?:string
    title?:string
    group?:string  
    groupId?:string
}
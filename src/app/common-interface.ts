import { Routes } from "@angular/router";
 import { AdminComponent } from "./admin/admin.component";

  export  interface CommonNews {
    title: string;
    content: string;
    shortContent: string;
    image: string;
    alt: string;
    time: string;
    code: string;
  }
 
  export class User {
  
  constructor(public username?:string, public password?: string){}
  
}


export const appRouter: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  },
]
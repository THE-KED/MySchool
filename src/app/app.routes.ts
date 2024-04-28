import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";

export const routes: Routes = [
  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full",
  },
  {
    title:"Home",
    path:"home",
    children:[
      {
        title:"landing",
        path:"",
        component:LandingPageComponent,
      }
    ],
  }
];

import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {FooterComponent} from "./footer/footer.component";
import {AuthFormComponent} from "../AuthModule/auth-form/auth-form.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    ButtonModule,
    FooterComponent,
    AuthFormComponent,
    CommonModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  openForm:boolean = false;
  hadAccount:Boolean = true;

  openAuthForm() {
    this.openForm=true;
  }

  closeModal($event: boolean) {
    this.openForm=false;
  }
  changeForm($event:Boolean){
    this.hadAccount=$event;
  }
}

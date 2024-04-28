import {Component, EventEmitter, Output} from '@angular/core';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {DividerModule} from "primeng/divider";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    PasswordModule,
    DividerModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  @Output()
  closeEvent = new EventEmitter<Boolean>();
  @Output()
  changeFormEvent = new EventEmitter<Boolean>();

  closeModal() {
    this.closeEvent.emit(false);
  }

  changeFormModal() {
    this.changeFormEvent.emit(false);
  }
}

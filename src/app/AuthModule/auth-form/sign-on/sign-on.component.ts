import {Component, EventEmitter, Output} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {InputGroupModule} from "primeng/inputgroup";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {SharedModule} from "primeng/api";

@Component({
  selector: 'app-sign-on',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    InputGroupAddonModule,
    InputGroupModule,
    InputTextModule,
    PasswordModule,
    SharedModule
  ],
  templateUrl: './sign-on.component.html',
  styleUrl: './sign-on.component.scss'
})
export class SignOnComponent {

  @Output()
  closeEvent = new EventEmitter<Boolean>();
  closeModal() {
    this.closeEvent.emit(false);
  }

  @Output()
  changeFormEvent = new EventEmitter<Boolean>();
  changeFormModal() {
    this.changeFormEvent.emit(true);
  }
}

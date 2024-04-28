import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {DividerModule} from "primeng/divider";

@Component({
  selector: 'app-footer',
  standalone: true,
    imports: [
        ButtonModule,
        DividerModule
    ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}

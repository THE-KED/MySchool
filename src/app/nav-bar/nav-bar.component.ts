import {Component, OnInit} from '@angular/core';
import {SplitButtonModule} from "primeng/splitbutton";
import {ToolbarModule} from "primeng/toolbar";
import {MenuItem} from "primeng/api";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    SplitButtonModule,
    ToolbarModule,
    InputTextModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{


  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Delete',
        icon: 'pi pi-times'
      }
    ];
  }

}

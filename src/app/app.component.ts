import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {ButtonModule} from "primeng/button";
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";

@Component({
  selector: 'app-root',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, RouterOutlet, NavBarComponent, ButtonModule, CarouselModule, TagModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'MySchool';
  products: any[]=[1,2,3,4,5,6];
  responsiveOptions: any[] | undefined;
  constructor() {
  }
  ngOnInit() {

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

}

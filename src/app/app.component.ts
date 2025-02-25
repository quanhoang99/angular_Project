import {Component} from '@angular/core';
import {HeaderComponent} from "./component/header.component";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_Project';
  myStyle = {
    'background-image': 'linear-gradient(to right, #d434b0, #8029fc)',
    // 'height': 'calc(100vh - 70px)',
  }
}

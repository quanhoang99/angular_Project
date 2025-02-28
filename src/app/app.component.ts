import {Component} from '@angular/core';
import {HeaderComponent} from "./component/header/header.component";
import {NgStyle} from "@angular/common";
import {MatGridListModule} from '@angular/material/grid-list';
import { ContentLeftComponent } from './component/content/contentLeft.component';
import { ContentRightComponent } from './component/content/contentRight.component';

const componentImports = [HeaderComponent, NgStyle, MatGridListModule, ContentLeftComponent,ContentRightComponent];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [componentImports],
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

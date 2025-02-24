import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import {MatIcon} from "@angular/material/icon";

const MaterialComponent = [
  MatSliderModule,
  MatDividerModule,
  MatIcon
]
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [MaterialComponent, MatIcon],
  standalone: true,
})
export class HeaderComponent {
  title: string = 'Header';
}

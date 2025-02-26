import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';
import {MatIcon} from "@angular/material/icon";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";

const MaterialComponent = [
  MatSliderModule,
  MatDividerModule,
  MatIcon,
  MatInputModule,
  MatFormFieldModule,
  MatIconButton,
  MatGridListModule,
]

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [MaterialComponent, MatButton],
  standalone: true,
})
export class HeaderComponent {
  title: string = 'Header';
}

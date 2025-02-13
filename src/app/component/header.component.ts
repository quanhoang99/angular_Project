import {Component} from "@angular/core";
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [
    // MatIcon
    MatSliderModule
  ],
  standalone: true
})
export class HeaderComponent {
  title:string='Header'
}

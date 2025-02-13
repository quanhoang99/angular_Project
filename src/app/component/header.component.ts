import {Component} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [
    // MatIcon
  ],
  standalone: true
})
export class HeaderComponent {
  title:string='Header'
}

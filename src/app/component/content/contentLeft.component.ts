import {Component} from "@angular/core";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: "content-left",
  standalone: true,
  templateUrl: "./contentLeft.component.html",
  styleUrl: "./contentLeft.component.css",
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule],
})
export class ContentLeftComponent {
  title = "angular_Project";
  myStyle = {
    "background-image": "linear-gradient(to right, #d434b0, #8029fc)"
    // 'height': 'calc(100vh - 70px)',
  };

  getInputValue(inputEl: HTMLInputElement) {
    console.log('Input value:', inputEl.value);
    // You can do more with the value here
  }
}

import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'test-app',
  standalone: true,
  templateUrl: './test.component.html',
  imports: [
    FormsModule
  ]
})
export class TestComponent {
  nameBtn = 'Click me!';
  clickMessage = '';
  bindingMessage: string = '';

  onClick(): void {
    this.clickMessage = 'Hello World!';
  }
}

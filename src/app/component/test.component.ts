import {Component} from "@angular/core";

@Component({
  selector:'test-app',
  standalone:true,
  templateUrl:'./test.component.html',
})
export class TestComponent{
  nameBtn='Click me!';
  clickMessage='';
  onClick():void{
    this.clickMessage='Hello World!';
  }
}

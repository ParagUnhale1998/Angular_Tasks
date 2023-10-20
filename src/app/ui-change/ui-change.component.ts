import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-change',
  templateUrl: './ui-change.component.html',
  styleUrls: ['./ui-change.component.scss']
})
export class UIChangeComponent {
  
  showCircle : boolean = false
  showSquare : boolean = false

  addCircle(){
    this.showCircle = !this.showCircle
  }
  addSquare(){
    this.showSquare = !this.showSquare

  }
}

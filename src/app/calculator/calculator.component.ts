import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  display = "";

  onButtonClick(value: string): void {
    if (value === "=") {
      if (this.display === "") {
        this.display = "No value to display";
        setTimeout(() => {
          this.display = "";
        }, 500);
      } else {
        this.display = eval(this.display);
      }
    } else if (value === "AC") {
      this.display = "";
    } else if (value === "DE") {
      this.display = this.display.slice(0, -1);
    } else {
      this.display += value;
    }
  }

  
}

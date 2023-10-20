import { Component } from '@angular/core';

interface Circle {
  selected: boolean;
}

@Component({
  selector: 'app-add-circle-task',
  templateUrl: './add-circle-task.component.html',
  styleUrls: ['./add-circle-task.component.scss']
})
export class AddCircleTaskComponent {
  circles: Circle[] = [];
  showCircle = false;

  addCircle(): void {
    console.log(this.circles)
    const newCircle: Circle = { selected: false };
    this.circles.push(newCircle);
  }

  toggleCircleSelection(index: number): void {
    this.circles[index].selected = !this.circles[index].selected;
  }

  getSelectedCircleCount(): number {
    return this.circles.filter(circle => circle.selected).length;
  }
}

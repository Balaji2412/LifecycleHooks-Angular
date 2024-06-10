import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  title: string = 'exercise_2';
  titles: string[] = [];
  disabledHeader:Boolean = false;
  Addtoarray(): void {
    this.titles.push(this.title);
  }
ngDoCheck(): void {
  //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //Add 'implements DoCheck' to the class.

}
}

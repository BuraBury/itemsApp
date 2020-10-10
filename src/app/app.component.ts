import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public items: string[] = [];
  public itemForm = new FormGroup({
    itemName: new FormControl('')
  });

  public onSubmit(): void {
    this.items.push(this.itemForm.value.itemName);
    this.itemForm.setValue({
      itemName: ''
    });
  }
}

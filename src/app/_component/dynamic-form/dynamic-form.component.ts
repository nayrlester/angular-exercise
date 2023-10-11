import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {
  data: {
    menus: { id: string, value: string }[][];
    rules: { [key: number]: number[] };
  } = {
    menus: [
      [
        { id: '101', value: 'Vegetarian' },
        { id: '102', value: 'Nut allergy' },
        { id: '103', value: 'Halal' }
      ],
      [
        { id: '201', value: 'Cashew chicken' },
        { id: '202', value: 'Sweet and sour pork' },
        { id: '203', value: 'Stir fried Tofu' },
        { id: '204', value: 'Vegetable fried rice' },
        { id: '205', value: 'Pad Thai' },
        { id: '206', value: 'Massaman beef' },
      ],
      [
        { id: '301', value: 'Peanut sauce' },
        { id: '302', value: 'Oyster sauce' },
        { id: '303', value: 'Vegetable spring rolls' },
        { id: '304', value: 'Steamed rice' },
      ],
    ],
    rules: {
      101: [201, 202, 206, 302],
      102: [201, 301],
      103: [202],
      204: [304],
      205: [304]
    }
  };

  selectedOptions: string[] = [];
  menuGroupTitles: string[] = ["Select dietary preference:", "Select main course:", "Select side dishes:"];

  isFormValid(): boolean {
    for (let i = 0; i < this.selectedOptions.length; i++) {
      const selectedID = parseInt(this.selectedOptions[i]);
      const item: number[] | undefined = this.data.rules[selectedID];
      if (item) {
        for (let j = 0; j < item.length; j++) {
          if (this.selectedOptions.indexOf(item[j].toString()) > -1) {
            return false;
          }
        }
      }
    }
    return true;
  }

  submitForm() {
    if (this.isFormValid()) {
      alert('Form submitted successfully!');
      console.log(this.selectedOptions)
    } else {
      alert('Please select valid options from all groups.');
      console.log(this.selectedOptions)
    }
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {
  title = 'PaymentForm';
  name!: string;
  date!: string;
  amount!:number;
  miles!: number;
  

  onInputName(value: string){
    this.name = value;
  }

  onDateChange(value:string){
    this.date = value;
  }

  onAmountChange(value:string){
    this.amount = parseFloat(value);
  }

  onMilesChange(value:string){
    this.miles = parseFloat(value);
  }
}

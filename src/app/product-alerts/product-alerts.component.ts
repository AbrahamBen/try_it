import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from "../products";

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input('product')product!:Product;
  @Output('notify')notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onNotiFy(){
    window.alert('You will be notified when the product goes on sale')
  }

}

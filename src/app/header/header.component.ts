import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../service/currency-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private currrencyService: CurrencyService) { }

  ngOnInit() {
  }

  select(item: any) {
    this.currrencyService.setBaseValue(item);
  }

}

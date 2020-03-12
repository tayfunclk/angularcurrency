import { Component } from '@angular/core';
import { CurrencyService } from '../service/currency-service';
import { CurrencyModal, HistoryResp, Rates, Money } from '../model/currencymodal';

@Component({
  selector: 'app-my-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})



export class MainComponent {
  money: Money[];
  selectedBase: String;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {

    this.currencyService.getBaseValue().subscribe((value) => {
      this.selectedBase = value;
      this.checkIsIncreased();
    });

  }

  goToChart() { }

  checkIsIncreased() {

    this.currencyService.getHistoryWithBase(this.selectedBase, this.currencyService.menuItems).subscribe((data: any) => {

      let res: HistoryResp = new HistoryResp();
      res.base = data.base;
      res.start_at = new Date(data.start_at);
      res.end_at = new Date(data.end_at);
      res.rates = [];

      for (let value of Object.entries(data.rates)) {

        let rates: Rates = new Rates();
        rates.date = new Date(value[0]);
        rates.money = [];

        for (let [k, v] of Object.entries(value[1])) {

          let money: Money = new Money();
          money.key = k;
          money.value = v;
          rates.money.push(money);
        }
        res.rates.push(rates);
      }

      console.log(data);
      const sortedActivities = res.rates.sort((a, b) => b.date.getTime() - a.date.getTime());
      console.log(sortedActivities);
      sortedActivities[0].money.forEach(item => {
        sortedActivities[1].money.forEach(inner => {
          if (item.key == inner.key) {
            item.increament = item.value - inner.value;
            console.log("increament" + item.increament);
          }
        });
      });
      this.money = sortedActivities[0].money;

    }, err => {
      console.log(err);
    });
  }

}

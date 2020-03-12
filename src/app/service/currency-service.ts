import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { CurrencyModal } from '../model/currencymodal';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  menuItems: any = ['USD', 'GBP', 'CZK', 'TRY'];
  private selectedBase: BehaviorSubject<String>;

  constructor(private http: HttpClient) {
    this.selectedBase = new BehaviorSubject<String>("USD");

  }

  getBaseValue(): Observable<String> {
    return this.selectedBase.asObservable();
  }
  setBaseValue(newBaseValue): void {
    this.selectedBase.next(newBaseValue);
  }

  getCurrency(): Observable<CurrencyModal[]> {
    return this.http.get<CurrencyModal[]>(environment.baseUr + "/latest?symbols=USD,GBP")
      .pipe(
        catchError(this.handleError<CurrencyModal[]>('getCurrency', []))
      );
  }

  //history?start_at=2020-01-01&end_at=2020-01-05&base=EUR&symbols=USD,GBP,TRY,CZK
  getHistoryWithBase(base: String, items: String[]): Observable<any> {
    var endUrl = "";

    if (!!base) {
      endUrl = endUrl + "&base=" + base;
    }
    if (!!items) {
      endUrl = endUrl + "&symbols=" + items.join();
    }

    return this.http.get<any>(environment.baseUr + "/history?start_at=2020-01-01&end_at=2020-01-05" + endUrl)
      .pipe(
        catchError(this.handleError<any>('getHistoryWithBase'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent implements OnInit {
  selectedButtons: any = {
    left: false,
    middle: true,
    right: false
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  select(val: number) {
    if (val == 1) {
      this.selectedButtons.left = true;
      this.selectedButtons.middle = false;
      this.selectedButtons.right = false;
      this.router.navigate(['/main']);

      //this.router.navigate(['/table'], { queryParams: { page: 1 } });
    } else if (val == 2) {
      this.selectedButtons.left = false;
      this.selectedButtons.middle = true;
      this.selectedButtons.right = false;
      this.router.navigate(['/table']);
    } else if (val == 3) {
      this.selectedButtons.left = false;
      this.selectedButtons.middle = false;
      this.selectedButtons.right = true;
      this.router.navigate(['/top5']);

    }
  }

}

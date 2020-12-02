import { Component, OnInit } from '@angular/core';
import { GiftItem } from 'src/app/models';

@Component({
  selector: 'app-gift-giving',
  templateUrl: './gift-giving.component.html',
  styleUrls: ['./gift-giving.component.scss']
})
export class GiftGivingComponent implements OnInit {

  data: GiftItem[] = [
    { for: 'Amy', holiday: 'Christmas', suggestions: 'Books and Movies' },
    { for: 'Sean', holiday: 'Kwanzaa', suggestions: 'Meat things' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

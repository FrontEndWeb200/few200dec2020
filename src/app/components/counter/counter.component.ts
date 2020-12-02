import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$!: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.count$ = this.store.select(s => s.counter.count);
  }

  increment(): void {
    this.store.dispatch({ type: 'increment' });
  }

  decrement(): void {
    this.store.dispatch({ type: 'decrement' });
  }

  reset(): void {
    this.store.dispatch({ type: 'reset' });
  }


}



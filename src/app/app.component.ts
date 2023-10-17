import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { action } from './+state/action';
import { selectPersonData } from './+state/select';
import { datas } from './+state/state';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  index = -1;
  datas: datas[] = [];
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.selectData();

    interval(2000).subscribe(() => {
      this.onScrollLoadData();
    });
  }
  dispatchAction() {
    this.store.dispatch(action.initFetchData({ index: this.index }));
  }
  selectData() {
    this.store.select(selectPersonData).subscribe((res: datas[]) => {
      this.datas = res;
    });
  }
  onScrollLoadData() {
    this.index++;
    this.store.dispatch(action.initFetchData({ index: this.index }));
  }
}

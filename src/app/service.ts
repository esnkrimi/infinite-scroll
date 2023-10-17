import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private httpClient: HttpClient) {}
  fetch(index: number) {
    return this.httpClient
      .get('../assets/data.json')
      .pipe(map((x: any) => x.slice(index * 4 + 1, index * 4 + 5)));
  }
}

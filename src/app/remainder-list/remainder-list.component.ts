import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remainder-list',
  templateUrl: './remainder-list.component.html',
  styleUrls: ['./remainder-list.component.css'],
})
export class RemainderListComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.data = await this.http
      .get('http://localhost:3000/get-all')
      .toPromise();
  }
}

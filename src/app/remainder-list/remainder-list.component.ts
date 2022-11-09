import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remainder-list',
  templateUrl: './remainder-list.component.html',
  styleUrls: ['./remainder-list.component.css'],
})
export class RemainderListComponent implements OnInit {
  data = [
    { time: '5AM', activity: 'Wake-UP' },
    { time: '6AM', activity: 'Jogging' },
    { time: '7AM', activity: 'Breakfast' },
    { time: '8AM', activity: 'GoToCollege' },
  ];
  constructor() {}

  ngOnInit(): void {}
}

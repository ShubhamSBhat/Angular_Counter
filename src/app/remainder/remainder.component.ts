import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.css'],
})
export class RemainderComponent implements OnInit {
  @Input() time: string = '';
  @Input() activity: string = '';
  constructor() {}

  ngOnInit(): void {}
}

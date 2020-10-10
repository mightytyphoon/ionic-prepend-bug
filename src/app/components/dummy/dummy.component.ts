import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
})
export class DummyComponent implements OnInit {

  public color: string;
  public number: number;

  constructor() {
    this.color = '#81d4fa';
  }

  ngOnInit() {}

  public setNumber(number: number) {
    this.number = number;
  }

}

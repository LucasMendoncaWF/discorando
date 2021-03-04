import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apoiadores',
  templateUrl: './apoiadores.component.html',
  styleUrls: ['./apoiadores.component.scss']
})
export class ApoiadoresComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}

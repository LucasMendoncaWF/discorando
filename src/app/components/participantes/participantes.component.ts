import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.scss']
})
export class ParticipantesComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}

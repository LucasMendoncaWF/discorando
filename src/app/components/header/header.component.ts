import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  anchorOffset = 10;
  showMenu = false;

  links = [
    {title: 'Apoiadores', url: '#apoiadoresArea', target: '_self'},
    {title: 'Episódios', url: '#epsArea', target: '_self'},
    {title: 'Participantes', url: '#participantesArea', target: '_self'},
    {title: 'Discord', url: 'https://discord.gg/vfh6xYAz6k', target: '_blank'},
    {title: 'Youtube', url: 'https://www.youtube.com/channel/UCV16n6udG9hUiXz4HRj_SuA', target: '_blank'},
    {title: 'Twitter', url: 'https://twitter.com/DiscordandoShow', target: '_blank'}
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleShow() {
    this.showMenu = !this.showMenu;
  }

}

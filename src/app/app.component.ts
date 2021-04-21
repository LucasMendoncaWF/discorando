import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'discordando';
  apoiadores = [
    {
      url: 'www.apoiado.com',
      nome: 'Apoiador Exemplo 1',
      img: '/assets/logos/apoiador 1.png',
    },
    {
      url: 'www.apoiado.com',
      nome: 'Apoiador Exemplo 2',
      img: '/assets/logos/apoiador 2.png',
    },
    {
      url: 'www.apoiado.com',
      nome: 'Apoiador Exemplo 3',
      img: '/assets/logos/apoiador 3.png',
    },
  ];

  participantes = [
    {
      title: 'WFX',
      personagem: 'Márcio Pereira',
      url: 'www.youtube.com/channel/UCV16n6udG9hUiXz4HRj_SuA',
      img: '/assets/avatars/wfx.png'
    },
    {
      title: 'Lucsfdf',
      personagem: 'Edson Pereira',
      url: 'www.twitch.tv/lucsfdf',
      img: '/assets/avatars/lucs.png'
    },
    {
      title: 'Fred',
      personagem: 'Fernando Fernandes',
      url: 'www.twitch.tv/fredfp',
      img: '/assets/avatars/fred.png'
    },
    {
      title: 'Muralhakun',
      personagem: 'Rafael Rocha',
      url: 'www.twitch.tv/muralhakun',
      img: '/assets/avatars/mk.png'
    },
    
    {
      title: 'Akkai',
      personagem: 'Adam Martin',
      url: 'www.twitch.tv/akkaiverso',
      img: '/assets/avatars/akkai.png'
    },
    {
      title: 'Boysleep',
      personagem: 'William Boyner',
      url: 'www.twitch.tv/boysleep',
      img: '/assets/avatars/boysleep.png'
    },
    {
      title: 'Suprema',
      personagem: 'Fernanda Píres',
      url: 'www.twitch.tv/supr3m4a',
      img: '/assets/avatars/suprema.png'
    },
    {
      title: 'Falarafaa',
      personagem: 'Fausto Ferreira',
      url: 'www.twitch.tv/falarafaa',
      img: '/assets/avatars/falarafaa.png'
    },
    {
      title: 'DX',
      personagem: 'Valderlei Pereira',
      url: 'www.twitch.tv/dx___',
      img: '/assets/avatars/dx.png'
    },
    {
      title: 'Cadeira',
      personagem: 'Vinicios Lima',
      url: 'www.twitch.tv/cadeirademacarraoo',
      img: '/assets/avatars/cadeira.png'
    },
    {
      title: 'Gamer30Mais',
      personagem: 'João Paulo Santos',
      url: 'www.twitch.tv/gamer30mais',
      img: '/assets/avatars/gamer30.png'
    },
    {
      title: 'Guiel',
      personagem: 'Biel TuruTel',
      url: 'www.twitch.tv/guielzito',
      img: '/assets/avatars/guiel.png'
    },
    {
      title: 'Iryiella',
      personagem: 'Júlia Costa',
      url: 'www.twitch.tv/iryiella',
      img: '/assets/avatars/iriela.png'
    },
    {
      title: 'Geo',
      personagem: 'Jasmin Andrade',
      url: 'https://www.twitch.tv/ggbarros_',
      img: '/assets/avatars/ggbarros.png'
    },
    {
      title: 'Muguerso',
      personagem: 'Julho Fenomeno',
      url: 'www.twitch.tv/muguerso',
      img: '/assets/avatars/muga.png'
    },
    {
      title: 'NerdVelhoNerd',
      personagem: 'Eduardo Karate',
      url: 'www.twitch.tv/nerdvelhonerd',
      img: '/assets/avatars/nerdvelho.png'
    },
    {
      title: 'Tatyilana',
      personagem: 'Patrícia Martins',
      url: 'www.twitch.tv/tatyilana',
      img: '/assets/avatars/taty.png'
    },
    {
      title: 'Webeijo',
      personagem: 'PietroVlogs',
      url: 'www.twitch.tv/webbeijo',
      img: '/assets/avatars/webeijo.png'
    },
    {
      title: 'Baixinha',
      personagem: 'Maria Gonçalves',
      url: 'www.twitch.tv/Baixinha',
      img: '/assets/avatars/baixinha.png'
    },
    {
      title: 'RickCintra',
      personagem: 'Felipe Gomes/Hacker',
      url: 'https://www.twitch.tv/rickcintra',
      img: '/assets/avatars/rick.png'
    },
    {
      title: 'Deivao',
      personagem: 'Guilherme Oliveira',
      url: 'www.twitch.tv/deivaotv',
      img: '/assets/avatars/deivao.png'
    },
    {
      title: 'Hoss',
      personagem: 'Fábio Garcia',
      url: 'www.twitch.tv/hoss994',
      img: '/assets/avatars/hoss.jpg'
    },
    {
      title: 'Megalob',
      personagem: 'Paulo de Souza',
      url: 'www.twitch.tv/megalob',
      img: '/assets/avatars/megalob.png'
    },
    {
      title: 'Prim',
      personagem: 'Luiz Carvalho',
      url: 'www.twitch.tv/primjoga',
      img: '/assets/avatars/prim.png'
    },
    {
      title: 'Prof Gilbertos',
      personagem: 'Gabriel Costa',
      url: 'www.twitch.tv/professorgilbertos',
      img: '/assets/avatars/profgil.jpg'
    },
  ];

  videos = [
    {
      title: 'Trailer',
      videoId: 0,
      url: 'https://www.youtube.com/embed/JM5CHJNewYM',
    },
  ];
}

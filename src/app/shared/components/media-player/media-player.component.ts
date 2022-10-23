import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: any ={
    cover:'https://th.bing.com/th/id/R.2648234494131b8a77efcf78c5d0f74b?rik=COGJte%2fU02YYEQ&riu=http%3a%2f%2fauditorio-telmex.com%2farchivos%2fevento694%2fimagen_mediana.jpg&ehk=5R9c5JXvYUvXJKdnB0NgFh5MiqFfTy41nhmNGRu92NQ%3d&risl=&pid=ImgRaw&r=0',
    album:'Balas Perdidas',
    name: 'Besos en Guerra'
  }
  constructor() { }

  ngOnInit(): void {
  }

}

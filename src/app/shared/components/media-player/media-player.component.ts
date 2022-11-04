import { Component, OnDestroy, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  listObservers$:Array<Subscription> =[]

  constructor(public multimediaService: MultimediaService) { }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
    this.listObservers$.forEach(u =>u.unsubscribe())
  }


}

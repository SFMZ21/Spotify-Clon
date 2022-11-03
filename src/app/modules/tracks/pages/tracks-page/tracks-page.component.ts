import { Component, OnDestroy, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { response } from 'express';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
tracksTrending: Array<TracksModel> = []
tracksRandom: Array<TracksModel> = []

listObservers$: Array<Subscription> =[]

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.trackService.getAllTracks$()
    .subscribe(response =>{
      console.log('----', response)
    })
    
  }

  ngOnDestroy(): void {
    
  }

}

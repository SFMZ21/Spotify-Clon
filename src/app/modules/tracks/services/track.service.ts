import { Injectable } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { observable, Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$: Observable<TracksModel[]> = of([])
  dataTracksRandom$: Observable<any> = of([])

  constructor() {
    const {data}: any =(dataRaw as any).default;
    this.dataTracksTrending$ = of(data)

    this.dataTracksRandom$=new Observable((observer)=>{
      const trackExample: TracksModel ={
        _id:9,
        name:'Don Juan',
        album: 'Ventino',
        url:'http://',
        cover:'https://i.scdn.co/image/f5582df74f6a407fb9277eba8d820e0f999647bd'
      }

      setTimeout(()=>{
        observer.next([trackExample])
      }, 3500)
    })
   }
}

import { EventEmitter, Injectable } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { BehaviorSubject, observable, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>()

  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)
  public audio!:HTMLAudioElement

  
  constructor() { 
    this.audio = new Audio()
    this.trackInfo$.subscribe(responseOk =>{
      if(responseOk){
        this.setAudio(responseOk)
      }

    })
  }

  private listenAllEvents(): void{

  }

  public setAudio(track: TracksModel): void{
    this.audio.src = track.url
    this.audio.play()

  }
}

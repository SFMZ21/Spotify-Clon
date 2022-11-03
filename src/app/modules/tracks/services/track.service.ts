import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { observable, Observable, of } from 'rxjs';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL=environment.api;

  constructor(private httpClient: HttpClient) {
    
   }

   private skipById(listTracks: TracksModel[], id: number):Promise<TracksModel[]>{
    return new Promise((resolve, reject) =>{
      const listTmp = listTracks.filter(a =>a._id !== id) 
      resolve(listTmp)
    })
   }

   getAllTracks$(): Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map(({data}:any) =>{
        return data
      })
    )

  }

  getAllRandom$(): Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      mergeMap(({data}:any) => this.skipById(data,1)),
      //map(({dataRevertida}:any) =>{
        //return dataRevertida.filter((track:TracksModel) =>track._id===1)
      //})
      tap(data => console.log(data)),
      catchError((err)=> {
        const{status, statusText}= err;
        console.log('Algo paso!...',[status, statusText]);
        return of([])
      }) 

    )

  }

}

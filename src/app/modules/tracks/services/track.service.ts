import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { observable, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL=environment.api;

  constructor(private httpClient: HttpClient) {
    
   }

   getAllTracks$(): Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`)

  }


}

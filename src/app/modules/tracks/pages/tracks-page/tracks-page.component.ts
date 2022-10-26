import { Component, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../../data/tracks.json'

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
mockTracksList: Array<TracksModel> = [
]
  constructor() { }

  ngOnInit(): void {
    const { data }:any=(dataRaw as any).default
    this.mockTracksList =data;
  }

}

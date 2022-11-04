import { Component, Input, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';


@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
  @Input() tracks: TracksModel[]=[]
  optionSort: {property:string|null, order:string} ={property:null, order:'asc'}

  constructor(private trackService: TrackService) { }


  ngOnInit(): void {
    this.trackService.getAllTracks$()
    .subscribe((response : TracksModel[]) => {
      this.tracks = response
    });

  }

  changeSort(property: string):void{
    const{order} =this.optionSort
    this.optionSort ={
      property,
      order: order === 'asc'? 'desc': 'asc'
    }
    console.log(this.optionSort);
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SongDataObject } from 'src/app/interfaces/song-data-object';
import { MusicService } from 'src/app/services/music.service';
import { MatDialog } from '@angular/material/dialog';
import { SongCardComponent } from '../song-card/song-card.component';



@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  
  public tunes: SongDataObject[] = [];
  public page: number = 1;
  public searchKey: string = '';
  public categories: string[] = [];
  public singers: string[] = [];

  constructor(private ApiService: ApiService, private dialogRef : MatDialog, private MusicService: MusicService) {

  }
  ngOnInit(): void {
      let data: any; 
      this.ApiService.getdata().subscribe((data) => {
        let raw_data: any  = data;
        data = raw_data.feed.entry;
        this.tunes = this.MusicService.mapData(data);
        this.categories = this.MusicService.getAllCatagories();
        this.singers = this.MusicService.getAllSingers();
      });
      this.MusicService.search.subscribe((val:string)=>{
        this.searchKey = val;
      })    
  }

  public openDialog(tune: SongDataObject) {
    let dialog = this.dialogRef.open(SongCardComponent,{
      height: '400px',
      width: '600px',
      data : tune,
    });
  }

  public toggleFavourites( tune: SongDataObject) {
    tune.liked = !tune.liked;
    tune.liked ?  this.MusicService.addtoFavourites(tune) : this.MusicService.RemoveFromFavourites(tune);
  }

  public filter(filterString: string) {
    this.page = 1;
    this.searchKey = '';
    if(filterString === 'favourites') {
      this.tunes = this.MusicService.favourites;
    } else {
      this.tunes = this.MusicService.tunes;
    }
  }
   public selectCategory(c: string) {
    this.searchKey = '';
    this.tunes = this.MusicService.tunes.filter((tune) => tune.catagory == c);
    this.page = 1;
  }

  public selectSingers(name: string) {
    this.searchKey = '';
    this.tunes = this.MusicService.tunes.filter((tune) => tune.artist_name == name);
    this.page = 1;
  }
}
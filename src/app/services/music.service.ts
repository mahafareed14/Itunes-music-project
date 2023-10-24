import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SongDataObject } from '../interfaces/song-data-object';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  public search = new BehaviorSubject<string>("");
  public favourites: SongDataObject[] = [];
  public tunes: SongDataObject[] = [];
  public categories: string[] = [];
  public singers: string[] = [];

  constructor() { }
  
  public mapData(data: any) : SongDataObject[] {
    for( let i: number = 0; i < data.length; i++ ) {
      let obj : any = data[i];
      let cat : string = obj.category.attributes.label;
      let tune: SongDataObject = {
        artist_name: obj["im:artist"].label,
        releaseDate: obj["im:releaseDate"].attributes.label,
        link: obj["link"].attributes.href,
        price: obj["im:price"].label,
        rights:obj["rights"].label,
        title: obj["title"].label,
        name: obj["im:name"].label,
        imageSource: obj["im:image"][2].label,
        catagory: cat,
      };
      this.tunes.push(tune);
    }
    return this.tunes;
  }

  public getAllCatagories() {
    this.categories = this.tunes.map((tune) => tune.catagory)
    this.categories = this.categories.filter((cat, index) => this.categories.indexOf(cat) == index)
    return this.categories;
  }

  public getAllSingers() {
    this.singers = this.tunes.map((tune) => tune.artist_name)
    this.singers = this.singers.filter((name, index) => this.singers.indexOf(name) == index)
    return this.singers;
  }

  public addtoFavourites(tune: SongDataObject) {
    if(this.favourites.indexOf(tune) == -1) {
      this.favourites.push(tune);
    }
  }

  public RemoveFromFavourites(tune: SongDataObject) {
    if(this.favourites.indexOf(tune) !== -1) {
      const ind: number = this.favourites.indexOf(tune);
      this.favourites.splice(ind,1);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public searchTerm !: string;

  constructor(private MusicService: MusicService){
  }

  ngOnInit(): void {
  }

  public search(event:any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.MusicService.search.next(this.searchTerm); 
  }

}

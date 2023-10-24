import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterPipe } from './shared/filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    NavbarComponent,
    FilterPipe,
],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    MatDialogModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

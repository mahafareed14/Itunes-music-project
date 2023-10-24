import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent {
  
  constructor(private dialogRef: MatDialogRef<SongCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
  
  }

  ngOnInit(): void {
  }
  
  public onclose() {
    this.dialogRef.close();
}
}

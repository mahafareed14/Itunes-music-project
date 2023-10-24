import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import {  catchError } from 'rxjs/operators';
import { from, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private iTuneAPI : string = environment.apiUrl;
  
  constructor(private httpClient: HttpClient) {
  }

  public getdata(){
    return this.httpClient.get(this.iTuneAPI).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
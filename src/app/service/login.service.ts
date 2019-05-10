import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Image } from '../model/image';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'ContentType' : "multipart/form-data"
    })
    };

    baseUrl:string="http://localhost:62215/api/product/";
   
    uploadImage(username:string,fileToUpload:File){
      let formData:FormData = new FormData();
      formData.append("Username",username);
      formData.append("file",fileToUpload,fileToUpload.name);
      return this.http.post(this.baseUrl+"UploadImage",formData,this.httpOptions);  
    }

    getImage(id:number){
        return this.http.get<Image>(this.baseUrl+"GetImageById/"+id,this.httpOptions)
        .pipe(       
           catchError(this.handleError)
        )
 }

          handleError(error) {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = `Error: ${error.error.message}`;
            } else {
              // server-side error
              errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            window.alert(errorMessage);
            return throwError(errorMessage);
          }
        }


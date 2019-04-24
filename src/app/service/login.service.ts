import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { ImageModule } from '../product/image/image.module';

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
        return this.http.get<ImageModule>(this.baseUrl+"GetImageById/"+id,this.httpOptions);
    }
}


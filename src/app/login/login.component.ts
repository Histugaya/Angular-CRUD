import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private service: LoginService) {  
}  

//for preview of image
imageUrl:String="/assets/image/default.jpg";
fileToUpload:File=null;

handleImageChange(file: FileList){
this.fileToUpload = file.item(0);

var reader = new FileReader();
  reader.onload=(event:any)=>{
  this.imageUrl=event.target.result;
  }
reader.readAsDataURL(this.fileToUpload);

}

  //file upload   
  upload(Image:any){
    let file: File = Image.files[0];
    this.service.uploadImage(file).subscribe(
      data=>{
        this.imageUrl="/assets/image/default.jpg"
        alert("successfully uploaded");
      }
    );
  }
 
}




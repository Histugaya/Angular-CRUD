import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

constructor(private service: LoginService) {  
}  

//for preview of image
imageUrl:String="";
fileToUpload:File=null;

handleImageChange(file: FileList){
this.fileToUpload = file.item(0);

var reader = new FileReader();
  reader.onload=(event:any)=>{
  this.imageUrl=event.target.result;
  }
reader.readAsDataURL(this.fileToUpload);
}

imageForm=new FormGroup({
    username: new FormControl(),
    image: new FormControl()
});

  //file upload function
  upload(imageData){
    let username=imageData.username;
    this.service.uploadImage(username,this.fileToUpload).subscribe(
      data=>{
        alert("successfully uploaded");
        this.imageForm.reset();
        this.imageUrl="";
      }
    );
  }
 
  getValue(id:number){
    this.service.getImage(id).subscribe(
      (data:any)=>{
          this.imageUrl=data.Image
          this.imageForm.patchValue({
            username:data.Name
          })
      }
    )
  }
}

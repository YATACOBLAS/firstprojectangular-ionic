import { PhotosService } from './photos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  photos=[];
  constructor(private photosServices:PhotosService) {}

   ngOnInit(){
      this.photosServices.getPhotos().subscribe(
         e=> {  this.photos= e; console.log(e)}
      )
  }




}

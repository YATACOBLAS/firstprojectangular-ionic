import { Router } from '@angular/router';
import { PlacesService } from './../places/places.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  constructor(private placeService:PlacesService,private router:Router) { }

  ngOnInit() {
    }
  addPlace(title, url){
    this.placeService.addPlace(title.value,url.value);
    this.router.navigate(['places']);
  }
}

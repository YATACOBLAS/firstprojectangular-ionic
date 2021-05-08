import { Place } from './../place.model';
import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {AlertController} from '@ionic/angular'
@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

   place:Place //este es un object no un array

   constructor(private activatedRoute:ActivatedRoute, private placeService:PlacesService,
    private router: Router, private alertCtrl:AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      //rediredt
      const recipeId=paramMap.get('placeId');
      this.place=this.placeService.getPlace(recipeId);
        });
    }

  async deletePlace(){
    const card=await  this.alertCtrl.create({
        header:'Are You Sure ,Delete it?',
        message:'Be careful',
        buttons:[{
          text:'Cancel',
          role:'cancel'
      },{
        text:'Delete',
        handler:()=>{
          this.placeService.deletePlace(this.place.id);
          this.router.navigate(['/places'])
        }
      }]

    })
    card.present();   
  }

}

import { Injectable } from '@angular/core';
import {Place} from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private  places: Place[] =[
    {
      id:'1',
      title:'Eiffel Tower',
      imageURL:'http://4.bp.blogspot.com/-MhP6v_wNedQ/T5cdguQ3CLI/AAAAAAAABO8/2CWxOFgr8O0/s1600/Tour+Eiffel+495+a_04CC.jpg',
      comments:['Awesome place', 'wonderful experience']
        },
        {
          id:'2',
          title:'Statue of Liberty ',
          imageURL:'https://pyxis.nymag.com/v1/imgs/c54/bd5/e433279a43fa9d26cfdd520ad9f3431d41-statue-of-liberty-lightning.rsquare.w700.jpg',
          comments:['Awesome place', 'wonderful experience']
        },
        {
           id:'3',
           title:'Macchu Pichu ',
           imageURL:'http://c.files.bbci.co.uk/E02E/production/_102809375_machu.jpg',
           comments:['Awesome place from Peru', 'wonderful experience']
         },
         {
          id:'4',
          title:'Roma',
          imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSagGbybe9L_tusyS7HRkVs1C4Vp0T8swZyDQ&usqp=CAU',
          comments:[]
        }
  ]

  constructor() { }
  getPlaces(){
    return [...this.places]
  }
  getPlace(placeId: String){
       return {...this.places.find(place => {return place.id==placeId } )
            }
  }
  addPlace(title: String, imageURL: String){
    this.places.push({
      title:title,
      imageURL:imageURL,
      id:this.places.length +1+"",
      comments:[]
    })

  }
  modifyPlace(id:String, title:String, imageURL:String, comments:String[]){

      this.places = this.places.filter( e=> {
        if(e.id==id){
          return e.title=title, e.imageURL=imageURL, e.comments=comments
          }
          return e
        })
        
      }
  deletePlace(id:String){
    this.places=this.places.filter(e=> {return e.id!==id})
  }
    
}

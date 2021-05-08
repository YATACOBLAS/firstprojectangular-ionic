import { Component, OnInit } from '@angular/core';
import {Marker} from './map.model'
import {Waypoint} from './waypoint'
declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit {

    map =null;
    // Esto es para ver el origen y el destino
    directionsService = new google.maps.DirectionsService();
    // Esto es para ver pintar la ruta  
    directionsDisplay = new google.maps.DirectionsRenderer();
    // parque simon bolivar
    origin = { lat: 4.658383846282959, lng: -74.09394073486328 };
    // Parque la 93
    destination = { lat: 4.676802158355713, lng: -74.04825592041016 };
      
    markers: Marker[] = [
      {
        position: {
          lat: 4.658383846282959,
          lng: -74.09394073486328,
        },
        title: 'Parque Simón Bolivar'
      },
      {
        position: {
          lat: 4.667945861816406,
          lng: -74.09964752197266,
        },
        title: 'Jardín Botánico'
      },
      {
        position: {
          lat: 4.676802158355713,
          lng: -74.04825592041016,
        },
        title: 'Parque la 93'
      },
      {
        position: {
          lat: 4.6554284,
          lng: -74.1094989,
        },
        title: 'Maloka'
      },
    ];
    wayPoints: Waypoint[]=[
      {
        location: { lat: 4.667945861816406, lng: -74.09964752197266 }, // Jardín Botánico
        stopover: true,
      },
      {
        location: { lat: 4.676802158355713, lng: -74.04825592041016 }, // Parque la 93
        stopover: true,
      },
      {
        location: { lat: 4.6554284, lng: -74.1094989}, // Maloka
        stopover: true,
      }
    ]
    constructor() { }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    const indicatorsEle: HTMLElement = document.getElementById('indicators');
    // create LatLng object
    const myLatLng = {lat: 4.658383846282959, lng: -74.09394073486328};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: this.origin,
      zoom: 12
    });

    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(indicatorsEle);
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      //this.renderMarkers();
      this.renderWayPoint()
      mapEle.classList.add('show-map');
     // this.calculateRoute();
     
    });
  }

  private calculateRoute() {
    this.directionsService.route({
      origin: this.origin,
      destination: this.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response, status)  => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
    }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }
  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }
  renderWayPoint(){
    this.directionsService.route({
      origin: this.origin,
      destination: this.origin,
      waypoints: this.wayPoints,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response, status)  => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
  }


}

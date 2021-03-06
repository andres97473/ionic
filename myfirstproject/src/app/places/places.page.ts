import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  places = [];

  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    this.cargarPlaces();
  }

  ionViewWillEnter() {
    this.places = this.placesService.getPlaces();
  }

  cargarPlaces() {
    this.places = this.placesService.getPlaces();
  }
}

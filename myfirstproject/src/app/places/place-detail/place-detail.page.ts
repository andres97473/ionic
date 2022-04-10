import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      let recipeId = paramMap.get('placeId');
      // console.log(recipeId);
      this.place = this.placesService.getPlace(recipeId);
      // console.log(this.place);
    });
  }

  deletePlace() {
    // console.log('Deleted!');
    this.placesService.deletePlace(this.place.id);
    this.router.navigate(['/places']);
  }
}

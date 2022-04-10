import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL:
        'http://4.bp.blogspot.com/-MhP6v_wNedQ/T5cdguQ3CLI/AAAAAAAABO8/2CWxOFgr8O0/s1600/Tour+Eiffel+495+a_04CC.jpg',
      comments: ['Awesome place', 'Wonderful experience'],
    },
    {
      id: '2',
      title: 'Statue of Liberty',
      imageURL:
        'https://elvuelodelgatohome.files.wordpress.com/2019/04/estatua-de-la-libertad-02-681x1024.jpg',
      comments: ['Awesome place', 'Wonderful experience'],
    },
    {
      id: '3',
      title: 'Awesome Place',
      imageURL:
        'https://elvuelodelgatohome.files.wordpress.com/2019/04/estatua-de-la-libertad-02-681x1024.jpg',
      comments: [],
    },
  ];

  constructor() {}

  getPlaces() {
    return [...this.places];
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find((place) => {
        return place.id === placeId;
      }),
    };
  }

  addPlace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + '',
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter((place) => {
      return place.id !== placeId;
    });
  }
}

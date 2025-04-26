import { Component } from '@angular/core';
import { TopProperty } from './top-property.model';

@Component({
  selector: 'app-top-properties',
  imports: [],
  templateUrl: './top-properties.component.html',
  styleUrl: './top-properties.component.scss'
})
export class TopPropertiesComponent {
  properties: TopProperty[] = [
    {
      id: 1,
      title: 'House',
      imageUrl: 'assets/dashboard/house-1.jpg',
      change: -11,
      location: 'Baton Rouge, USA',
    },
    {
      id: 2,
      title: 'House',
      imageUrl: 'assets/dashboard/house-2.jpg',
      change: 20,
      location: 'Baton Rouge, USA',
    },
    {
      id: 3,
      title: 'House',
      imageUrl: 'assets/dashboard/house-3.jpg',
      change: 24,
      location: 'Baton Rouge, USA',
    },
    {
      id: 4,
      title: 'House',
      imageUrl: 'assets/dashboard/house-4.jpg',
      change: 21,
      location: 'Baton Rouge, USA',
    },
    {
      id: 5,
      title: 'House',
      imageUrl: 'assets/dashboard/house-5.jpg',
      change: 45,
      location: 'Baton Rouge, USA',
    },
    {
      id: 6,
      title: 'House',
      imageUrl: 'assets/dashboard/house-5.jpg',
      change: -45,
      location: 'Baton Rouge, USA',
    },
    {
      id: 7,
      title: 'House',
      imageUrl: 'assets/dashboard/house-5.jpg',
      change: 45,
      location: 'Baton Rouge, USA',
    }
  ];

}

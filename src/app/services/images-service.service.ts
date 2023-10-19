import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesServiceService {

  constructor() { }
  images: any = [
    {
      title: 'ardilla',
      imgSrc: 'ardilla.jpg',
    },
    {
      title: 'ardilla',
      imgSrc: 'ardillaSnoopDog.jpg',
    },
    {
      title: 'caballo',
      imgSrc: 'foto-perfil.jpg',
    },
    {
      title: 'gato',
      imgSrc: 'gato-risa.jpg',
    },
    {
      title: 'perro',
      imgSrc: 'perro-buldog.jpg',
    },
    {
      title: 'leon marino',
      imgSrc: 'leon-marino.jpg',
    },
    {
      title: 'ardilla',
      imgSrc: 'ardilla.jpg',
    },
    {
      title: 'ardilla',
      imgSrc: 'ardillaSnoopDog.jpg',
    },    {
      title: 'perro',
      imgSrc: 'perro-buldog.jpg',
    },
    {
      title: 'leon marino',
      imgSrc: 'leon-marino.jpg',
    },
    {
      title: 'ardilla',
      imgSrc: 'ardilla.jpg',
    },
    {
      title: 'ardilla',
      imgSrc: 'ardillaSnoopDog.jpg',
    },
  ];
  getImages(): any[] {
    return this.images;
  }
  filterImages(searchTerm: string): any[] {
    if (!searchTerm || searchTerm.trim() === '') {
      return this.images;
    }
    return this.images.filter((image: { title: string; }) => {
      return image.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}

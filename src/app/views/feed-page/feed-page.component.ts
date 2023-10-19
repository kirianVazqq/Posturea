import { Component } from '@angular/core';
import { ImagesServiceService } from 'src/app/services/images-service.service';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss'],
})
export class FeedPageComponent {
  images: any[] = [];
  slideIndex: number = 0;

  constructor(private imagesService: ImagesServiceService) { }

  ngOnInit() {
    this.images = this.imagesService.getImages();
  }

  previousSlide() {
    this.slideIndex = (this.slideIndex > 0) ? this.slideIndex - 1 : this.images.length - 1;
  }

  nextSlide() {
    this.slideIndex = (this.slideIndex < this.images.length - 1) ? this.slideIndex + 1 : 0;
  }
}

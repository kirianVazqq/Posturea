import { Component } from '@angular/core';
import { ImagesServiceService } from 'src/app/services/images-service.service';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  searcher: string = '';
  images: any[] = [];
  constructor(private imageService: ImagesServiceService) {}

  ngOnInit(): void {
    this.images = this.imageService.getImages();
  }

  filterProducts() {
    return this.imageService.filterImages(this.searcher);
  }
}

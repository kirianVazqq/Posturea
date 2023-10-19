import { Component } from '@angular/core';
import { ImagesServiceService } from 'src/app/services/images-service.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
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


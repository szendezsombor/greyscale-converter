import { greyscalePanelFade } from './../animations';
import { ImageService } from './../image.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-grey-prewiew-container',
  templateUrl: './image-grey-prewiew-container.component.html',
  styleUrls: ['./image-grey-prewiew-container.component.css']
})
export class ImageGreyPrewiewContainerComponent implements OnInit {

  @Input('id') imageId: number;
  @Input('title') imageTitle: string;
  @Input('link') imageLink: string;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  downloadImage(id: number) {
    this.imageService.downloadImage(id);
  }

  removeImage(id: number) {
    this.imageService.removeImage(id);
  }

}

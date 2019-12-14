import { ImageModel } from './image.model';
import { ImageService } from './../image.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-image-grey',
  templateUrl: './image-grey.component.html',
  styleUrls: ['./image-grey.component.css']
})
export class ImageGreyComponent implements OnInit {
  public uploadedImagesLinks: ImageModel[] = [];
  constructor(private imageService: ImageService) { }

  ngOnInit() {}

  onFileSelected(event) {
    console.log(event.target.files);
    const files = event.target.files;
    const picNum = event.target.files.length;
    const startId = this.imageService.getIdCounter();
    for (let i = 0; i < picNum; i++) {
      this.imageService.imageToGreyScale(files[i], files[i].name, (startId + i + 1));
      this.imageService.increaseIdCounter(1);
    }
    this.uploadedImagesLinks = this.imageService.getUploadedImagesLinks();
  }
}


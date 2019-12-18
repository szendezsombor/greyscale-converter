import { ImageModel } from './image-grey/image.model';
import { saveAs } from 'file-saver';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private idCounter = 0;
  private uploadedImagesLinks: ImageModel[] = [];
  private canvas: HTMLCanvasElement;
  private context;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
  }

  imageToGreyScale(file: any, title: string, id: number) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      this.clearCanvas();

      const image = new Image();
      image.src = reader.result.toString();
      image.onload = () => {
        this.setCanvasSize(image.width, image.height);

        const width = this.canvas.width;
        const height = this.canvas.height;

        this.context.drawImage(image, 0, 0, width, height);

        const imageData = this.context.getImageData(0, 0, width, height);
        const rgba = imageData.data;

        for (let px = 0; px < width * height * 4; px += 4) {
          const avg = (rgba[px] + rgba[px + 1] + rgba[px + 2]) / 3;
          rgba[px] = avg;
          rgba[px + 1] = avg;
          rgba[px + 2] = avg;
        }

        this.context.putImageData(imageData, 0, 0);
        this.uploadedImagesLinks.push({
          id: id,
          title: title,
          link: this.canvas.toDataURL('image/jpeg', 1)
        });
      }


    }, false);
    reader.readAsDataURL(file);
  }

  setCanvasSize(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  clearCanvas() {
    const width = this.canvas.width;
    const height = this.canvas.height;

    this.context.clearRect(0, 0, width, height);
  }

  downloadImage(id: number) {
    const img = this.getUploadedImagesLinks().find(image => image.id === id);
    if (img) {
      saveAs(this.dataURItoBlob(img.link), img.title);
    }
  }

  removeImage(id: number) {
    const img = this.getUploadedImagesLinks().find(image => image.id === id);
    if (img) {
      this.uploadedImagesLinks.splice(this.uploadedImagesLinks.indexOf(img), 1);
    }
  }

  dataURItoBlob(dataURI) {
    const binary = atob(dataURI.split(',')[1]);
    const array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
  }

  getUploadedImagesLinks() {
    return this.uploadedImagesLinks;
  }

  getIdCounter() {
    return this.idCounter;
  }

  increaseIdCounter(increment: number) {
    return this.idCounter += increment;
  }
}

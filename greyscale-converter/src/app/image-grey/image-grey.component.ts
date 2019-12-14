import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-image-grey',
  templateUrl: './image-grey.component.html',
  styleUrls: ['./image-grey.component.css']
})
export class ImageGreyComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private context: CanvasRenderingContext2D;
  private selectedFile = null;
  public downloadLink = null;
  constructor() { }

  ngOnInit() {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.canvas.nativeElement.hidden = true;
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    this.onUpload();
  }

  onUpload() {
    if (!this.selectedFile) {
      return;
    }
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      this.clearCanvas();

      const image = new Image(); // Hiányzó adatok
      image.src = reader.result.toString();
      image.onload = () => {
        this.setCanvasSize(image.width, image.height);

        const width = this.canvas.nativeElement.width;
        const height = this.canvas.nativeElement.height;

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
        this.downloadLink = this.canvas.nativeElement.toDataURL('image/jpeg', 1);
      }


    }, true);
    reader.readAsDataURL(this.selectedFile);
  }

  setCanvasSize(width: number, height: number) {
    this.canvas.nativeElement.width = width;
    this.canvas.nativeElement.height = height;
  }

  clearCanvas() {
    const width = this.canvas.nativeElement.width;
    const height = this.canvas.nativeElement.height;

    this.context.clearRect(0, 0, width, height);
  }

  onDownload() {
    if (this.downloadLink) {
      saveAs(this.dataURItoBlob(this.downloadLink), 'greyscaledimage');
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


}


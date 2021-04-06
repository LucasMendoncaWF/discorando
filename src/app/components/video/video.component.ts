import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() videoUrl: string;
  @Input() title: string;
  safeURL;

  constructor(
    private _sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

}

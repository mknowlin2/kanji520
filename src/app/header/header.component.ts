import { Component, OnInit } from '@angular/core';

import { HeaderLinkService } from './header-link.service';

@Component({
  selector: 'kanji-hdr',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private hdrLinkService: HeaderLinkService ) { }

  ngOnInit() {
  }

  getYouTubeLinks() {
    return this.hdrLinkService.getYouTubeLinks();
  }

  getTwitchLinks() {
    return this.hdrLinkService.getTwitchLinks();
  }

}

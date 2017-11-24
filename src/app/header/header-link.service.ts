import { Injectable } from '@angular/core';

import { Link } from './link.model';

@Injectable()
export class HeaderLinkService {

  private youtubeLinks : Link[] = [
    new Link("Kanji520", "https://www.youtube.com/Kanji520"),
    new Link("Nightwulf29", "https://www.youtube.com/Nightwulf29"),
    new Link("APrince", "https://www.youtube.com/channel/UCXs6sK7NZYJR1sMoJg8q2eA"),
    new Link("NerdUpInc", "https://www.youtube.com/channel/NerdUpInc")
  ];

  private twitchLinks : Link[] = [
    new Link("Kanji520", "https://www.twitch.tv/kanji520"),
    new Link("Nightwulf29", "https://www.twitch.tv/nightwulf29"),
    new Link("NerdUpInc", "https://www.twitch.tv/nerdupinc"),
    new Link("BGR", "https://www.twitch.tv/blkgmrsrev")
  ];

  constructor() { }

  getYouTubeLinks() {
    return this.youtubeLinks.slice();
  }

  getTwitchLinks() {
    return this.twitchLinks.slice();
  }

}

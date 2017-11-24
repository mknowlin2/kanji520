import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kanji-mdl',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  gamerTags: any[] = [
    {console: 'Xbox One', gamerTag: 'Kanji520'},
    {console: 'Playstation 4', gamerTag: 'LiquidSnake20'}
  ]

  constructor() { }

  ngOnInit() {
  }

}

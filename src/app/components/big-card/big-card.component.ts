import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = "https://tm.ibxk.com.br/2024/02/21/21103925397055.webp?ims=1280x480" /*Colocar link da foto*/
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = ""
  @Input()
  Id:string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}

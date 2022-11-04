import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  public title:string = 'web-developing';
  ngOnInit(): void {
  }

  changeTitle(titles:string) {
   if (titles=='web-developing') {
    this.title = titles;
   }else if (titles=='database-analysis') {
    this.title = titles;
   }else if (titles=='server-security') {
    this.title = titles;
   }else if (titles=='web-designing') {
    this.title = titles;
   }
  }

}

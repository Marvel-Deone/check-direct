import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    let script = this.renderer.createElement('script');
    script.type = `text/javascript`;
    script.src = 'testme.js';
    script.id = "testScriptName";
    console.log(script);
    
  }

}

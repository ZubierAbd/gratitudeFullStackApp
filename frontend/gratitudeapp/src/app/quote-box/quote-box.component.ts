import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.scss']
})
export class QuoteBoxComponent implements OnInit {

  @Input() quote = {
    author: "",
    quote: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}

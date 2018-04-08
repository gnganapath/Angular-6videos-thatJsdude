import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {
public myprop ="circular prob text";

myTodo = ['hi', 'circular', 'component']
  constructor() { }

  ngOnInit() {
    this.myprop = "circular update in onInint";
  }
  changeText(){
  this.myprop = "circular update in Event prob method";
  }

}

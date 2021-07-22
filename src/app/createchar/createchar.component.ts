import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-createchar',
  templateUrl: './createchar.component.html',
  styleUrls: ['./createchar.component.css'],
})
export class CreatecharComponent implements OnInit {
  private character: Character;
  constructor(private service: BackendService) {
    // this.character = new Character();
  }

  ngOnInit(): void {}

  // addCharacter(): void {
  //   this.service.addCharacter(this.character).subscribe((res) => {
  //     // this.character = new Character();
  //   });
  // }
}

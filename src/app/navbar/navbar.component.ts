import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Character } from '../character';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private character: Character;

  constructor(private bs: BackendService) {}

  ngOnInit(): void {
  }
  
  createRandomCharacter(){
    this.bs.addCharacter().subscribe((res) => {
      this.character = res;
  }
  )}
  
}

import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Character } from '../character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  private characters: Character[];
  character: Character;
  constructor(private service: BackendService) {}

  ngOnInit(): void {
    this.service.getCharacters().subscribe((res) => {
      this.characters = res;
      console.log(res);
      
    });
  }

  addCharacter(): void {
    this.service.addCharacter().subscribe((res) => {
      console.log(res);
      // this.character = new Character();
    });
  }

  getCharacterByID(id: number): void {
    this.service.getCharacterByID(id).subscribe((res) => {
      console.log(res);
    });
  }

  Randomize(num: number): number {
    let min = Math.ceil(0);
    let max = Math.floor(num);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getModal(character: Character){

  }
}

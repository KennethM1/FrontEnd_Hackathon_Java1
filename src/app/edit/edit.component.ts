import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Character } from '../character';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private character: any;

  constructor(private bs: BackendService) { }

  ngOnInit(): void {
    this.character = {};
  }

 submitCharacter(char: Character){
    console.log(char);
    this.editCharacter(char);
  }

  editCharacter(character: Character){
    this.bs.editCharacter(character).subscribe((res) => {
      this.character = res;
      alert("Characters List Updated");
  }
  )}
}

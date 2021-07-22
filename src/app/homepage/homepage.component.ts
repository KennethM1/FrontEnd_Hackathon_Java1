import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Character } from '../character';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  private characters: Character[];
  constructor(private service: BackendService) {}

  ngOnInit(): void {
    this.service.getCharcters().subscribe((res) => {
      this.characters = res;
    });
  }
}

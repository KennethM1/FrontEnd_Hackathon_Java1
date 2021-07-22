// import { Component, OnInit } from '@angular/core';
// import { BackendService } from '../backend.service';
// import { Character } from '../character';

// @Component({
//   selector: 'app-homepage',
//   templateUrl: './homepage.component.html',
//   styleUrls: ['./homepage.component.css'],
// })
// export class HomepageComponent implements OnInit {
//   images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
//   private characters: Character[];
//   character: Character;
//   constructor(private service: BackendService) {}

//   ngOnInit(): void {
//     this.service.getCharacters().subscribe((res) => {
//       this.characters = res;
//     });
//   }

//   addCharacter(): void {
//     this.service.addCharacter(this.character).subscribe((res) => {
//       // this.character = new Character();
//     });
//   }

//   getCharacterByID(id: number): void {
//     this.service.getCharacterByID(id).subscribe((res) => {
//       console.log(res);
//     });
//   }

//   Randomize(num: number): number {
//     let min = Math.ceil(0);
//     let max = Math.floor(num);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//   SelectRandomSlide() {
//     //   // select
//     //   select("Hair" + {Randomize(3)}) //=> void
//     //   select(slideId: "eyes" + {Randomize(3)}) => void
//     //   select(slideId: "nationality" + {Randomize(3)}) => void
//     //   select(slideId: "race" + {Randomize(3)}, source: NgbSlideEventSource) => void
//     //   select(slideId: "profession" + {Randomize(3)}, source: NgbSlideEventSource) => void
//     //   // Navigates to a slide with the specified identifier.
//   }
// }

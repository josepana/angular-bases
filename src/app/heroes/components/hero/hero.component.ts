import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:  string = 'ironman';
  public age:   number = 45;
  //public name: string = 'Ironman';
  //public name: string = 'Ironman';

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void{
    this.name = 'Spiderman';
  }
  changeAge(): void{
    this.age = 50;
  }

  resetForm(): void{
    this.name = 'ironman';
    this.age = 45;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spidermn', 'Ironman', 'Hulk', 'Tor', 'She Hulk'];
  public deleteHero?: string;

  removeLastHero(): void{
    this.deleteHero = this.heroNames.pop();
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css'
})
export class CardComponent {
  cards : any[] = [
    {
      titre : 'card1',
      sousTitre : '1'
    },

    {
      titre : 'card2',
      sousTitre : '2'
    },

    {
      titre : 'card3',
      sousTitre : '3'
    },

    {
      titre : 'card4',
      sousTitre : '4'
    }

  ];
}

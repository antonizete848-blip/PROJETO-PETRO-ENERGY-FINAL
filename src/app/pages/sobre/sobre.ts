import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css'
})

export class SobreComponent {

}
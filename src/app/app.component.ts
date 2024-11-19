import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// card.interface.ts
export interface Card {
  title: string;
  description: string;
  list: string[];
  buttonText: string;
  route?: string; // Propiedad para la URL de la imagen
  imagUrl?: string;
}


@Component({
  selector: 'app-root',
  imports: [RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  cards: Card[] = [
    {
      title: 'Resuelve Ejercicios Geométricos',
      description: 'Practicar y resolver ejercicios de geometría, con explicaciones detalladas y soluciones paso a paso.',
      list: ['Cuadrado', 'Triángulo', 'Rectángulo', 'Y más'],
      buttonText: 'Ir',
      route: '#'
    },
    {
      title: 'Resolver Ejercicios de Funciones',
      description: 'Practicar y resolver ejercicios de funciones matemáticas, con soluciones paso a paso y la posibilidad de visualizar gráficamente cada ejercicio.',
      list: ['Lineales', 'Cuadráticas', 'Polinómicas'],
      buttonText: 'Ir',
      route: '#'
    }
  ];

    constructor(private router: Router) { }

  navegar(): void {
    this.router.navigate(['/menu']);
  }

}

import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  textoVoltar = 'Sair';
  mainClass = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private location: Location) {
    this.router.events
      .pipe(
        filter(status => status instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap(route => route.data)
      )
      .subscribe(data => {
        this.mainClass = data['mainClass'] ?? '';
        this.textoVoltar = this.router.url === '/' ? 'Sair' : 'Voltar';
      });
  }

  onVoltarClick() {
    if (this.router.url === '/')
      return; //Lógica de logout, se houver

    this.location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, NavigationEnd, Params, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'painel-curso';
  public projects = [
    'using-services',
    'services-assignment-start',
    'routing-start',
    'observables-start',
    'main',
    'forms-td-start',
    'forms-td-assignment-start',
    'forms-reactive-start',
    'forms-reactive-assignment-start',

  ]

  constructor(private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.url)
    ).subscribe(
      (url: string) => {
        console.log(url);
        const splitNameAfterSlash = () => url.split('/')[1];
        const projectName = splitNameAfterSlash();
        this.title = projectName || 'painel-curso';
      }
    );

    this.route.data.subscribe(
      (data:any) => {
        console.log(data);
      }
    )

  }

  selecionarProjeto(projectName: string) {
    this.title = projectName;
    this.router.navigate([projectName])
  }
}


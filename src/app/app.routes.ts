import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    loadComponent: () => import('./movies/movies.page').then( m => m.MoviesPage)
  },
  {
    path: 'trending-movies',
    loadComponent: () => import('./trending-movies/trending-movies.page').then( m => m.TrendingMoviesPage)
  },
];

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
  {
    path: 'moviedetails',
    loadComponent: () => import('./moviedetails/moviedetails.page').then( m => m.MoviedetailsPage)
  },
  {
    path: 'details',
    loadComponent: () => import('./details/details.page').then( m => m.DetailsPage)
  },
];

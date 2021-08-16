import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/layouts/landing/landing.component';

const routes: Routes = [
  { 
    path:'users',
    loadChildren: () => import('./users/users.module').then((m)=> m.UsersModule),
  },
  {
    path:'dashboard', 
  loadChildren: () => import('./dashboard/dashboard.module').then((m)=> m.DashboardModule)
  },
  {
    path:'core', 
    loadChildren: () => import('./core/core.module').then((m)=> m.CoreModule)
  },
  {path:'profile', loadChildren: () => import('./profile/profile.module').then((m)=> m.ProfileModule)},
  {path:'posts',loadChildren: () => import('./posts/posts.module').then((m)=> m.PostsModule)},
  {path:'display-profile', loadChildren:() => import('./display-profile/display-profile.module').then((m)=> m.DisplayProfileModule)},
  {path:'comments', loadChildren:() => import('./comments/comments.module').then((m)=>m.CommentsModule)},
  {path:'',component:LandingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

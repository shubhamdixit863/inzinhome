import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomelayoutComponent } from './shared/homelayout/homelayout.component';


const routes: Routes = [

  {
    path: '', 
    component: HomelayoutComponent,

    children: [
    
        { 
        path: '', 
        loadChildren: () => import('./views/homepage/homepage.module').then(m => m.HomepageModule),
        data: { title: 'Admin'} 
      },

      { 
        path: 'about', 
        loadChildren: () => import('./views/about/about.module').then(m => m.AboutModule),
        data: { title: 'Admin'} 
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

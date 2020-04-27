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
        loadChildren: () => import('./views/aboutpage/aboutpage.module').then(m => m.AboutpageModule),
        data: { title: 'Admin'} 
      },
      { 
        path: 'brands', 
        loadChildren: () => import('./views/brands/brands.module').then(m => m.BrandsModule),
        data: { title: 'Admin'} 
      },
      { 
        path: 'category', 
        loadChildren: () => import('./views/categories/categories.module').then(m => m.CategoriesModule),
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

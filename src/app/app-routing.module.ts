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
      },
      { 
        path: 'vendor', 
        loadChildren: () => import('./views/vendor/vendor.module').then(m => m.VendorModule),
        data: { title: 'Admin'} 
      },
      { 
        path: 'dealer', 
        loadChildren: () => import('./views/dealer/dealer.module').then(m => m.DealerModule),
        data: { title: 'Admin'} 
      },
      { 
        path: 'distributor', 
        loadChildren: () => import('./views/distributor/distributor.module').then(m => m.DistributorModule),
        data: { title: 'Admin'} 
      },
      { 
        path: 'tags', 
        loadChildren: () => import('./views/tags/tags.module').then(m => m.TagsModule),
        data: { title: 'Admin'} 
      },
      { 
        path: 'login', 
        loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule),
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

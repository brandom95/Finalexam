import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: AppComponent },

    { path: 'productlist', component: ProductlistComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HouseCatalogComponent} from "./pages/house-catalog/house-catalog.component";
import {HouseDetailsComponent} from "./pages/house-details/house-details.component";
import {ReservesComponent} from "./pages/reserves/reserves.component";
import {FavouritesComponent} from "./pages/favourites/favourites.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'houses', component: HouseCatalogComponent},
  {path: 'houses/:id_house', component: HouseDetailsComponent},
  {path: 'home', component: ReservesComponent},
  {path: 'favourites', component: FavouritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

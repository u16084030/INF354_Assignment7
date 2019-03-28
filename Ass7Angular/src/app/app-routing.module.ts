import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GamesComponent } from './games/games.component';
import { BetsComponent } from './bets/bets.component';
import { BethistoryComponent } from './bethistory/bethistory.component';
import { LoungesComponent } from './lounges/lounges.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'games', component: GamesComponent},
  { path: 'bets', component: BetsComponent},
  { path: 'bethistory', component: BethistoryComponent},
  { path: 'lounges', component: LoungesComponent},
  { path: 'booking', component: BookingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

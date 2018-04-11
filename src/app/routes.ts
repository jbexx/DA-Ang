import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemeberListComponent } from './members/memeber-list/memeber-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';


export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    // suppose to have below but getting errors.  suppose to import from @angular/router but get errors there aswell
    // see https://angular.io/api/router/RunGuardsAndResolvers
    //RunGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'members', component: MemeberListComponent },
      { path: 'members/:id', component: MemberDetailComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent },
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
]
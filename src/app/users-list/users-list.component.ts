import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UsersApiService } from '../users-api.service';
import { User } from '../interfaces/user.interface';
import { UserCartComponent } from "./user-cart/user-cart.component";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, UserCartComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  users: User[] = [];

  constructor() {
    this.usersApiService.getUsers().subscribe((response: any) => {
      this.users = response;
      console.log('USERS: ', this.users);
    });
  }
  deleteUser(id: number) {
    this.users = this.users.filter((item: { id: number }) => {
      if (id === item.id) {
        return false;
      } else {
        return true;
      }
    });
  }
}

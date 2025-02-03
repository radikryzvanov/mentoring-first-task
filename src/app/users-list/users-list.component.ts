import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../services/users-api.service';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, UserCartComponent, AsyncPipe],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);

  constructor() {
    this.usersApiService.getUsers().subscribe((response: any) => {
      this.usersService.setUsers(response);
    });
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }
}

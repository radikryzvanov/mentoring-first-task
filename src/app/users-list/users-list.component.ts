import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../services/users-api.service';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UsersService } from '../services/users.service';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, UserCartComponent, AsyncPipe, CreateUserFormComponent],
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

    this.usersService.users$.subscribe((users) => console.log(users));
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }
  public createUser(formDate: any) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: formDate.name,
      email: formDate.email,
      website: formDate.website,
      company: {
        name: formDate.companyName,
      },
    });
    console.log('ДАННЫЕ ФОРМЫ:', event);
  }
}

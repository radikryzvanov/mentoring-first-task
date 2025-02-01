import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrl: './user-cart.component.scss',
  standalone: true,
})
export class UserCartComponent {
  @Input()
  user: any;

  @Output()
  deleteUser = new EventEmitter();

  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId);
  }
}

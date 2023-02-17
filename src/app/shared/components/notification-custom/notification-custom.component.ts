import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notification-custom',
  templateUrl: './notification-custom.component.html',
  styleUrls: ['./notification-custom.component.scss']
})
export class NotificationCustomComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
  public snackBarRef: MatSnackBarRef<NotificationCustomComponent>){}
}

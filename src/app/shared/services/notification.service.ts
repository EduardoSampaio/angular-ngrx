import { NotificationCustomComponent } from './../components/notification-custom/notification-custom.component';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private snackBar: MatSnackBar) { }

  showNotification(message: string, title: string, type: 'error' | 'success' | 'warning' | 'info') {
    this.snackBar.openFromComponent(NotificationCustomComponent, {
      data: {
        message,
        title,
        type
      },
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: [type,"my-custom-snackbar"],
    });
  }
}

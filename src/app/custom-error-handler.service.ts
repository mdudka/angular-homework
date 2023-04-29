import {ErrorHandler, Injectable, NgZone} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandler implements ErrorHandler {

  constructor(private snackbar: MatSnackBar, private zone: NgZone) { }

  handleError(error: unknown) {
    this.zone.run(() => {
      this.snackbar.open(
        `Oops! ${error}`,
        'Close',
        {duration: 3000}
      )
    })
  }
}

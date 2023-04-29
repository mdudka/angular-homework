import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomErrorHandler } from './custom-error-handler.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UsersModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: ErrorHandler, useClass: CustomErrorHandler }],
  bootstrap: [AppComponent],
})
export class AppModule {}

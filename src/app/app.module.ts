import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      // domain: 'YOUR_AUTH0_DOMAIN',
      // clientId: 'YOUR_AUTH0_CLIENT_ID'
      domain: 'q-hmd.us.auth0.com',
      clientId: 'UcWILHmsrxvnBee7HNWJguID2MxS6NLG'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

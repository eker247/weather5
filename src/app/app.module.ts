import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './layout/components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layout/layouts/admin-layout/admin-layout.component';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    CoreModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

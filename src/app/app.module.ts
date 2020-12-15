import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { DemoComponent } from "./demo/demo.component";
import { DemoDirective } from "./demo/demo.directive";
import { ThyGridModule } from "ngx-tethys/grid";
import { ScrollDispatcher, ViewportRuler } from "@angular/cdk/overlay";
import { Platform } from '@angular/cdk/platform';
import { DragDropRegistry } from '@angular/cdk/drag-drop';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json?");
}

@NgModule({
  declarations: [AppComponent, DemoComponent, DemoDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ThyGridModule,
  ],
  exports: [ThyGridModule],
  providers: [ViewportRuler, Platform, DragDropRegistry, ScrollDispatcher],
  bootstrap: [AppComponent],
})
export class AppModule {}

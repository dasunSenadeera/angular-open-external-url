import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing-module";
import { RedirectGuard} from './redirect.guard';


import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MainComponent } from './main/main.component';
@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HomeComponent, MainComponent],
  bootstrap: [AppComponent],
  providers: [RedirectGuard]
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main/main.component";
import { RedirectGuard } from "./redirect.guard";

const routes: Routes = [
  {
    path: "home",
    canActivate: [RedirectGuard],
    component: HomeComponent,
    data: {
      externalUrl: "https://facebook.com/"
    }
  },
  {
    path: "",
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

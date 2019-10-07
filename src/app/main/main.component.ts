import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  goToPage(url: string) {
    window.location.href = url;
  }
}

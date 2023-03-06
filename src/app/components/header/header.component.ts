import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task tracker';
  showAddTask: boolean = false;
  subscription: Subscription;


  constructor(private uiService: UiService, private router: Router) {
    console.log("Header component constructor");
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    })
  }

  ngOnInit(): void {
    console.log("Header component onInit");
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: String) {
    return this.router.url === route;
  }
}

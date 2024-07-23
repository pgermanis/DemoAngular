import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import { DUMMY_USERS } from "./dummy-users";
import {TasksComponent} from "./tasks/tasks.component";
import {NgForOf, NgIf} from "@angular/common";
import {User} from "./user.model";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo';
  users = DUMMY_USERS;
  selectedUser? : User;

  onUserSelection(id:string) {
    //console.log('user selected', id);
    //let user : any = this.users.find(x => x.id == id);
    this.selectedUser = this.users.find((user) => user.id == id);
    //console.log('selected userName:',this.selectedUser);
  }
}

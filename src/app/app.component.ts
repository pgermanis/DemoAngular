import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import { DUMMY_USERS } from "./dummy-users";
import {TaskComponent} from "./task/task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    HeaderComponent,
    UserComponent,
    TaskComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo';
  users = DUMMY_USERS;
  selectedUserName! : string;

  onUserSelection(id:string) {
    console.log('user selected', id);
    let selectedUser : any = this.users.find(x => x.id == id);
    this.selectedUserName = selectedUser?.name;
    console.log('selected userName:',this.selectedUserName);
  }
}

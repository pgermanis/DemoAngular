//import {Component, computed, input} from '@angular/core'; //input signals
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../user.model";
import {CardUiComponent} from "../shared/card-ui/card-ui.component";
//simple input
//import { Component, computed, signal } from '@angular/core'; //signals

//import {DUMMY_USERS} from '../dummy-users';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id : string;
//   name : string;
//   avatar : string ;
// }

// interface User {
//   id : string;
//   name : string;
//   avatar : string ;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CardUiComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //Implementation with Input
  // @Input({ required : true }) id! : string;
  // @Input({ required : true }) avatar!: string;
  // @Input({ required : true }) name!: string;

  // @Input({ required: true}) user : {
  //   id : string;
  //   name: string;
  //   avatar: string;
  // };

  @Input({ required : true }) user! : User;
  @Input({ required: true }) isSelected!: boolean;

  @Output() userSelectedEvent = new EventEmitter<string>();
  //Implementation with input signals
  // avatar = input.required<string>();  //read only!!!
  // name = input.required<string>();

  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  //imagePath = computed(() => 'assets/users/' + this.avatar()); //this.selectedUser.avatar()

  // get imagePath(){
  //   return 'assets/users/' + this.avatar();
  // }

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  onClickUserButton(){
    //console.log('clicked');
    this.userSelectedEvent.emit(this.user.id);
  }

  // Implementation with signals
  // onClickUserButton(){
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  users: User[] = [];
  counter: number = 0;
  interval: any;
  constructor(
    private userService: UserService,
    private globalLoaderService: GlobalLoaderService
  ) {}

  ngOnDestroy(): void {
    //To clear data
    console.log('User-List destroyed!');
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.fetchUsers();
    this.interval = setInterval(() => {
      this.counter += 1;
      console.log(this.counter);
    }, 1000);
  }

  fetchUsers() {
    //before fetch
    this.globalLoaderService.showLoader();

    //start fetching
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      //after fetch
      this.globalLoaderService.hideLoader();
    });
  }

  // fetchUsers() {
  //   this.isLoading = true;

  //   setTimeout(() => {
  //     this.isLoading = false;
  //   }, 3000);
  // }
}

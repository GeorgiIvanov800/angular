import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  constructor(
    private userService: UserService,
    private activetedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activetedRoute.params.subscribe((v) => {
      const id = v['id'];

      this.userService.getSingleUser(id).subscribe((user) => {
        console.log(user);
      });
    });

    // this.userService.getSingleUser('3').subscribe((user) => {
    //   console.log(user);
    // });
  }
}

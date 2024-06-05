import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] | null = null;
  isLoading: boolean = true;

  constructor(private api: ApiService, private userService: UserService) {}

  ngOnInit(): void {
    this.api.getThemes().subscribe((themes) => {
      console.log(themes);
      this.themes = themes;

      this.isLoading = false;
    });
  }
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
}

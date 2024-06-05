import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css'],
})
export class CurrentThemeComponent implements OnInit {
  theme = {} as Theme;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // console.log('on init');

    this.api.getTheme('5fa64b6f2183ce1728ff371e').subscribe((theme) => {
      this.theme = theme;
      console.log(theme);
    });
  }
}

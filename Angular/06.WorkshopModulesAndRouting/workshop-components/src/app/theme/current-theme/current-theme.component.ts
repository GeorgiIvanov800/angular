import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css'],
})
export class CurrentThemeComponent implements OnInit {
  theme = {} as Theme;

  constructor(private api: ApiService, private activaRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // console.log('on init');
    this.activaRoute.params.subscribe((data) => {
      const id = data['themeId'];

      this.api.getTheme(id).subscribe((theme) => {
        this.theme = theme;
      });
    });
  }
}

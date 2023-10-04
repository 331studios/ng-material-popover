import {Component, HostBinding} from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';


export const DEFAULT_THEME = 'deeppurple-amber-theme';
export const APP_TITLE = '331Studios ng-material-popover';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @HostBinding('class') _themeClass: string = DEFAULT_THEME;

  title: string = APP_TITLE;

  get themeClass() {
    return this._themeClass;
  }
  set themeClass(v) {
    if (v) {
      this.overlayContainer.getContainerElement().classList.remove(this._themeClass);
      this.overlayContainer.getContainerElement().classList.add(v);
      this._themeClass = v;
    }
  }

  constructor(private overlayContainer: OverlayContainer) {
    this.overlayContainer.getContainerElement().classList.add(this.themeClass);
  }
}


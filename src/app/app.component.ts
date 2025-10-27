import { Component, HostListener } from '@angular/core';
import { FaviconService } from './favicon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private faviconService: FaviconService) {}

  triggerAlarm() {
    document.title = "🚨 Alarm! | My App";
    this.faviconService.setAlarmFavicon();
  }

  @HostListener('window:focus', [])
  reset() {
    document.title = "My App";
    this.faviconService.resetFavicon();
  }
}

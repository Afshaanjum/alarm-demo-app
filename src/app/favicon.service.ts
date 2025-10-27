import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FaviconService {
  private defaultFavicon = '/assets/favicon.ico';

  setAlarmFavicon() {
    const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8" r="4" fill="white"/>
<path d="M8 2C11.3135 2.00026 14 4.68645 14 8C13.9998 11.3133 11.3133 13.9997 8 14C4.68643 14 2.00023 11.3135 2 8C2 4.68629 4.68629 2 8 2ZM7.33301 10.666V12H8.66602V10.666H7.33301ZM7.33301 4.66602V9.33301H8.66602V4.66602H7.33301Z" fill="#D1232C"/>
</svg>

    `;
    const url = 'data:image/svg+xml;base64,' + btoa(svg);
    this.setFavicon(url);
  }

  resetFavicon() {
    this.setFavicon(this.defaultFavicon);
  }

  private setFavicon(url: string) {
    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = url;
  }
}

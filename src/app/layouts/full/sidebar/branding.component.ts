import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/">
        <img
          src="./assets/images/logos/bnm.svg"
          class="align-middle m-2"
          alt="logo"
          style="width: 220px;"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}

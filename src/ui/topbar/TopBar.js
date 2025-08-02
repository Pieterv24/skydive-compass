import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';
import { html, LitElement } from 'lit';

import styles from './TopBar.style.js';
import { ThemeMixin } from 'dark-theme-utils';

export class TopBar extends ScopedRegistryHost(ThemeMixin(LitElement)) {
  static styles = [styles];

  render() {
    return html`
      <div class="top-bar-container">
        <div class="top-bar">
          <slot class="left" name="top-bar-left-content"></slot>
          <slot class="right" name="top-bar-right-content"></slot>
        </div>
      </div>
    `;
  }
}

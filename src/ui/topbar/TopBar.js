import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { html, LitElement } from 'lit';

import styles from './TopBar.style.js';

export class TopBar extends ScopedElementsMixin(LitElement) {
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

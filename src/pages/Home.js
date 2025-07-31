import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';
import { LocalizeMixin } from '@lion/ui/localize.js';
import { html, LitElement } from 'lit';
import { MdFilledButton } from '@material/web/button/filled-button.js';
import { Router } from '@lit-labs/router';

import styles from './Home.style.js';
import { msg } from '../../translations/namespace.js';

const logo = new URL('../../assets/cropped_alti_compass.png', import.meta.url)
  .href;

export class Home extends ScopedRegistryHost(LocalizeMixin(LitElement)) {
  static localizeNamespaces = ['skydive-compass'];

  static styles = [styles];

  static elementDefinitions = {
    'md-filled-button': MdFilledButton,
  };

  static properties = {};

  render() {
    return html`
      <div class="logo"><img alt="logo" src=${logo} /></div>
      <h1>${msg('TITLE')}</h1>
      <p>${msg('DESCRIPTION')}</p>
      <md-filled-button @click=${() => (window.location = '/test')}
        >${msg('GET_STARTED')}</md-filled-button
      >
    `;
  }
}

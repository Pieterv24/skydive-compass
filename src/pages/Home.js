import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';
import { LocalizeMixin } from '@lion/ui/localize.js';
import { html, LitElement } from 'lit';

import styles from './Home.style.js';
import { msg } from '../../translations/namespace.js';
import { ThemeMixin } from 'dark-theme-utils';

const logo = new URL('../../assets/cropped_alti_compass.png', import.meta.url)
  .href;

export class Home extends ScopedRegistryHost(
  LocalizeMixin(ThemeMixin(LitElement)),
) {
  static localizeNamespaces = ['skydive-compass'];

  static styles = [styles];

  static elementDefinitions = {};

  static properties = {};

  render() {
    return html`
      <div class="logo"><img alt="logo" src=${logo} /></div>
      <h1>${msg('TITLE')}</h1>
      <p>${msg('DESCRIPTION')}</p>
      <button
        class="mx-auto items-center gap-x-4 rounded-xl bg-white- p-6 outline "
        @click=${() => (window.location = '/test')}
      >
        ${msg('GET_STARTED')}
      </button>
    `;
  }
}

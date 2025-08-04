import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';
import { LocalizeMixin } from '@lion/ui/localize.js';
import { html, LitElement } from 'lit';

import SlButton from '@shoelace-style/shoelace/dist/components/button/button.component.js';

import styles from './Home.style.js';
import { msg } from '../../translations/namespace.js';
import { ThemeMixin } from 'dark-theme-utils';

import { Button } from '../ui/components/Button.js';

const logo = new URL('../../assets/cropped_alti_compass.png', import.meta.url)
  .href;

export class Home extends ScopedRegistryHost(
  LocalizeMixin(ThemeMixin(LitElement)),
) {
  static localizeNamespaces = ['skydive-compass'];

  static styles = [styles];

  static elementDefinitions = {
    'sl-button': SlButton,
    'my-button': Button,
  };

  static properties = {};

  render() {
    return html`
      <div class="logo"><img alt="logo" src=${logo} /></div>
      <h1>${msg('TITLE')}</h1>
      <p>${msg('DESCRIPTION')}</p>
      <sl-button pill size="large" variant="primary" href="/test">
        ${msg('GET_STARTED')}
      </sl-button>
      <my-button @click=${() => (window.location = '/test2')}>
        Hello World
      </my-button>
    `;
  }
}

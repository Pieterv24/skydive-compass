import { LitElement, html } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { LocalizeMixin } from '@lion/ui/localize.js';
import { ThemeMixin, ThemeToggler } from 'dark-theme-utils';

import styles from './SkydiveCompass.style.js';
import { msg } from '../translations/namespace.js';
import { TopBar } from './ui/TopBar.js';

const logo = new URL('../assets/cropped_alti_compass.png', import.meta.url)
  .href;

export class SkydiveCompass extends ScopedElementsMixin(
  LocalizeMixin(ThemeMixin(LitElement)),
) {
  static localizeNamespaces = ['skydive-compass'];

  static styles = [styles];

  static scopedElements = {
    'theme-toggler': ThemeToggler,
    'top-bar': TopBar,
  };

  static properties = {};

  render() {
    return html`
      <top-bar>
        <div slot="top-bar-right-content">
          <theme-toggler></theme-toggler>
        </div>
      </top-bar>
      <main>
        <div class="logo"><img alt="logo" src=${logo} /></div>
        <h1>${msg('TITLE')}</h1>
        <p>${msg('DESCRIPTION')}</p>
      </main>
    `;
  }
}

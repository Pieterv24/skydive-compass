import { LitElement, html } from 'lit';
import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';
import { LocalizeMixin } from '@lion/ui/localize.js';
import { ThemeMixin, ThemeToggler } from 'dark-theme-utils';
import { Router } from '@lit-labs/router';

import styles from './SkydiveCompass.style.js';
import { TopBar } from './ui/topbar/TopBar.js';
import { Home } from './pages/Home.js';

export class SkydiveCompass extends ScopedRegistryHost(
  LocalizeMixin(ThemeMixin(LitElement)),
) {
  static localizeNamespaces = ['skydive-compass'];

  static styles = [styles];

  static elementDefinitions = {
    'theme-toggler': ThemeToggler,
    'top-bar': TopBar,
    'home-page': Home,
  };

  static properties = {};

  router = new Router(this, [
    { path: '/', render: () => html`<home-page></home-page>` },
    { path: '/test', render: () => html`<h1>Test</h1>` },
    { path: '/test2', render: () => html`<h1>Test2</h1>` },
  ]);

  render() {
    return html`
      <top-bar>
        <div slot="top-bar-right-content">
          <theme-toggler></theme-toggler>
        </div>
      </top-bar>
      <main>${this.router.outlet()}</main>
    `;
  }
}

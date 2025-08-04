import { LionButton } from '@lion/ui/button.js';
import { css } from 'lit';

export class Button extends LionButton {
  static styles = [
    ...super.styles,
    css`
      :host {
        background-color: var(--sl-color-primary-600);
        border-color: var(--sl-color-primary-600);
        color: var(--sl-color-neutral-0);

        border-radius: 32px;
        font-size: 1rem;
        padding: 0px 20px;

        min-height: var(--sl-input-height-large);
      }

      :host(:hover) {
        background-color: var(--sl-color-primary-500);
        border-color: var(--sl-color-primary-600);
        color: var(--sl-color-neutral-0);

        cursor: pointer;
      }
    `,
  ];
}

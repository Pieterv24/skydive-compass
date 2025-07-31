import { css } from 'lit';

export default css`
  :host {
    width: 100%;
  }

  .top-bar-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .top-bar {
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
    border-radius: 12px;

    margin: 16px;

    min-height: 2em;
    width: 100%;

    display: flex;
    flex-direction: row;
  }

  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    height: 100%;
    flex-grow: 1;

    padding: 0px 8px;
  }

  .left {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    height: 100%;
    flex-grow: 1;

    padding: 0px 8px;
  }
`;

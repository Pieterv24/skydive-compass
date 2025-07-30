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
    background-color: blue;
    color: white;
    border-radius: 12px;

    margin: 16px;

    min-height: 2em;
    width: 100%;
  }

  .top-bar-right-content {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
  }
`;

import { css } from 'lit';

export default css`
  :host {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    margin: 0 auto;
    text-align: center;
  }

  main {
    flex-grow: 1;
  }

  .logo {
    margin-top: 36px;
  }

  .logo img {
    max-height: 30vh;
  }
`;

import { defineCustomElements } from '../loader';
import { setStencilDocJson } from '@pxtrn/storybook-addon-docs-stencil';
import docJson from '../dist/docs.json';
import '@swisspost/design-system-styles/basics.css';

if(docJson) setStencilDocJson(docJson);
defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

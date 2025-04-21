/* eslint-disable @typescript-eslint/no-empty-object-type */
type Messages = typeof import('./locales/en.json');

declare global {
  interface IntlMessages extends Messages {}
}

import type { LocalePrefixMode } from 'next-intl/routing';

const localePrefix: LocalePrefixMode = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Nextjs Monorepo Template',
  locales: ['en', 'fr', 'pt-BR', 'pt'],
  defaultLocale: 'pt-BR',
  localePrefix,
};

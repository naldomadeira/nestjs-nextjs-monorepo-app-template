import { ModeSwitcher } from '@repo/shadcn/mode-switcher';
import { formatDate } from '@repo/utils';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Dashboard',
  });

  return {
    title: t('meta_title'),
  };
}

const Page = () => {
  const t = useTranslations('Index');

  return (
    <section className="min-h-dvh flex flex-col justify-center items-center">
      Hello world
      <br/>
      <span>{t('meta_title')}</span>
      <span>{formatDate(new Date())}</span>
      <ModeSwitcher />
    </section>
  );
};

export default Page;

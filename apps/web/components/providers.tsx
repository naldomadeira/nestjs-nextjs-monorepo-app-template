import { auth } from '@/auth';
import { ThemeProvider } from '@repo/shadcn/themes-provider';
import { SessionProvider } from 'next-auth/react';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { ReactNode } from 'react';
import { Toaster } from '@repo/shadcn/sonner';

type ProvidersProps = {
  children: ReactNode;
};
const Providers = async ({ children }: Readonly<ProvidersProps>) => {
  const session = await auth();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      <SessionProvider session={session}>
        <NuqsAdapter>{children}</NuqsAdapter>
        <Toaster />
      </SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;

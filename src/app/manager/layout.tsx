'use client';

import { useRouter } from 'next/navigation';
import { useUser } from '../../components/Providers/UserProvider';
import { useLayoutEffect } from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user } = useUser();

  useLayoutEffect(() => {
    if (user) {
      switch (user.type) {
        case 'provider':
          router.push('/provider');
          break;
        default:
          break;
      }
    }
  }, [user, router]);

  if (!user) {
    router.push('/');
    return null;
  }

  return <>{children}</>;
}

export default Layout;

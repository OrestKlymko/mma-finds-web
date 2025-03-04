'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    router.push(pathname + '/balance');
  }, [pathname, router]);

  return null;
}

export default Page;

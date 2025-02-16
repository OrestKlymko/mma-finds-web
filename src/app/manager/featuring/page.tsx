"use client";

import { usePathname, useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const pathname = usePathname();
  router.push(pathname + "/balance");
  return <></>;
}

export default Page;

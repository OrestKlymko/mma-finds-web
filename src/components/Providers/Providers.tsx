import { ReactNode } from "react";
import { ModalProvider } from "./ModalProvider";
import { UserProvider } from "./UserProvider";

function Providers({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <ModalProvider>{children}</ModalProvider>
    </UserProvider>
  );
}

export default Providers;

import { ReactNode } from "react";
import { ModalProvider } from "./ModalProvider";

function Providers({ children }: { children: ReactNode }) {
  return <ModalProvider>{children}</ModalProvider>;
}

export default Providers;

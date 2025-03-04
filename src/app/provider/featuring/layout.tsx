import { ReactNode } from "react";
import SideBar from "./_components/SideBar/SideBar";
import Breadcrumbs from "../../../components/Breadcrums/Breadcrums";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <section className="bg-black flex flex-col items-center justify-center  min-h-[240px]  gap-2">
        <h1 className="text-white text-3xl">MMA Finds Center</h1>
      </section>
      <section className="py-4 border-b-2 border-t-2 border-gray px-4">
        <Breadcrumbs />
      </section>
      <section className="py-12 px-4">
        <div className="max-w-screen-xl mx-auto flex gap-4">
          <SideBar />
          {children}
        </div>
      </section>
    </>
  );
}

export default Layout;

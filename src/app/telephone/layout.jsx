import dynamic from "next/dynamic";

const DrawerSide = dynamic(() => import("@/app/components/drawer"));
const Navbar = dynamic(() => import("@/app/components/navbar"));

export const metadata = {
  title: "Alfacare",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content justify-center bg-gray-100">
        <Navbar />
        <div className="m-10">{children}</div>
      </div>
      <DrawerSide />
    </div>
  );
}

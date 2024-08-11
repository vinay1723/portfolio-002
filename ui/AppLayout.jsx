import { Outlet } from "react-router";
import Header from "../src/components/Header";
// import Footer from "../src/components/Footer";
function AppLayout() {
  return (
    <div className="h-[100vh] w-[100vh]">
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-full">
          <Outlet />
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;

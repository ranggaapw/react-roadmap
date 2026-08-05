import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main>
        <h1>{children}</h1>
      </main>
    </>
  );
}

export default DashboardLayout;

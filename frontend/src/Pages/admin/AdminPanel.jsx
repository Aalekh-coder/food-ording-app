import { sidebarItems } from "@/config";
import { Link, Outlet } from "react-router";

const AdminPanel = () => {
  return (
    <div className="flex ">
      <div className="h-[100vh] w-[20vw] border-r">
        <h1
          className="font-bold text-rose-500 text-3xl text-center mt-4"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          the Masala Story
        </h1>

        <div className="mt-14">
          {sidebarItems?.map((item, index) => (
            <Link
              key={index}
              className="flex items-center px-2 gap-2 py-5 border-b hover:bg-rose-100 duration-200 font-medium text-gray-700"
              to={item?.path}
            >
              <item.icon></item.icon>
              {item?.label}
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminPanel;

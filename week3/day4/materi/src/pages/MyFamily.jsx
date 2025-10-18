import { Outlet, NavLink } from "react-router-dom";

function MyFamily() {
  return (
    <section className="flex flex-col items-center container mx-auto px-6 py-12 text-center pt-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">My Family</h1>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Meet the most important people in my life.
      </p>

      <div className="flex justify-center gap-6 mb-10">
        <NavLink
          to="MyParents"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-600 text-white px-6 py-2 rounded-lg font-medium"
              : "border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50"
          }
        >
          My Parents
        </NavLink>
        <NavLink
          to="MySiblings"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-600 text-white px-6 py-2 rounded-lg font-medium"
              : "border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50"
          }
        >
          My Siblings
        </NavLink>
      </div>


      <div className="mt-8">
        <Outlet />
      </div>
    </section>
  );
}

export default MyFamily;

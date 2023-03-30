import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="navbar md:w-8/12 mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-2xl font-bold">
            Knowledge Hunter
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://cdn-icons-png.flaticon.com/512/146/146021.png?w=740&t=st=1680200353~exp=1680200953~hmac=7d460c4877aaf1186f9a85ade142dc40d4c9a47d3f4ff180a4508c36cec70435" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="w-8/12 h-2 mx-auto"/>
    </>
  );
};

export default Header;

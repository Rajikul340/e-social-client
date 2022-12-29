import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthUser } from "../../AuthContext/AuthContext";

const Header = () => {
  const { logOut, user } = useContext(AuthUser);
  const [userdata, setUserdata] = useState([]);
  const handleLogOut = () => {
    logOut().then().catch();
  };

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        const filterdata = data.filter(
          (newdata) => newdata.email === user.email
        );
        setUserdata(filterdata);
      });
  }, [user.email]);

  console.log();

  const menuItem = (
    <>
      <li className="lg:mx-10 lg:hover:text-[#2733FA]">
        <Link to="/media">Media</Link>
      </li>
      <li className="lg:mx-10 lg:hover:text-[#2733FA]">
        {" "}
        <Link to="/message">Message</Link>
      </li>

      <li className="lg:mx-10 lg:hover:text-[#2733FA]">
        {userdata.map((singledata) => (
          <Link to={`/about/${singledata._id}`}>About</Link>
        ))}
      </li>
      {user?.email ? (
        <>
          <li className="lg:mx-10 lg:hover:text-[#2733FA]">
            {" "}
            <button onClick={handleLogOut}>signOut</button>
          </li>
          <img
            title={user?.displayName}
            src={user?.photoURL}
            alt=""
            referrerPolicy="no-referrer"
            className="w-10 userImg h-10"
          />
        </>
      ) : (
        <>
          <li className="lg:mx-10 lg:hover:text-[#2733FA]">
            {" "}
            <Link to="/register">Register</Link>
          </li>
          <li className="lg:mx-10 lg:hover:text-[#2733FA]">
            {" "}
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar ">
        <div className="navbar-start ">
          <Link
            to="/"
            className=" normal-case text-xl text-[#2733FA] font-semibold"
          >
            e-SOCIAL
          </Link>
        </div>
        <ul className="navbar-center  lg:flex  hidden  lg:block">{menuItem}</ul>

        <div className="navbar-end     lg:hidden">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 
                shadow bg-base-100 rounded-box w-48"
            >
              {menuItem}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

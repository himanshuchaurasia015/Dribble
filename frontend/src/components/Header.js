import react,{ useContext } from "react";
import { userContext } from "../context/userContext";

const Header = () => {
  const values=useContext(userContext)
  console.log(values.profile)
  const profile = values.profile

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center">
          <p className="h-6 mr-4 text-gray-600" >dribble</p>
          <ul className="hidden md:flex  space-x-6">
            <li>
              <a href="/" className="text-gray-600 hover:text-gray-800">
                Inspiration
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-600 hover:text-gray-800">
                Find Work
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-600 hover:text-gray-800">
                Learn Design
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-600 hover:text-gray-800">
                Go Pro
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-600 hover:text-gray-800">
                Hire Designers
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">Search</button>
          <img
              src={profile}
              alt="Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
            Upload
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
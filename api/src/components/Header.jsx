import React, { useEffect, useState } from "react";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";
import Logo from "../Images/images-removebg-preview.png";

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
        console.log("Sign out successful:", data.message);
        navigate("/sign-in");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
    setSearchTerm(""); // Clear the search term
  };

  return (
    <Navbar className="border-b-2">
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-20" />
          <div className="ml-3 text-left">
            <span className="block text-xl font-semibold text-gray-800 dark:text-white">
              អគ្គាធិការដ្ឋាន
            </span>
            <span className="block text-xl font-semibold text-gray-800 dark:text-white">
              ក្រសួងមហាផ្ទៃ
            </span>
          </div>
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex-1 max-w-sm mx-auto relative"
      >
        <div className="relative">
          <TextInput
            type="text"
            placeholder="ស្វែងរក..."
            rightIcon={AiOutlineSearch}
            className="w-full pr-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            type="button"
            onClick={handleSubmit}
            className="absolute right-0 top-0 h-full px-3"
            style={{ cursor: "pointer" }}
          >
            <AiOutlineSearch />
          </Button>
        </div>
      </form>
      <div className="flex gap-2 md:order-2 items-center">
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm text-gray-800 dark:text-white">
                @{currentUser.username}
              </span>
              <span className="block text-sm font-medium text-gray-600 dark:text-gray-300 truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="mr-5">
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link
            to="/"
            className={`text-lg font-semibold text-gray-800 dark:text-white 
              hover:text-blue-600 dark:hover:text-blue-400 
              focus:text-blue-600 dark:focus:text-blue-400`}
          >
            ទំព័រដើម
          </Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/"} as={"div"}>
          <Link
            to="/"
            className={`text-lg font-semibold text-gray-800 dark:text-white 
              hover:text-blue-600 dark:hover:text-blue-400 
              focus:text-blue-600 dark:focus:text-blue-400`}
          >
            ព័ត៌មាន
          </Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/"} as={"div"}>
          <Link
            to="/"
            className={`text-lg font-semibold text-gray-800 dark:text-white 
              hover:text-blue-600 dark:hover:text-blue-400 
              focus:text-blue-600 dark:focus:text-blue-400`}
          >
            អំពីអគ្គាធិការដ្ឋាន

          </Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/"} as={"div"}>
          <Link
            to="/"
            className={`text-lg font-semibold text-gray-800 dark:text-white 
              hover:text-blue-600 dark:hover:text-blue-400 
              focus:text-blue-600 dark:focus:text-blue-400`}
          >
            ឯកសារគតិយុត្ត
          </Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/"} as={"div"}>
          <Link
            to="/"
            className={`text-lg font-semibold text-gray-800 dark:text-white 
              hover:text-blue-600 dark:hover:text-blue-400 
              focus:text-blue-600 dark:focus:text-blue-400`}
          >
           ទំនាក់ទំនង
          </Link>
        </Navbar.Link>
        
        

      </Navbar.Collapse>
    </Navbar>
  );
}

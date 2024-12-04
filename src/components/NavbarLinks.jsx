import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/aboute",
    text: "Aboute",
  },
  {
    id: 3,
    path: "/contact",
    text: "Contact",
  },
];
function NavbarLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link to={link.path} key={link.id}>
            {link.text}
          </Link>
        );
      })}
    </>
  );
}

export default NavbarLinks;

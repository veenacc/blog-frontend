import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header()
{
  return(
    <div>
      <header>
        {/* <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a> */}
        <Link to="/">Home</Link> | <Link to="/signup">Signup</Link> | 
        <Link to="/Login">Login</Link> | <LogoutLink /> | <Link to="/Posts/Newpost">Create New post</Link>
      </header>
     
    </div>
  );
}
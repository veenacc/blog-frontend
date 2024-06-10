import { Link } from "react-router-dom";

export function Header()
{
  return(
    <div>
      <header>
        {/* <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a> */}
        <Link to="/signup">Signup</Link> | <Link to="/Login">Login</Link> | <Link to="/LogoutLink">Logout</Link> |<Link to="/Newpost">Create New post</Link>
      </header>
     
    </div>
  );
}
// import { Content } from "./Content";
// import { Footer } from "./Footer";
// import { Header } from "./Header";
// import {Newpost} from "./Newpost";

function Header()
{
  return(
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>
    </div>
  );
}

 function Footer() {
  return (

    <footer>
      <p>Copyright 20XX</p>
    </footer>

  );
}
 function Newpost() {
  return (
    <div id="posts-new">
      <h1>New post</h1>

      <form>
        <label htmlFor="title">Title</label><br />
        <input type="text" id="title" name="title"></input><br />
        <label htmlFor="body">Body</label><br />
        <input type="text" id="body" name="body"></input><br />
        <label htmlFor="image">Image</label><br />
        <input type="url"></input>
        {/*Can add id and name */}
      </form>

    </div>
  );
}

function Allposts(props)
{
  return(
    <div>
      <h1>All Posts</h1>
      {props.posts.map(post => (
        <div key ={post.id} className="posts"> 
          <h2>{post.title}</h2>
          <h4>{post.body}</h4>
          <img src={post.image} />
        </div>

      ))}
    </div>
  );
}

 function Content() {
  let posts = [
    {
      id: 1,
      title: "Coconuts",
      body: "This is a coconut.coconut trees are tall.",
      image: "https://draxe.com/wp-content/uploads/2022/12/DrAxeEatingCoconutsHeader.jpg"
    },
    {
      id: 2,
      title: "Walnuts",
      body: "Walnuts are healthy.They are hard to crack.",
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/walnuts44-b703db9.jpg?quality=90&resize=398,361"
    }
  ];
  return (
    <div>
      <Newpost />
      <Allposts posts={posts} />
    </div>
  );
}


function App() {
  return (
    <div>
      
      <Header />
      <Content />
      <Footer />
    
    </div>
  );
}

export default App;

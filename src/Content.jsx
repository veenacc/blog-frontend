import { Allposts } from "./Allposts";
import { Newpost } from "./Newpost";
import axios from "axios";



export function Content() {
  // let posts = [
  //   {
  //     id: 1,
  //     title: "Coconuts",
  //     body: "This is a coconut.coconut trees are tall.",
  //     image: "https://draxe.com/wp-content/uploads/2022/12/DrAxeEatingCoconutsHeader.jpg"
  //   },
  //   {
  //     id: 2,
  //     title: "Walnuts",
  //     body: "Walnuts are healthy.They are hard to crack.",
  //     image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/walnuts44-b703db9.jpg?quality=90&resize=398,361"
  //   }
  // ];
  let posts = [];

  const handleAllposts = () =>{
    console.log("Button clicked");
    axios.get("http://localhost:3000/posts.json").then(
      response => {
        console.log(response.data);
        console.log("I'm in function handleAllposts");
      }
    )
    
  }

  return (
    <main> 
      {/* change div tag to main for styling purpose */}
      <Newpost />
      <button onClick={handleAllposts}>Get Data</button>
      <Allposts posts={posts} />
    </main>
  );
}

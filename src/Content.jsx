import { Allposts } from "./Allposts";
import { Newpost } from "./Newpost";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { PostShow } from "./PostShow";



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
  // let posts = [];
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  // function to establish connection to rails server and get data from backend rails
  const handleAllposts = () =>{
    console.log("Button clicked");
    axios.get("http://localhost:3000/posts.json").then(
      response => {
        console.log(response.data);
        console.log("I'm in function handleAllposts");
        setPosts(response.data);
      }
    )
    
  }

  // start : functions to handle modal, sets show to true or false
  const handleShowPost = (post) => {
    setCurrentPost(post);
    setIsPostsShowVisible(true);
    
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };
  // End : functions to handle modal, sets show to true or false

//start : function that will do the post action//
  const handleCreatePost =(params) =>{
    axios.post("http://localhost:3000/posts.json", params).then(
      response =>{
        console.log(response.data);
        setPosts([...posts,response.data]);
      });
  }
//end

//start : function that will do the Patch action//
const handleUpdatePost =(params) =>{
  axios.patch(`http://localhost:3000/posts/${currentPost.id}.json`, params).then(
    response =>{
      console.log(response.data);
      // setPosts([...posts,response.data]);
      handleClose();
    });
}
//end

//start : function that will do the Delete action//
// const handleCreatePost =(params) =>{
//   axios.post("http://localhost:3000/posts.json", params).then(
//     response =>{
//       console.log(response.data);
//       setPosts([...posts,response.data]);
//     });
// }
//end
  
  useEffect(handleAllposts, []);

  return (
    <main> 
      {/* change div tag to main for styling purpose */}
      <Newpost onCreatePost={handleCreatePost}/>
      {/* <button onClick={handleAllposts}>Get Data</button> */}
      <Allposts posts={posts}  onShowPost={handleShowPost}/>
      <Modal show={isPostsShowVisible} onClose={handleClose}  > 
        <PostShow post={currentPost} onUpdatePost={handleUpdatePost} />
      </Modal>
    </main>
  );
}

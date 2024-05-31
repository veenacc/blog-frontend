


export function Newpost(props) {

  const handleSubmit=(event)=>{
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params); //creating an event that has to be listened by the create recipe in content
    event.target.reset();    //clears the form on submit 
  }
  return (

    <div id="posts-new">
      <h1>New post</h1>

      {/* <form method="Post" action="http://localhost:3000/posts.json"> */}
      <form onSubmit={handleSubmit}>
        <div>
          Title:<input type="text" name="title" />
        
        </div>
        <div>
          Body:<input type="text" name="body" />
        
        </div>
        <div>
          Image:<input type="url" name="image" />
        
        </div>
        <div>
          <button type="submit" >submit</button>
        </div>
        
        {/*Can add id and name */}
      </form>

    </div>
  );
}

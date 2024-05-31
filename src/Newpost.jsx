export function Newpost() {
  return (
    <div id="posts-new">
      <h1>New post</h1>

      <form method="Post" action="http://localhost:3000/posts.json">
        <div>
          Title:<input type="text" name="title" />
        
        </div>
        <div>
          Body:<input type="text" name="Body" />
        
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

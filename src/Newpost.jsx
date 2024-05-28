export function Newpost() {
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

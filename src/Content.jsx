import { Allposts } from "./Allposts";
import { Newpost } from "./Newpost";

export function Content() {
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

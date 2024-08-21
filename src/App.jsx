import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <div className="tw-cards">
      <TwitterFollowCard userName={"github"} name={"Git hub"} isFollowing/>
      <TwitterFollowCard userName={"git"} name={"Git"} isFollowing={false}/>
      <TwitterFollowCard userName={"nodejs"} name={"node js"} isFollowing={false}/>
    </div>
  );
}

import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  let formatUserName = userName => `@${userName}`
  return (
    <div className="tw-cards">
      <TwitterFollowCard formatUserName={formatUserName} userName={"github"} name={"Git hub"} isFollowing/>
      <TwitterFollowCard formatUserName={formatUserName} userName={"git"} name={"Git"} isFollowing={false}/>
      <TwitterFollowCard formatUserName={formatUserName} userName={"nodejs"} name={"node js"} isFollowing={false}/>
    </div>
  );
}

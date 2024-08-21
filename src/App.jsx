import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  let formatUserName = userName => `@${userName}`
  return (
    <div className="tw-cards">
      <TwitterFollowCard formatUserName={formatUserName} userName={"github"} isFollowing>
        Git Hub
      </TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} isFollowing={false}>
        Git
      </TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} userName={"nodejs"} isFollowing={false}>
        node js
      </TwitterFollowCard>
    </div>
  );
}

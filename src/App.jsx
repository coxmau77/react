import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  let formatUserName = userName => `@${userName}`
  return (
    <div className="tw-cards">
      <TwitterFollowCard formatUserName={formatUserName} isFollowing={false}>
        Google
      </TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} userName={"react"} isFollowing>
        React js
      </TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} userName={"netflix"} isFollowing={false}>
        Netflix
      </TwitterFollowCard>
    </div>
  );
}

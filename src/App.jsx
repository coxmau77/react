import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  let formatUserName = userName => `@${userName}`
  return (
    <div className="tw-cards">
      <TwitterFollowCard formatUserName={formatUserName}>
        Google
      </TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} userName={"react"}>
        React js
      </TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} userName={"netflix"}>
        Netflix
      </TwitterFollowCard>
    </div>
  );
}

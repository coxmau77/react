import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  let formatUserName = userName => `@${userName}`
  const git = { formatUserName: formatUserName, isFollowing:false }
  const github = { formatUserName: formatUserName, userName: "github", isFollowing: true }
  const node = { formatUserName: formatUserName, userName: "nodejs", isFollowing: false }

  return (
    <div className="tw-cards">
      <TwitterFollowCard {... git}>
        Git
      </TwitterFollowCard>
      <TwitterFollowCard {... github}>
        Git Hub
      </TwitterFollowCard>
      <TwitterFollowCard {... node}>
        node js
      </TwitterFollowCard>
    </div>
  );
}

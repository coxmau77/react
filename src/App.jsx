import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <div className="tw-cards">
      <TwitterFollowCard userName={"maucox"} name={"Mauricio Cox"} />
      <TwitterFollowCard userName={"midudev"} name={"Miguel Angel"} />
      <TwitterFollowCard userName={"github"} name={"Git Hub"} />
      <TwitterFollowCard userName={"overwatch"} name={"Overwatch"} />
    </div>
  );
}

import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

const users = [
  {
    name: "marcos",
    userName: "marcos03",
    isFollowing: false,
  },
  {
    name: "enrique",
    userName: "enr1que",
    isFollowing: true,
  },
  {
    name: "matias",
    userName: "mati41",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}

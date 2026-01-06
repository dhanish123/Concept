//dont load entire app , only what needed ,& when needed
import { lazy, Suspense, useState } from "react";  //lazy() = load when it needed
                                                    //suspense = what show when lazy comp loading
const Profile = lazy(() => import("./Profile"));
const Stats = lazy(() => import("./Stats"));
const Settings = lazy(() => import("./Settings"));

function Dashboard() {
  const [page, setPage] = useState("profile");

  return (
    <div>
      <nav>
        <button onClick={() => setPage("profile")}>Profile</button>
        <button onClick={() => setPage("stats")}>Stats</button>
        <button onClick={() => setPage("settings")}>Settings</button>
      </nav>

      <Suspense fallback={<div>Loading section...</div>}>
        {page === "profile" && <Profile />}
        {page === "stats" && <Stats />}
        {page === "settings" && <Settings />}
      </Suspense>
    </div>
  );
}

export default Dashboard;

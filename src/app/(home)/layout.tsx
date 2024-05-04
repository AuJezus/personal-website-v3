import LatestTrack from "@/components/nav/latest-track";
import MyStatus from "@/components/nav/my-status";
import { NavHome } from "@/components/nav/nav-wrappers";

export const revalidate = 30;

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavHome>
        <MyStatus />
        <LatestTrack className="max-w-64" />
      </NavHome>

      {children}
    </>
  );
}

export default HomeLayout;

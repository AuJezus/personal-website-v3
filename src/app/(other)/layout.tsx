import LatestTrack from "@/components/latest-track";
import MyStatus from "@/components/my-status";
import {
  NavColumn,
  NavLinks,
  NavLogo,
  links,
} from "@/components/nav/nav-components";
import { NavOther } from "@/components/nav/nav-wrappers";

export const revalidate = 30;

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavOther>
        <NavLogo />

        <NavLinks links={links} isBorder={true} />

        <NavColumn>
          <MyStatus />
          <LatestTrack className="max-w-64" />
        </NavColumn>
      </NavOther>

      {children}
    </>
  );
}

export default HomeLayout;

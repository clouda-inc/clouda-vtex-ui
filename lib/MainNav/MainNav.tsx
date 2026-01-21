import TopBar, { type TopBarProps } from '../TopBar/TopBar';
import MainHeader, { type MainHeaderProps } from '../MainHeader/MainHeader';
import SubHeader, { type SubHeaderProps } from '../SubHeader/SubHeader';
import Breadcrumb, { type BreadcrumbProps } from '../Breadcrumb/Breadcrumb';


export interface MainNavProps {
  topBarProps?: TopBarProps;
  mainHeaderProps?: MainHeaderProps;
  subHeaderProps?: SubHeaderProps;
  breadcrumbProps?: BreadcrumbProps;
}

const MainNav = ({
  topBarProps,
  mainHeaderProps,
  subHeaderProps,
  breadcrumbProps
}: MainNavProps) => {
  return (
    <div className="flex flex-col w-full font-sans shadow-sm">
      <TopBar {...topBarProps} />
      <MainHeader {...mainHeaderProps} />
      <SubHeader {...subHeaderProps} />
      <Breadcrumb {...breadcrumbProps} />
    </div>
  );
};

export default MainNav;


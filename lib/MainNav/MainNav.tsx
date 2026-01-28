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
  topBarProps = {
    brandLogos: [
      { src: '/assets/images/logoipsum-4.png', alt: 'Brand 1' },
      { src: '/assets/images/logoipsum-2.png', alt: 'Brand 2' },
    ],
    utilityLinkLabel: 'Support Center',
    utilityLinkUrl: '#',
    backgroundColor: '#020617', // slate-950
    textColor: '#f8fafc' // slate-50
  },
  mainHeaderProps = {
    logoIcon: '/assets/images/logoipsum-1.png', // Main Brand
    navItems: [
      { label: 'New Arrivals', href: '#', hasDropdown: true },
      { label: 'Women', href: '#', hasDropdown: true },
      { label: 'Men', href: '#', hasDropdown: true },
      { label: 'Kids', href: '#', hasDropdown: true },
      { label: 'Sale', href: '#', hasDropdown: false },
    ]
  },
  subHeaderProps = {
    logoSrc: '', // No logo in subheader to avoid repetition
    menuItems: [
      { label: 'Clothing', href: '#', hasDropdown: true },
      { label: 'Shoes', href: '#' },
      { label: 'Accessories', href: '#' },
      { label: 'Sportswear', href: '#' },
    ],
    secondaryActionLabel: 'Find a Store',
    primaryActionLabel: 'Track Order',
    backgroundColor: '#f8fafc', // slate-50
    textColor: '#475569' // slate-600
  },
  breadcrumbProps = {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Clothing', href: '#' },
      { label: 'Men', href: '#' },
      { label: 'New Arrivals', href: '#' },
    ],
    backgroundColor: '#f1f5f9', // slate-100
    textColor: '#475569', // slate-600
    separatorColor: '#475569' // slate-600
  }
}: MainNavProps) => {
  return (
    <div className="flex flex-col w-full font-sans shadow-sm">
      <TopBar {...topBarProps} />
      <MainHeader {...mainHeaderProps} />
      <SubHeader {...subHeaderProps} />
      {breadcrumbProps && <Breadcrumb {...breadcrumbProps} />}
    </div>
  );
};

export default MainNav;


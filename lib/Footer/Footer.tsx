import { CTABanner } from '../CTABanner/CTABanner';
import { InfoBanner } from '../InfoBanner/InfoBanner';
import { Newsletter } from '../Newsletter/Newsletter';
import { MainFooter } from '../MainFooter/MainFooter';

export const Footer: React.FC = () => {
    // Define mock data or default props here for the subcomponents
    const aboutLinks = [
      { label: 'Our Story', href: '#' },
      { label: 'Work With Us', href: '#' },
      { label: 'News and Events', href: '#' },
      { label: 'Blogs', href: '#' },
    ];

    const quickLinks = [
         { label: 'Industries', href: '#' },
    ];

  return (
    <div className="flex flex-col w-full">
      <CTABanner 
         title="Happy to discuss about your requirement"
         description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
         primaryButtonText="Request a Demo"
         secondaryButtonText="Request a Free Site Visit"
      />
      <InfoBanner 
         text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
         buttonText="Contact Us"
      />
      <Newsletter 
         title="Join Our Email List"
         description="Stay current on newsworthy trends, thought leadership, product releases, events, and more by signing up to receive our direct communications customized by industry."
      />
      <MainFooter 
        quickLinks={quickLinks}
        aboutLinks={aboutLinks}
      />
    </div>
  );
};

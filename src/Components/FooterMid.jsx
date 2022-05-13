import React from 'react';
import FooterListsLink from './FooterListsLink';

const FooterMid = () => {
  return (
    <div className="my-4 py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
      <FooterListsLink
        title="About Nitendo"
        linksList={[
          { id: 1, name: 'Careers' },
          { id: 2, name: 'Corporate Social Responsibility' },
        ]}
      />
      <FooterListsLink
        title="Shop"
        linksList={[
          { id: 1, name: 'Games' },
          { id: 2, name: 'Hardware' },
          { id: 3, name: 'Merchandise' },
          { id: 4, name: 'Sales & deals' },
          { id: 5, name: 'Exclusives' },
          { id: 6, name: 'Online service' },
          { id: 7, name: 'Nintendo NY store' },
        ]}
      />
      <FooterListsLink
        title="My Nintendo Store orders"
        linksList={[
          { id: 1, name: 'Order details' },
          { id: 2, name: 'Shipping info' },
          { id: 3, name: 'Returns & exchanges' },
          { id: 4, name: 'FAQ' },
        ]}
      />
      <FooterListsLink
        title="Support"
        linksList={[
          { id: 1, name: 'Nintendo Switch' },
          { id: 2, name: 'Nintendo Account' },
          { id: 3, name: 'Other systems' },
          { id: 4, name: 'Repairs' },
          { id: 5, name: 'Nintendo product recycling' },
        ]}
      />
      <div className="flex flex-col gap-8">
        <FooterListsLink
          title="Parents"
          linksList={[
            { id: 1, name: 'Info for parents' },
            { id: 2, name: 'Parental controls' },
          ]}
        />
        <FooterListsLink
          title="Privacy"
          linksList={[
            { id: 1, name: 'Privacy policy' },
            { id: 2, name: 'Cookies and interest-based ads' },
          ]}
        />
      </div>
      <FooterListsLink
        title="Community"
        linksList={[
          { id: 1, name: 'Community guidelines' },
          { id: 2, name: 'Online safety principles' },
        ]}
      />
    </div>
  );
};

export default FooterMid;

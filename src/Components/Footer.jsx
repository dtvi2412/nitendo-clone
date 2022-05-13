import React from 'react';
import FooterBottom from './FooterBottom.jsx';
import FooterMid from './FooterMid.jsx';

import FooterTop from './FooterTop.jsx';
const Footer = () => {
  return (
    <div>
      {/*Footer Top */}
      <FooterTop />
      <FooterMid />
      <FooterBottom />
    </div>
  );
};

export default Footer;

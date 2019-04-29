import '../../styles/components/shared/Footer.css';

import React from 'react';

const componentName = 'footer';

const Footer = () => { 
  return (
    <div className={componentName}>
      <div className={`${componentName}__container`}>
        create with by <strong>lukyhenson</strong>
      </div>
    </div>
  );
}

export default Footer;

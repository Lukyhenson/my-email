import '../../styles/components/shared/Content.css';

import React from 'react';

const componentName = 'content';

const Content = props => {
  return (
    <div className={componentName}>
      <div className={`${componentName}__container`}>
        {props.children}
      </div>
    </div>
  )
}

export default Content;

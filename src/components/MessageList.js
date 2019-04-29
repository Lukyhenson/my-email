import '../styles/components/MessageList.css';

import React from 'react';

const componentName = 'message-list';

const MessageList = ({ mails }) => {
  return (
    <ul className={componentName}>
      {mails.map(({id, author, message, title}) => (
        <li key={id} className={`${componentName}__mail`}>
          <div className={`${componentName}__mail-container`}>
            <div className={`${componentName}__mail-content`}>
              <strong className={`${componentName}__mail-title`}>{`${author} - ${title}`}</strong>
              <p className={`${componentName}__mail-body`}>{message}</p>
            </div>
            <div className={`${componentName}__mail-status`}>
              <span className={`${componentName}__mail-status--to-read`}></span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MessageList;

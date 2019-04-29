import '../styles/root.css';

import React, { Component } from 'react';

import Content from '../components/shared/Content';
import Footer from '../components/shared/Footer';
import MessageList from '../components/MessageList';
import NavBar from '../components/shared/NavBar';

const mails = [
  { id: 1, author: 'Eleven', message: 'We often have to keep components that start simple but grow into an unmanageable mess of logic with state and side effects.', title: 'Stranger Things' },
  { id: 2, author: 'Eleven', message: 'We often have to keep components that start simple but grow into an unmanageable mess of logic with state and side effects.', title: 'Stranger Things' },
  { id: 3, author: 'Eleven', message: 'We often have to keep components that start simple but grow into an unmanageable mess of logic with state and side effects.', title: 'Stranger Things' },
  { id: 4, author: 'Eleven', message: 'We often have to keep components that start simple but grow into an unmanageable mess of logic with state and side effects.', title: 'Stranger Things' },
  { id: 5, author: 'Eleven', message: 'We often have to keep components that start simple but grow into an unmanageable mess of logic with state and side effects.', title: 'Stranger Things' },
  { id: 6, author: 'Eleven', message: 'We often have to keep components that start simple but grow into an unmanageable mess of logic with state and side effects.', title: 'Stranger Things' },
  { id: 7, author: 'Eleven', message: 'We often have to keep components that start simple but grow into an unmanageable mess of logic with state and side effects.', title: 'Stranger Things' },
  { id: 8, author: 'Eleven', message: 'We often have to keep components that start simple but grow into an unmanageable mess of logic with state and side effects.', title: 'Stranger Things' },
  { id: 9, author: 'Eleven', message: 'We often have to keep components that start simple but grow into an unmanageable mess of logic with state and side effects.', title: 'Stranger Things' }
]

const componentName = 'root';

class Root extends Component {
  state = {
    currentUser: 'Kathleen Lorrayne'
  };

  render() {
    const { currentUser } = this.state;
    
    return (
      <div className={componentName}>
        <NavBar currentUser={currentUser} />
        <Content>
          <MessageList mails={mails} />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default Root;

import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

function Layout() {
  return (
    <React.Fragment>
      <section>
        <div className="layout">
          <div className="header centered">
            <Header />
          </div>
          <div className="body centered">
            <Body />
          </div>
          <div className="footer centered">
            <Footer />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Layout;
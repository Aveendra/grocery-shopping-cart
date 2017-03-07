import React from 'react';
import styleable from 'react-styleable';
// import coreStyles from '../../../styles/core.scss';
// import css from './footer-inner.scss';
import css from '../../../styles/sass/style.scss';
import FooterCopyrights from '../footer-copyrights/footer-copyrights.js';

const FooterInner = () => (
  <div className={`hc ${css.hc}`}>
    <footer className={css['inner-page']}>
      <FooterCopyrights />
    </footer>
  </div>
);

FooterInner.propTypes = {};

export default styleable(css)(FooterInner);

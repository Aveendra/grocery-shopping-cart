import React from 'react';
import styleable from 'react-styleable';
// import coreStyles from '../../../styles/core.scss';
// import css from './welcome.scss';
import css from '../../../styles/sass/style.scss';

const Welcome = () => (
  <section id={css['welcome-window']}>
  	<div className='container'>
  		<h1 className={css.heading}>Experience Personalised Shopping</h1>
  		<div className={css.steps}>
  			<div className='row'>
  				<div className={`${css.wrap} col-xs-12 col-md-10`}>
  					<div className={`${css.block} ${css['step-1']} col-xs-4`}>
  						<div className={css.icon}>
  							<img src='./ico/font-icon/hand-down.png' />
  						</div>
  						<div className={css.txt}>
  							<p>Pick your weekly groceries from the products below.</p>
  						</div>
  					</div>
  					<div className={`${css.block} ${css['step-2']} col-xs-4`}>
  						<div className={css.icon}>
  							<img src='./ico/font-icon/headphone.png' />
  						</div>
  						<div className={css.txt}>
  							<p>If you can’t find something tell us. We will deliver anyway.</p>
  						</div>
  					</div>
  					<div className={`${css.block} ${css['step-3']} col-xs-4`}>
  						<div className={css.icon}>
  							<img src='./ico/font-icon/light-bulb.png' />
  						</div>
  						<div className={css.txt}>
  							<p>Next time, we will make sure those products are in.</p>
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>
  </section>
);

Welcome.propTypes = {};

export default styleable(css)(Welcome);

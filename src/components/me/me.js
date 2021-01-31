// import { render } from '@testing-library/react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import BubbleBounce from '../common/bubbleBounce/bubbleBounce';
import './me.css';

const Me = () => {

	return (
		<>
			<div className='my-profile-container'>
				<p>
					My name is Jorge Fernando Toledo Ramirez, yeah I know it's a long name, but that's my full name
					and I'm proud of it, however some people call me just Fernando or Fer... 
				</p>
				<p>
					Proident excepteur ullamco dolore reprehenderit culpa enim incididunt cillum esse. In labore excepteur esse do eiusmod nisi id exercitation aute ea incididunt voluptate. Qui id Lorem et officia aliquip fugiat sit mollit eu sint eu cupidatat sint. Duis ad eu commodo veniam. Tempor in non sint culpa et laborum dolore ipsum ipsum proident. Non aute laborum eu non ullamco reprehenderit culpa enim officia duis. Velit exercitation eu aliquip adipisicing dolore Lorem irure duis fugiat id.
				</p>
				<p>
					Aliqua commodo exercitation magna laborum. Laborum fugiat eiusmod occaecat proident exercitation amet ipsum ipsum. Proident do consequat occaecat excepteur deserunt ut nulla adipisicing cupidatat minim nisi proident occaecat. Id qui eiusmod aliquip elit enim et adipisicing tempor velit et. Tempor qui quis eiusmod incididunt magna nostrud aute consectetur excepteur minim magna fugiat tempor.
				</p>
				<p>
					Proident aute nostrud culpa id laboris pariatur qui voluptate eu non. Irure aliqua ipsum deserunt occaecat. Qui tempor in exercitation sint labore. Sit aute dolor ad incididunt incididunt sunt. Deserunt excepteur est deserunt fugiat in sint elit sint labore irure et proident.
				</p>
			</div>

			<BubbleBounce bubblesQuantity={100} />

		</>
	);
};

export default withRouter(Me);

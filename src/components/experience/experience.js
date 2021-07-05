import React from 'react';
import D3Component from '../d3Component/d3Graph';
import * as jsonConfig from '../../assets/profile.conf.json';
import { Link } from 'react-router-dom';
import './experience.css';

const Experience = () => {

	const nodes = jsonConfig.jobs.map(job => {
		return job.companyName;
	});

	const edges = [];

	jsonConfig.jobs.forEach((val, indx, arr) => {

		if (arr[indx + 1]) {
			edges.push([arr[indx].companyName, arr[indx + 1].companyName, arr[indx + 1].year - arr[indx].year]);
		}
	});

	return (
		<div className="my-experience">
			<div className="btn-container">
				<Link to="/">
					<button className="go-back-btn">Go back</button>
				</Link>
			</div>
			<D3Component id="graphTest" nodes={nodes} edges={edges} />
		</div>
	);
};

export default Experience;

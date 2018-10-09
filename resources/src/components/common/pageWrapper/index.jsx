import { Slide } from '@material-ui/core';
import React from 'react';
import { Section } from '../../../ui';

const PageSection = ({ direction, ...props }) => (
	<Slide direction={direction || 'left'} in={true} mountOnEnter unmountOnExit>
		<Section {...props} />
	</Slide>
);

export { PageSection };

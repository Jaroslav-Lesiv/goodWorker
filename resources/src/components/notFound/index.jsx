import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PageWrapper, Image, Label } from '../../ui';
import RobotImage from '../../assets/images/searching.svg';
import { translate } from 'multi-lang';

class NotFound extends Component {
	static propTypes = {
		key: PropTypes.strings,
		t: PropTypes.func
	};

	render() {
		const { key, t } = this.props;
		return (
			<PageWrapper
				style={{
					padding: '100px 30px',
					alignItems: 'center',
					flexDirection: 'column'
				}}>
				<Image src={RobotImage} size={100} />
				<Label>{t('short.oops')}</Label>
				<Label>
					{t('short.cant_find', { key: key || t('short.it') })}
				</Label>
			</PageWrapper>
		);
	}
}

export default translate(NotFound);

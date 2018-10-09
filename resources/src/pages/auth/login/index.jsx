import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { PersonPin } from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { user } from '../../../redux/actions';
import { PageSection } from '../../../components/common/pageWrapper';

const styles = theme => ({
	layout: {
		width: 'auto',
		display: 'block', // Fix IE11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
			.spacing.unit * 3}px`
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.primary.main
	},
	form: {
		width: '100%', // Fix IE11 issue.
		marginTop: theme.spacing.unit
	},
	submit: {
		marginTop: theme.spacing.unit * 3
	}
});

class LoginPage extends React.Component {
	static propTypes = {
		login: PropTypes.func
	};
	state = {
		username: ''
	};

	login = event => {
		event.preventDefault();
		const { username } = this.state;
		this.props.login({ username });
	};

	handleChange = name => event => {
		const {
			target: { value }
		} = event;
		this.setState({ [name]: value });
	};

	render() {
		const { classes } = this.props;
		return (
			<PageSection>
				<main className={classes.layout}>
					<Paper className={classes.paper}>
						<Avatar className={classes.avatar}>
							<PersonPin />
						</Avatar>
						<Typography variant="headline">Login</Typography>
						<form className={classes.form} onSubmit={this.login}>
							<FormControl margin="normal" required fullWidth>
								<InputLabel htmlFor="name">Username</InputLabel>
								<Input
									id="name"
									name="name"
									autoComplete="name"
									onChange={this.handleChange('username')}
									autoFocus
								/>
							</FormControl>

							<Button
								type="submit"
								fullWidth
								variant="raised"
								color="primary"
								className={classes.submit}
							>
								login
							</Button>
						</form>
					</Paper>
				</main>
			</PageSection>
		);
	}
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
	login: user.login
};

LoginPage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(LoginPage)
);

export const { buildError } = {
	buildError: message => {
		const error = { message };
		throw error;
	}
};

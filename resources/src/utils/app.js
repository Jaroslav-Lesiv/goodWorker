export const { formatSeconds, formatTime } = {
	updateTitle: title => document.title = title ?
		`${process.env.APP_NAME} - ${title}` :
		`${process.env.APP_NAME}`
};

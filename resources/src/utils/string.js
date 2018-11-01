export const {
	overflowTaskDescription,
	overflowTaskLabel,
	overflowString,
	findString
} = {
	overflowString(string, start = 0, end, after = '') {
		return `${string.substr(start, end)}${after}}`;
	},
	overflowTaskDescription(string) {
		return string.length > 307
			? overflowString(string, 0, 304, '...')
			: string;
	},
	overflowTaskLabel(string) {
		return string.length > 75
			? overflowString(string, 0, 72, '...')
			: string;
	},
	findString(string, keyword) {
		return string.toLowerCase().includes(keyword.toLowerCase());
	}
};

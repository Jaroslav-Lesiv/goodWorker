export const { formatSeconds, formatTime } = {
	formatSeconds: seconds => {
		const hours = Math.floor(seconds / (60 * 60));
		const min = Math.floor((seconds / 60) % 60);
		const sec = Math.floor(seconds % 60);
		const time = `${formatTime(hours)}:${formatTime(min)}:${formatTime(
			sec
		)}`;
		return time;
	},
	formatTime: time => (time < 10 ? `0${time}` : time)
};

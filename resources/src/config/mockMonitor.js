const monitor = {
	getActiveWindow: () => new Promise( res => res(window) )
};

export default monitor;

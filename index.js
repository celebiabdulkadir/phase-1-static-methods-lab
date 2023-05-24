class Formatter {
	//add static methods here

	static capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	static sanitize(string) {
		return string.replace(/[^a-zA-Z0-9-' ]/g, '');
	}
	static titleize(string) {
		let words = string.split(' ');
		let title = [];
		let exceptions = [
			'the',
			'a',
			'an',
			'but',
			'of',
			'and',
			'for',
			'at',
			'by',
			'from',
		];
		for (let i = 0; i < words.length; i++) {
			if (i === 0) {
				title.push(this.capitalize(words[i]));
			} else {
				if (exceptions.includes(words[i])) {
					title.push(words[i]);
				} else {
					title.push(this.capitalize(words[i]));
				}
			}
		}
		return title.join(' ');
	}
}

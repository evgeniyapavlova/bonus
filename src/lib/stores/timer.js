import { writable } from 'svelte/store';

export function timer(a, b) {
	function checkZero(num) {
		return num < 10 ? '0' + num : num;
	}

	let min = checkZero(Math.round((a - 30) / 60));
	let sec = checkZero(a % 60);

	b.set({ min, sec });

	const t = setInterval(function () {
		a--;
		min = checkZero(Math.round((a - 30) / 60));
		sec = checkZero(a % 60);
		b.set({ min, sec });

		if (a === 0) {
			clearInterval(t);
		}
	}, 1000);

	return false;
}

export const timer1 = writable({ min: 0, sec: 0 });
export const timer2 = writable({ min: 0, sec: 0 });

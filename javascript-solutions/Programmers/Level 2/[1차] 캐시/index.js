// 7, 17번 틀림

function solution(cacheSize, cities) {
	let answer = 0;
	const stack = [];

	for (const city of cities) {
		const lowered = city.toLowerCase();

		if (stack.includes(lowered)) {
			answer += 1;
			stack.splice(stack.indexOf(lowered), 1);
		} else {
			answer += 5;
		}

		if (stack.length === cacheSize) stack.shift();

		stack.push(lowered);
	}
	return answer;
}


// 통과!

function solution(cacheSize, cities) {
	let answer = 0;
	const stack = [];

	for (const city of cities) {
		const lowered = city.toLowerCase();

		if (stack.includes(lowered)) {
			answer += 1;
			stack.splice(stack.indexOf(lowered), 1);
		} else {
			answer += 5;
		}

		stack.push(lowered);

		if (stack.length > cacheSize) {  // stack length가 cacheSize와 완전히 같을 경우가 없을 수도 있다는 것을 고려하지 못했다.
			stack.shift();
		}
	}
	return answer;
}


// ChatGPT가 제시한 풀이
function solution(cacheSize, cities) {
	let answer = 0;
	const cache = [];

	for (const city of cities) {
		const lowered = city.toLowerCase();
		const index = cache.indexOf(lowered);

		if (index !== -1) {
			answer += 1;
			cache.splice(index, 1);
		} else {
			answer += 5;
		}

		cache.push(lowered);
		if (cache.length > cacheSize) {
			cache.shift();
		}
	}

	return answer;
}

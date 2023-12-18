function solution(record) {
	const nameMap = {};
	let result = [];

	for (const r of record) {
		const [command, userId, nickname] = r.split(' ');

		if (command !== 'Leave') {
			nameMap[userId] = nickname;
		}
	}

	for (let i = 0; i < record.length; i++) {
		const [command, userId] = record[i].split(' ');

		if (command === 'Enter') {
			result.push(`${nameMap[userId]}님이 들어왔습니다.`);
		} else if (command === 'Leave') {
			result.push(`${nameMap[userId]}님이 나갔습니다.`);
		}
	}

	return result;
}

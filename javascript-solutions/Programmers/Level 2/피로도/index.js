// 9, 12, 13 실패 (0.33ms, 33.2mb)
function solution(k, dungeons) {
  const sorted = dungeons
    .map(el => [...el, Math.abs(el[0] - el[1])])
    .sort((a, b) => b[2] - a[2]);
  const newDungeons = sorted.map(el => [el[0], el[1]]);

  let currentHP = k;
  let cnt = 0;

  newDungeons.forEach(item => {
    const [maxHP, useHP] = item;
    if (maxHP <= currentHP) {
      currentHP -= useHP;
      cnt++;
    } else {
      return;
    }
  });

  return cnt;
}

// 이게 될 지 몰랐네..!

function solution(k, dungeons) {
  const n = dungeons.length;
  const visited = new Array(n).fill(false);
  const selected = [];
  const results = [];

  function dfs(depth) {
    if (depth === n) {
      let total = k;
      let cnt = 0;

      selected.map(i => {
        const [max, use] = dungeons[i];

        if (total >= max) {
          total -= use;
          cnt++;
        }
      });
      results.push(cnt);
    }

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      selected.push(i);
      visited[i] = true;
      dfs(depth + 1);
      selected.pop();
      visited[i] = false;
    }
  }

  dfs(0, 0);

  return Math.max(...results);
}

// ChatGPT의 도움을 받아 더 간결하게 만들어보았다. (0.21ms, 33.4mb)
function solution(k, dungeons) {
  const n = dungeons.length;
  const visited = new Array(n).fill(false);
  let maxCount = 0;

  function dfs(energy, count, depth) {
    maxCount = Math.max(maxCount, count);

    for (let i = 0; i < n; i++) {
      const [minEnergy, useEnergy] = dungeons[i];

      if (!visited[i] && energy >= minEnergy) {
        visited[i] = true;
        dfs(energy - useEnergy, count + 1, depth + 1);
        visited[i] = false;
      }
    }
  }

  dfs(k, 0, 0);

  return maxCount;
}

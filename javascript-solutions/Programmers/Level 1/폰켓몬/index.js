function solution(nums) {
    let arr = [...new Set(nums)]
    return arr.length < (nums.length / 2) ? arr.length : nums.length / 2
}
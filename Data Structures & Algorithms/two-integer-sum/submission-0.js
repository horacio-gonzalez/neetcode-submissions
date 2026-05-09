class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for (let index in nums) {
            const subs = target - nums[index];
            if(map.has(subs)) {
                return [parseInt(map.get(subs)), parseInt(index)]
            } else {
                map.set(nums[index], index)
            }
        }
    }
}

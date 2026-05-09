class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (let num of nums) {
            if (!map.has(num)) {
                map.set(num, 1)
            } else {
                const count = map.get(num);
                map.set(num, count + 1)
            }
        }
        const entries = [...map.entries()]
        console.log(entries.sort((a,b) => b[1] - a[1]));
        const res = [];
        for (let i = 0; i < k; i++) {
            res.push(entries[i][0]);
        }
        return res;
    }
}

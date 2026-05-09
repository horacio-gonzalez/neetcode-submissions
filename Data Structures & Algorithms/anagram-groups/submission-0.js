class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let str of strs) {
            const sorted = str.split('').sort().join('');
            
            if (map.has(sorted)) {
                const newArr = map.get(sorted)
                map.set(sorted, [...newArr, str])
            }else {
                map.set(sorted, [str])
            }
        }

        return [...map.values()];
    }
}

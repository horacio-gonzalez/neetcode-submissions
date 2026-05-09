class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]) {
        const result = [];
        for (let i = 0; i < nums.length; i++) {
            const copy = Array.from(nums);
            copy.splice(i, 1);
            const product = copy.reduce((acc, curr) => {
                return acc * curr
            }, 1)
            result.push(product)
        }
        return result;
    }
}

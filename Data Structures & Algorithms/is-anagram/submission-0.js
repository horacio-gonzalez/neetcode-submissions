class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const a = s.split('')
        const b = t.split('')
        a.sort()
        b.sort()
        return a.join('') === b.join('');
    }
}

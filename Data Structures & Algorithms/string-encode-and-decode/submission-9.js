class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''
        for (let str of strs) {
            res += `${str.length.toString()};${str}`
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i =0;
        const res = [];

        while (i < str.length) {
            let j = i;
            while (str[j] != ';') {
                j++
            }
            const length = parseInt(str.substring(i, j))
            const word = str.substring(j+1, j + 1 + length)

            res.push(word)
            i = j + 1 + length
        }

        return res;
    }
}

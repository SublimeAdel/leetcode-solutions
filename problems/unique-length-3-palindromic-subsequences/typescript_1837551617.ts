function countPalindromicSubsequence(s: string): number {
    const unique = new Set(s);
    let count = 0

    for(let char of unique){
        let firstIdx = s.indexOf(char);
        let lastIdx = s.lastIndexOf(char);
        const set = new Set<String>()
        if(lastIdx === -1 || lastIdx - firstIdx < 2) continue

        for(let i of s.slice(firstIdx +1, lastIdx)){
            set.add(i);
        }
        count += set.size
    }

    return count;
}
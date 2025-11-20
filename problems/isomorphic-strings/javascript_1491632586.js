    /**
    * @param {string} s
    * @param {string} t
    * @return {boolean}
    */
    var isIsomorphic = function(s, t) {
        let map1 = new Map();
        let map2 = new Map(); 
        if(s.length !== t.length)
        {
            return false;
        }   
        for ( let i = 0 ; i < s.length; i++ )
        {
            let char1 = s[i];
            let char2 = t[i];

            if((map1.has(char1) && map1.get(char1) !== char2) || (map2.has(char2) && map2.get(char2) !== char1 )){
                return false;
            }

            map1.set(char1, char2);
            map2.set(char2, char1); 
        }
        return true
    }
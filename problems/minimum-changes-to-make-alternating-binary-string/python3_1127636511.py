class Solution:
    def minOperations(self, s: str) -> int:
        count0:int = 0
        count1:int = 0

        for i, bit in enumerate(s): ## 01 base sequence
            expected = '0' if (i%2) == 0 else '1'
            if bit is not expected:
                count0 +=1 

        for i, bit in enumerate(s): ## 10 base sequence
            expected = '1' if (i%2) == 0 else '0'
            if bit is not expected:
                count1 +=1 
        
        return count1 if count1<count0 else count0
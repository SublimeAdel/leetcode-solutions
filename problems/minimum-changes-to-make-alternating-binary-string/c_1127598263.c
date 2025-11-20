int minOperations(char* s) {
    int size = strlen(s);
    int count01=0;
    int count10=0;
    for(int i = 0; i<size; i++)
    {
        // sequence is 0 1 meaning even bits = 0 & odd bits = 1
        //if s[i] is not the expected from the ideal string
        if(s[i] != '0' + (i%2)) //i%2 is 0 for even and 1 for odd
        {
            count01++;
        }
        // sequence is 1 0 meaning even bits = 1 & odd bits  = 0
        // if s[i] is not the expected from the ideal string
        if(s[i] != '0' + ((i+1)%2)) //(i+1)%2 is 1 for even bits and 0 for odd  
        {
            count10++;
        }
    }
    return count01 < count10? count01 : count10;
}
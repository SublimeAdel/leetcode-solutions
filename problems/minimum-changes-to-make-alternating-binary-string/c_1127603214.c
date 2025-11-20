
int minOperations(char* s) {
    int op = 0;
    int size = strlen(s);
    int num_10 = 0; // number of 10 sequences
    int num_01 = 0; // number of 01 sequences

    /* calculate the number of each sequence in the string*/
    for (int i = 0; i < size; i += 2) // loop through pairs of the string
    {
        switch (s[i]) {
        case '0':
            switch (s[i + 1]) {
            case '0': // 00 sequence was detected
                op++;
                break;
            case '1': // 01 sequence was detected
                num_01++;
                break;
            }// end inner switch
            break;
        case '1':
            switch (s[i + 1]) {
            case '0': // 10 sequence was detected
                num_10++;
                break;
            case '1': // 11 sequence was detected
                op++;
                break;
            }// end inner switch
            break;
        } // end switch
    }     // end for

    if (num_10 > num_01) // if 10 sequences are more than 01 sequences:
    {
        op += num_01 * 2;
        if (size % 2 != 0 && s[size - 1] == '0') // if there exists a stray 0
        {
            op++;
        }
    } else if (num_01 > num_10) // if 01 sequences are more than 10 sequences:
    {
        // adopt 01 base
        op += num_10 * 2;
        if (size % 2 != 0 && s[size - 1] == '1') // if there exists a stray 1
        {
            op++;
        }
    } else if (num_10 == num_01) // if both are equal
    {
        // we adopt whichever base will eliminate the stray bit
        op += num_10 * 2;
    }

    return op;
}
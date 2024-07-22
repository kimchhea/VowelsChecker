This function is used to check vowels, consonants, and the total number of alphabetic characters in a given input. It operates as follows:

    Loop Through Characters:
        The function iterates through the characters of the input text, based on its length.

    Check for Vowels:
        The includes(value) method is used to check if the character is present in the vowel array. If it is, the totalcount (vowel count) is incremented by 1.

    Check for Consonants:
        For characters that are letters (from 'a' to 'z') but not vowels, the function increments the totalconsonant count by 1.

    Calculate Total Alphabetic Characters:
        The total number of alphabetic characters is the sum of totalcount (vowels) and totalconsonant (consonants).

    Functionality:
        The function is designed to handle input that includes numbers as well. It will correctly count vowels and consonants and ignore non-alphabetic characters.

    User-Friendly:
        The function is robust enough to work even if the input contains numbers or special characters.
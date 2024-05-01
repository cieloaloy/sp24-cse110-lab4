# Part 2 Questions

1. Line 12 prints the value of `i` after the loop terminates since `var` was used in its declaration. The loop runs successfully for `i` values of 0,1,2, so 3 is printed.
2. Line 13 prints the most recent value of `discountedPrice`, which is 150.
3. Line 14 prints the most recent value of `finalPrice`, which is 150.
4. The function applies the given discount to every list item within the loop, so it returns a list of each price after discounting, which is [50, 100, 150].
5. Line 12 errors because `i` is out of scope of the print statement.
6. Line 13 errors because `discountedPrice` is out of scope.
7. Line 14 prints the most recent value of `finalPrice`, which was 150, since the variable was declared in the broader function scope.
8. Like before, the function returns a list of each price discounted, so [50, 100, 150].
9. Line 11 errors because `i` is out of scope of the print statement.
10. Line 12 prints the length of the input list, which is 3.
11. The function returns the results list same as before, [50, 100, 150].
12. Object
    1. student.name
    2. student['Grad Year']
    3. student.greeting()
    4. student['Favorite Teacher'].name
    5. student.courseLoad[0]
13. Arithmetic
    1. '32', 2 maps to '2' and string concatenation happens
    2. 1, string subtraction does not make sense so int subtraction happens
    3. 3, null maps to 0
    4. '3null', null maps to 'null' and string concatenation happens
    5. 4, true maps to 1
    6. 0, false and null map to 0
    7. '3undefined', undefined maps to 'undefined' and string concatenation happens
    8. NaN, again can't string subtract so int subtraction is attempted but undefined has no number value, so return Not a Number
14. Comparison
    1. true, '2' maps to 2
    2. false, '12' comes before '2' alphabetically
    3. true, '2' maps to 2
    4. false, types are not equal
    5. false, true maps to 1
    6. true, Boolean() maps all non-empty values to true
15. Where `==` checks for value equivalence, `===` checks for both value and type equivalence.
16. *Continued in named file...*
17. The function returns [2,4,6] since `doSomething` multiplies each value in the original list by 2.
18. *Continued in named file...*
19. The function outputs 1, 4, 3, 2 on separate lines in that order.
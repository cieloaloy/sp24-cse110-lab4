# Part 1 Questions

1. Line 9 prints 'values added: 20'.
2. Line 13 also prints 'values added: 20'.
3. Line 9 prints 'values added: 20'.
4. Line 13 errors since `result` is local to the if statement rather than the entire `sumValues` function, where line 13 is trying to access it from.
5. Line 9 prints 'values added: 0'.
6. Line 13 again errors since `result` is out of scope.
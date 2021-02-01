This project has 2 functions, an object factory and a test at the end.

Being the functions:

- returnRandBase(), that returns one of the 4 dna bases (C, G, A, T);
- mockUpStrand(), using the previous function, creates an array of 15 random dna bases.

The object factory returns a object that has 2 keys and 3 functions inside it:

- A key with the specimen number;
- A key with DNA array;
- The mutate() method, which picks a random value of the DNA array, and exchange it for a new one;
- The compareDNA() method, which calls the factory and creates a new object, then compare the original one with it,
and brings a % of comparison;
- The willLikelySurvive() method, which loops through the entire DNA array, and returns the % of 'C' or 'G' bases
inside it;
- At the end, there is a test that returns 30 arrays of DNA bases, and pushes then to a array.
//https://www.hackerrank.com/challenges/between-two-sets/problem

// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

        // The elements of the first array are all factors of the integer being considered
        // The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

//Example:
// a = [2, 6]
// b = [24, 36]

// There are 2 numbers between the arrays: 6 and 12.
// For the first value: 6%2 = 0    6%6 = 0     24%6 = 0    36%6 = 0
// For the second value: 12%2 = 0  12 %6 = 0   24%12 = 0   36%12 = 0
// Return 2.

// Function Description
// Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

// getTotalX has the following parameter(s):
// int a[n]: an array of integers
// int b[m]: an array of integers

// Returns
// The number of integers that are between the sets

// Input Format
// The first line contains two space-separated integers, n and m, the number of elements in arrays a and b.
// The second line contains n distinct space-separated integers a[i] where 0 <= i < n.
// The third line contains m distinct space-separated integers b[j] where 0<= j < m.

// Sample input
// 2 3
// 2 4
// 16 32 96

// Sample Output
// 3

// Explanation
// 2 and 4 divide evenly into 4, 8, 12 and 16.
// 4, 8 and 16 divide evenly into 16, 32, 96.
// 4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.




function getTotalX(a, b) {
    let total = 0
    let current = a[a.length-1]
    while (current <= b[0]) {
        if (a.every(n => !(current%n))) {
            if (b.every(n => !(n%current))) {
                total++;
            }
        }
        current += 1
    }
    return total
}
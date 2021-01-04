// https://www.hackerrank.com/challenges/kangaroo/problem





function kangaroo(x1, v1, x2, v2) {


// let result = (x1-x2) % (v2-v1);
if((x2 > x1 && v2 >= v1) || ((x1-x2) % (v2-v1)) != 0)
    return 'NO'
else
    return 'YES'
}

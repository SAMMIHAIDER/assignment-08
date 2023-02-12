let e = 12;
let f = 14;
let c = 15;
if (e > f && e > c) {
    document.write("A is greater then B and C"+"<br>");
} else if (f > e && f > c) {
    document.write("B is greater then A and C"+"<br>");
} else if (c > e && c > f) {
    document.write("C is greater then B and A"+"<br>");
} else {
    document.write("enter a valid input"+"<br>");
}
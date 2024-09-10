let a = []
let b = []
let num1 = prompt("enter how many digit you want in 1st:")
let num2 = prompt("enter how many digit you want in 2nd:")
for(i=0;i<num1;i++){
    let dig = prompt("enter the digit:")
    let dig2 = prompt("enter the digit for l2:")
    a.push(dig)
    b.push(dig2)
}
console.log(a,b)
let pow = 10**(num1)
z=0
f=0
for(y=0;y<num1;y++){
    f = f+1
    g = pow/(10**f)
    n = a[(num1-f)]
    s = g*n
    z=z+s
}
let pow1 = 10**(num2)
z1=0
l=0
for(j=0;j<num2;j++){
    l = l+1
    g1 = pow/(10**l)
    n1 = b[(num2-l)]
    s1 = g1*n1
    z1=z1+s1
}
let sum1 = z1+z
s1 = String(sum1)
sum = (s1).length
console.log(sum)


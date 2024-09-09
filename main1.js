let a = prompt("enter the number")
c = a.length
a = Number.parseInt(a)
b = 10
while(true){
    if(b>=a){
        z=0
        for(let i = 0;i<c;i++){
            v = a%b
            b=b/10
            x = v/b
            x= Number.parseInt(x)
            z=x+z
            
        }
        console.log(z)
        break
    }
    else{
        b=b*10
    }
}

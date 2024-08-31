let n = []
let b = prompt("enter how many number you want:")
for(i=0;i<b;i++){
    let c = prompt("enter the number:")
    c = Number.parseInt(c)
    n[i]=c
}
s = n.length
let g =[]
if(n[0]>n[1]){
    g[0]=n[0]
}
else if(n[0]<n[1]){
    g[0]=n[1]
}
function test(){
    function test2(){
        if(g[0]>n[l]){
            
        }
        else if(g[0]<n[l]){
            g[0]=n[l]
        }
    }
    
    for(j=0;j<s;j++){
        l=j+2
        test2()
    }
}
test()
console.log(g)
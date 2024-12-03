const fruit = new Object();
fruit.name = "pear"
fruit.clories = 25
fruit.price = 30
fruit.toString = function () {
    let str = ""
    for (const key in this) {
        if (typeof (this[key]) != "function")
            str += key + ": " + this[key] + ", "
    }
    return str
}
const arr = [
    {
        name: "apple",
        clories: 50,
        price: 20,
        toString: function () {
            let str = ""
            for (const key in this) {
                if (typeof (this[key]) != "function")
                    str += key + ": " + this[key] + ", "
            }
            return str
        }
    }, {
        name: "melon",
        clories: 70,
        price: 50,
        toString: function () {
            let str = ""
            for (const key in this) {
                if (typeof (this[key]) != "function")
                    str += key + ": " + this[key] + ", "
            }
            return str
        }
    }, fruit]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].toString())
}
arr[0].color = "red"
for (let i = 0; i < arr.length; i++) {
    if (arr[i].color) {
        console.log(arr[i].toString())
    }
}
let str = ""
for (const key in arr[0]) {
    if (typeof (arr[0][key]) != "function")
        str += key + ": " + arr[0][key] + ", "
}
console.log(str)
delete (arr[1].price)
document.getElementById("print").innerHTML += arr[1].toString()
function doit() {
    arr[0].Price = document.getElementById("price").value
    console.log(arr[0].toString())
}

function doit2() {
    let cal = document.getElementById("calo").value
    let copyarr = arr.filter(x => x.clories < cal)
    console.log(copyarr)
}

for (let i = 0; i < arr.length; i++) {
    Object.defineProperty(arr[i], "Price", {
        get() {
            return arr[i].price
        },
        set(value) {
            if (value < 10000 && value > 10) {
                arr[i].price = value
            }
        }
    })
}
function MessageBox(textColor,backColor,icon,message={tytle:"",body:""}){
    
        this.message=message
        this.icon=icon
        this.backColor=backColor
        this.textColor=textColor
    this.render=function(){
        return`<div style="background-color:${this.backColor};color:${this.textColor};">
        <h1>${this.message.tytle}</h1>
        <p>${this.message.body}</p>
        <img src="${this.icon}" >
        </div>`
    }
}

let info=new MessageBox("yellow","bisque","02(2).jpg",{tytle:"",body:""})
let warrnin=new MessageBox("orange","blue","02(2).jpg",{tytle:"",body:""})
let erro=new MessageBox("red","yellow","02(2).jpg",{tytle:"",body:""})
//document.body.innerHTML+=info.render()
//document.body.innerHTML+=warrning.render()
//document.body.innerHTML+=error.render()
const messages={
    infomation: info,
    warrning:warrnin,
    error:erro
}
function makeMassage(){
    kind=document.getElementById("se").value
    tyt=document.getElementById("tytle").value
    txt=document.getElementById("thetext").value
    Object.assign(messages[kind],{message:{tytle:tyt,body:txt}})
    document.body.innerHTML+=messages[kind].render()
}
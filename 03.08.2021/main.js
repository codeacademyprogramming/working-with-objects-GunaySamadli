

class customMath{
    constructor(number){
        this.number=number;
        return;
    }
    add(num){
        this.number+=num;
        return this;
    }
    substract(num){
        this.number-=num;
        return this;
    }
    divide(num){
        this.number/=num;
        return this;
    }
    multiply(num){
        this.number*=num;
        return this;
    }
}

const num=new customMath(5);

num.add(100).substract(50).divide(5).multiply(3); //33
console.log(num);

num.divide(100).substract(50).add(5).multiply(3);  // -134.01
console.log(num)



// (5).add(3).minus(4).divide(100);


// 1

const user={
    name:"John",
    surname:"Smith",
}
user.name='Pete';
delete user.surname
console.log(user);


// 2


let salaries={
    Jhon:100,
    Ann:160,
    Pete:130,
    mathSalaries:function () {
        if(salaries==0){
            return 0;
        }
        return this.Ann+this.Jhon+this.Pete;
    }
}

console.log(salaries.mathSalaries());



// 3

let scheule={};


function isEmpity(scheule) {
    for (let values in scheule) {
        return false;
    }
    return true;
}
console.log(isEmpity(scheule));

scheule["8:30"]="get up";

console.log(isEmpity(scheule));



// 4


let menu={
    width:200,
    height:300,
    title:"My menu"
}

multiplyNumeric(menu);

function multiplyNumeric(menu) {
    for (let values in menu) {
        if (typeof menu[values]=='number') {
            menu[values]*=2;
        }
    }
}

console.log(menu)




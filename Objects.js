//Objects

const person={
    name:"Rajesh",
    age:22,
    isEducated:true,
    walk:()=>{
        console.log("start Walking")
    }
}

//check a property is there or not

console.log(person.hasOwnProperty("name")) //true

//acces values of object
console.log(person.name);

console.log(person["name"])



//Copy 1.shallow copy 2. Deep copy

const object={name:"Abcd",age:22}
// shallow copy
const object2=object
object2.name="xyz"
console.log(object,object2); //{ name: 'xyz', age: 22 } { name: 'xyz', age: 22 }


// Deep copy

const object3={...object}
object3.name="pqrs"
console.log(object,object3);


const object4=Object.assign({},object)
console.log(object4);

//Object freeze = can't add / update / remove values

// Object.freeze(object)

console.log(Object.isFrozen(object))
object.name='pawan'
console.log(object)

// Object seal = only update we can change , can't add / remove values

Object.seal(object)
object.name="abcd"
console.log(object);
console.log(Object.isSealed(object))

// Loop Through Objects

// for in

for(let key in object){
    console.log(key,person[key] )
}

Object.keys(person).forEach((key)=>console.log(key))


// Same or Not

console.log(Object.is(person,object))


 console.log(object)
 console.log(Object.keys(person),Object.values(person))

 // example

 const data ={
    id:1,
    name:["p1","p3"],
    next:{
        id:2,
        name:['p3','p4','p1'],
        next:{
            id:3,
            name:['p1','p3','p2'],
            next:{
                id:4,
                name:['p2','p3','p4'],
                next:null
            }
        }
    }
 }

 const countPlayers=(data)=>{
    if(data==null) return {}
    let count={}
   
    for(let player of data.name){
       count[player]=(count[player] || 0) +1
    }
    const nextPlayerCount=countPlayers(data.next)
    for(let key in nextPlayerCount){
        count[key]=(count[key] || 0)+nextPlayerCount[key]
    }
    return count
}
const result = countPlayers(data)
console.log(result)
console.log(result['p5']=10)
console.log(result)


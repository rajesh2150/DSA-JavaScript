// collection of charecters
let str='Rajesh korlapati is a FED'
str.charAt(1) //a
str.endsWith('h') //true
str.includes('a') //true
str.length //6
let str2='Rajsh'
str.localeCompare(str2) // 0 if true , else -1
str.replace('Rajesh','RK') //RK
str.slice(1,4) //aje
str.slice(-5,-2) //aje
str.split('a') //[ 'R', 'jesh' ]
str.split(" ") // By words [ 'Rajesh', 'korlapati', 'is', 'a', 'FED' ]
str.split("") //By charecters ['R','a'.....'D']
//join
str.split(" ").join(" ") //without "" = Rajesh,korlapati,is,a,FED  & with ""  = Rajesh korlapati is a FED
str.substring(1,4) //aje
str.search('h') //5 index, if not -1 returns

//remove white spaces using trim() only for start and end not middle
str.trim()
str.trimStart()
str.trimEnd()
//lowercase and uppercase
str.toLowerCase()
str.toUpperCase()

//diff b/w toLowerCase() and toLocaleLowerCase()
str.toLocaleLowerCase() 

const result=str.split("").sort() //[' ',' ','D','E',..'a','a','e',...'t']

console.log(result)


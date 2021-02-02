const numbers=[2,4,6,5,9,6];
const output=[];
for(let i=0;i<numbers.length;i++){
    const result=numbers[i]*numbers[i];
    output.push(result)
}
console.log(output)
const result=numbers.map(function(element){
    return element*element
})
const result=numbers.map(element=>element*element)
console.log(result)
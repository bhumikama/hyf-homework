const args = process.argv.slice(2);

function findAvg(args){
    const length = args.length ;
    const argumentArray = args.map(arg => parseFloat(arg));
    if(length <= 0){
        return 'Please provide arguments';
    }
    else if(argumentArray.includes(NaN)){
      return `Please provide numbers`;
    }
    else{
        const sum = numbers.reduce((accumulator,currentValue) => accumulator+ currentValue , 0 );
        const avg = (sum/length).toFixed(2);
        return `The average is : ${avg}`;
    }
}

console.log(findAvg(args));


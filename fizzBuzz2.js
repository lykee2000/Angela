var output = [];
function fizzBuzz(){
      for(var cnt = 1;cnt < 101;cnt++;){
        if (cnt % 3 === 0 & cnt % 5 === 0){
        output.push("FizzBuzz");
        }
        else if (cnt % 3 === 0){
        output.push("Fizz");
        }
        else if (cnt % 5 === 0){
        output.push("Buzz");
        }
        else{
        output.push(cnt);
        }
      }
      console.log(output);
}

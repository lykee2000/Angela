var output = [];
var cnt = 1;
function fizzBuzz(){
      while (cnt <= 100){

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
            cnt++;
      }
      console.log(output);
}

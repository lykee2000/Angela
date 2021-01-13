function Housekeeper(yearsOfExperience,name,cleaningRepertoire){
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire
  this.clean = function(){
    alert("Cleaning in progress...");
  }
}
var Housekeeper1 = new Housekeeper(9,"tom",["lobby","bedroom"]);
console.log(Housekeeper1.name);
var Housekeeper2 = new Housekeeper(7,"meme",["bathromm","garden"]);
console.log(Housekeeper1.name);

$(document).ready(function(){

    var setAge = function(age){
        this.age = age;
    }

    var bob = new Object();
    bob.age = 30;
    bob.setAge = setAge;
    console.log("bob before method: " + bob.age);
    bob.setAge(50);
    console.log("bob after method: " + bob.age);

    var myCar = new Object();
    myCar.age = 12;
    myCar.setAge = setAge;
    console.log("car before method: " + myCar.age);
    myCar.setAge(100);
    console.log("car after method: " + myCar.age);


    var momentInTime = new Object();
    console.log("momentInTime before method: " + momentInTime.age);
    momentInTime.setAge = setAge;
    momentInTime.setAge(4000);
    console.log("momentInTime after method: " + momentInTime.age);
});
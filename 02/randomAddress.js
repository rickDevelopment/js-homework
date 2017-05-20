var streetNumber = ["1233" , "3456","1883","1234","1275"];
var streetName = [" Love Lane ", " Pig Street", " Name Avenue ", " Cup Srteet ", "Fish"];
var city= ["Money ","Brookstone "," Bronx ","Kingston ", "Trenton "];
var state = ["New York ", "Washington ", "Phoenix ","New Jeresy " , "Atlanta "];
var zip = ["10052","10023","78934","21876", "27851" ];

var i = 0;

for(var i = 0; i< streetNumber.length;i++){
    streetNumber[i] = streetNumber[i] +1;
    streetName[i] = streetName[i] +1;
    city[i] = city[i] +1;
    state[i] = state[i] +1;
    zip[i] = zip[i] +1;

console.log(streetNumber[i] + streetName[i] +city[i] + state+ zip );
}

// while(i < streetNumber.length){

// //console.log(streetNumber[0]+ streetName[0] + city[0] + state[0] + zip[0]);
// counter++
// }
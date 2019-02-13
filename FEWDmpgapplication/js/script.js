/*eslint-env browser*/
var miles;
var gallons;
var mpg;
var again = "y";

do {
    miles = parseFloat(window.prompt("Enter miles driven: "));
    gallons = parseFloat(window.prompt("Enter max gallons of vehicle: "));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
    } else {
        window.alert("Please enter a valid number.");
    }
    window.document.write("Miles per gallon: " + mpg.toFixed(2));
    again = window.prompt("Do you want to run this app again? (y/n)", "y");
} while (again === "y");
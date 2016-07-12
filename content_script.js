var countries = [
	"Afghanistan", "Africa", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bangladesh", "Barbados", "Belarus", "Belgium", "Bermuda", "Bolivia", "Brazil", "Bulgaria", "Cambodia", "Cameroon", "Canada", "Chad", "Chile", "China", "Colombia", "Congo", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Ecuador", "England", "Egypt", "El Salvador", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Guinea", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Latvia", "Lithuania", "Luxembourg", "Madagascar", "Malaysia", "Malta", "Mexico", "Moldova", "Monaco", "Mongolia", "Morocco", "Nepal", "Netherlands", "New Zealand", "Nigeria", "Northern Ireland", "North Korea", "Norway", "Pakistan", "Paraguay", "Peru", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russia", "Samoa", "San Marino", "Saudi Arabia", "Scotland", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sweden", "Switzerland", "Thailand", "Tunisia", "Turkey", "Ukraine", "the United Kingdom", "the United States", "Uruguay", "Venezuela", "Vietnam", "Wales", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"
];

var numCountries = countries.length;
//Variable will store the percentage chance of program running on a page
var percentChance = 20;
//Generate random number to calculate percentage chance
var randNum = Math.floor( Math.random() * 100);
 
function walk(node) {
    var child, next;
 
    switch (node.nodeType) {
        case 1: // Element
        case 9: // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;
 
        case 3: // Text node
            if (node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
            break;
    }
}
 
function handleText(textNode) {
    var v = textNode.nodeValue;

    for (var i=0; i < numCountries; i++) {
        //If text matches a country and percentage chance of running is met
        if ( v.match ( countries[i] ) && randNum <= percentChance ) {
            //Create new regex to store found country
            var newRegex = new RegExp(countries[i], "g");

            //Replace found country with randomly generated country
            v = v.replace(newRegex, generateCountry());
        }
    } 
    
    textNode.nodeValue = v;
}

function generateCountry () {
    //Generates a random number to apply to the country array
    var randCountry = countries[ Math.floor( Math.random() * (numCountries + 1) ) ];

    return randCountry;
}

//Begin parsing text and replacing countries
walk(document.body);

var countries = [
	"Afghanistan", "Africa", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bangladesh", "Barbados", "Belarus", "Belgium", "Bermuda", "Bolivia", "Brazil", "Bulgaria", "Cambodia", "Cameroon", "Canada", "Chad", "Chile", "China", "Colombia", "Congo", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Ecuador", "Egypt", "El Salvador", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Guinea", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "North Korea", "South Korea", "Latvia", "Lithuania", "Luxembourg", "Madagascar", "Malaysia", "Malta", "Mexico", "Moldova", "Monaco", "Mongolia", "Morocco", "Nepal", "Netherlands", "New Zealand", "Nigeria", "Norway", "Pakistan", "Paraguay", "Peru", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russia", "Samoa", "San Marino", "Saudi Arabia", "Singapore", "Slovakia", "Slovenia", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland", "Thailand", "Tunisia", "Turkey", "Ukraine", "the United Kingdom", "the United States", "Uruguay", "Venezuela", "Vietnam", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"
];

var numCountries = countries.length;
 
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
        if ( v.match ( countries[i] ) ) {
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

walk(document.body);

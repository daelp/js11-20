//write first method
function sleepIn(x,y) {
    return x;
}

//write second method
function nextOne(param1, param2) {
    return param1;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}

// First Last 6

function firstLast6(a){
    if(a[0] == 6 || a[a.length -1] == 6){
        return true;
    }else{
        return false;
    }
}

// Has 23

function has23(a){
    if(a[0] == 2 || a[1] == 2){
        return true;
    }else if(a[0] == 3 || a[1] == 3){
        return true;
    }else{
        return false;
    }
}

// Fix 23

function fix23(a){
    if(a[1] == 2 && a[2] == 3){
        a[2] == 0;
    }
    if(a[0] == 2 && a[1] == 3){
        a[1] == 0;
    }
    return a;
}

// Count YZ

function countYZ(string) {

    string = string.toLowerCase();

    var count = 0;

    var strLength = string.length;

    for(var i = 0; i < strLength; i++) {

        if(string.substring(i, i+1) == " ") {

            if(string.substring(i-1, i) == "y" || string.substring(i-1, i) == "z") {
                count++;
            }
        }
    }
    if(string.substring(strLength-1, strLength) == "y" || string.substring(strLength-1, strLength) == "z") {
        count++;
    }
    return count;
}


// End Other

function endOther(a, b){
    a = a. toLowerCase();
    b = b. toLowerCase();
    if(a.length > b.length) {
        if (a.lastIndexOf(b) == a.length - b.length) {
            return true;
        }
    }
    if(b.length > a.length) {
        if (b.lastIndexOf(a) == b.length - a.length) {
            return true;
        }
    }
    if(a == b){
        return true;
    }
    return false;
}

// Star Out

function starOut(string) {
    var newString = "";

    for (var i = 0; i < string.length; i++) {

        var characterLeft = string[i - 1];
        var currentCharacter = string[i];
        var characterRight = string[i + 1];

        if (!(characterLeft == "*" || currentCharacter == "*" || characterRight == "*")) {
            newString += currentCharacter;
        }
    }
    return newString;
}

// Get Sandwich

function getSandwich(string){
    if(string.indexOf("bread") == string.lastIndexOf("bread")){
        return "";
    }
    if(string.indexOf("bread") != -1 == string.lastIndexOf("bread") != -1){
        return string.substring(string.indexOf("bread") + 5, string.lastIndexOf("bread"))
    }
    return "";
}

// Can Balance

function canBalance(array) {

    var lenght = array.length;

    for(var i = 0; i < lenght; i++) {
        var left = 0;
        var right = 0;

        for(var l = 0; l < i; l++) {
            left += array[l];
        }
        for(var k = i; k < lenght; k++) {
            right += array[k];
        }
        if(left == right) {
            return true;
        }
    }
    return false;
}

// Count Clumps

function countClumps(array){
    var count = 0;

    for(var i = 0; i < array.length; i++){
        if(array[i] == array[i + 1 ]){
            var l = i + 1;
            while(array[i] == array[l]){
                l++;
            }
            i = l - 1;
            count ++;
        }
    }
    return count;
}
// Evenly Spaced

function evenlySpaced(a,b,c){
    if(a == b && b == c){
        return true;
    }
    var small = 0;
    var medium = 0;
    var large = 0;

    if(a < b && a < c) {
        small = a;
    }else if((a > b && a < c) || (a < b && a > c)) {
        medium = a;
    }else{
        large = a;
    }

    if(b < a && b < c) {
        small = b;
    }else if((b > a && b < c) || (b < a && b > c)) {
        medium = b;
    }else {
        large = b;
    }

    if(small == 0) {
        small = c;
    }else if(medium == 0) {
        medium = c;
    }else{
        large = c;
    }

    if(large - medium == medium - small) {
        return true;
    }else{

        return false;

    }
}

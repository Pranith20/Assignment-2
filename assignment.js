// very easy solutions
// Question 1
function convert(num)
{
    var seconds=num*60;
    return seconds;
}

console.log( convert(3));


// Question 2
function divide(a,b)
{
    if(a>b){
        a%b==0;
        return true;
    }
    else{
        return false;

    }
}
console.log(divide(200,50));

// easy solutions

// Question 1
function character_count(letter,string)
{
    var letter_count=0;
    for(var position=0; position<string.length; position++){
        if(string.charAt(position)==letter){
            letter_count +=1;
        }

    }
    return letter_count;
}
console.log(character_count('b','big fat bubble'));

//Question 2
function addN(n)
{
var i;
var sum = 0;
for(i = 1;i <= n; i++){
sum = sum + i;
}
return (sum);
}
console.log(addN(13));


// Question 3
function changString(string)
{
    return string.replace(/a/g,'1')
    .replace(/e/g,'2')
    .replace(/i/g,'3')
    .replace(/o/g,'4')
    .replace(/u/g,'5');
}

console.log(changString('how are you today?'));


//medium solutions

// Question 1











// Question 2

const EqualElements=
    arr => arr.every( v => v === arr[0] ); 

console.log(EqualElements(["@","@","@","@","1"]));


// Questio 3
function UniqueValues(array){
    var outputArray = []; 
    var count = 0; 
    var start = false; 
    for (j = 0; j < array.length; j++) { 
        for (k = 0; k < outputArray.length; k++) { 
            if ( array[j] == outputArray[k] ) { 
                start = true; 
            } 
        } 
        count++; 
        if (count == 1 && start == false) { 
            outputArray.push(array[j]); 
        } 
        start = false; 
        count = 0; 
    } 
    return outputArray;
}

console.log(UniqueValues(["1", "1", "1"]));

// Hard Solutions

//Question 1

function detect_data_type(value)
{
var dtypes = [Function, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type('a'));
console.log(detect_data_type(false));
console.log(detect_data_type([]));
console.log(detect_data_type(null));


// Question 2 







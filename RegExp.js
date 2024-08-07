// var string = "The Cat is on the roof and the cat is sleeping."
// var pattern = /cat/gi
// console.log(string.match(pattern))



// var Str = "Contact us at support@example.com or sales@domain.org."
// var pattern = /([a-zA-Z]+)(@)([a-zA-Z]+)(\.com|\.org)/;
// console.log(Str.match(pattern))


// 5/9/2024", "15/10/2024"
// dd/mm/yyyy or d/m/yyyy
// var str = "The event is on 5/9/2024 or 15/10/2024";
// var pattern = /(\d){1,}\/(\d){1,}\/(\d){4,}/g
// console.log(str.match(pattern))

// var str = "Hello there! How are you? Hello! What’s up?";
// var pattern = /Hello! /g
// console.log(str.match(pattern))

// "(123) 456-7890", "123-456-7890", "123.456.7890"
// var str= "My numbers are (123) 456-7890, 123-456-7890, and 123.456.7890.";
// var pattern =/(\d){3}\s(\d){3}[-](\d){4} |(\d){3}[-](\d){3}[-](\d){4} |(\d){3}[.](\d){3}[.](\d){4}/g
// console.log(str.match(pattern))

/*
You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)

*/

// var str ='FaZala khnaaa singaa yee Ayaraa'
// var pattern = /[A-Z]*[a-z]{6,}/g
// console.log(str.match(pattern))
// function factorail(num){
//     if (num === 1 || num === 0){
//         return 1
//     }
//     return num * factorail(num -1)
// }

// console.log( factorail(5))

function incrementString (string) {
        var arr = string.split('');
        if(isNaN(arr[arr.length - 1] )){
            arr.push('1');
            return arr.join('');
        }else{
            var pattern =/[a-zA-Z]+|\d{1,}/g ;
            string = string.match(pattern);
            var pop =string.pop(string[string.length -1]);
            var increment = parseInt(pop,10) + 1 ;
            string.push(increment);
           return string.join('')
        }
  }

  console.log( incrementString('foobar000'));
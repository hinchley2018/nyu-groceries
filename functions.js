let text1 = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
let text2 = "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...";
let text3 = "Curabitur iaculis, nisl ut tristique fringilla, orci purus rutrum arcu, sed pharetra lectus tortor eget orci."

//convert the first letter of each word to upper case
function capitalizeFirstLetter(text){
    let array1 = text.split(' ');
    let newarray1 = [];
    
    for(let x = 0; x < array1.length; x++){
        let firstLetter = array1[x].charAt(0).toUpperCase()
        let restOfWord = array1[x].slice(1)
        newarray1.push(firstLetter + restOfWord);
    }
    let bigText = newarray1.join(' ');
    return bigText
}
//find the longest word
function getLongestWord(text){
    array1 = text.match(/\w[a-z]{0,}/gi);
    let longest_word = array1[0];
    
    for(let x = 1 ; x < array1.length ; x++)
    {
      if(longest_word.length < array1[x].length)
      {
      longest_word = array1[x];
      } 
    }
    return longest_word
}
//count number of vowels
function getVowelCount(text){
    let vowel_list = 'aeiouAEIOU';
    let vcount = 0;
    
    for(let x = 0; x < text.length ; x++)
    {
      if (vowel_list.indexOf(text[x]) !== -1)
      {
        vcount += 1;
      }
    }
    return vcount
}

console.log(`The original string was:\n${text1}\nCapitalizing each word looks like:\n${capitalizeFirstLetter(text1)}\nThe longest word is ${getLongestWord(text1)}\nThere are ${getVowelCount(text1)} vowels`);

console.log(`The original string was:\n${text2}\nCapitalizing each word looks like:\n${capitalizeFirstLetter(text2)}\nThe longest word is ${getLongestWord(text2)}\nThere are ${getVowelCount(text2)} vowels`);

console.log(`The original string was:\n${text3}\nCapitalizing each word looks like:\n${capitalizeFirstLetter(text3)}\nThe longest word is ${getLongestWord(text3)}\nThere are ${getVowelCount(text3)} vowels`);
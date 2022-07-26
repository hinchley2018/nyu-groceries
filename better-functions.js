//convert the first letter of each word to upper case
function capitalizeFirstLetter(text){
    let array1 = text.split(' ');
    let newarray1 = [];
    
    for(let x = 0; x < array1.length; x++){
        newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
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
      if (vowel_list.indexOf(text1[x]) !== -1)
      {
        vcount += 1;
      }
    }
}
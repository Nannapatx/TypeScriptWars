function getMiddle(word: string): string {
  const middleIndex = Math.floor(word.length / 2); //this will get the actual value of division of the word length by 2 มันจะปัดลงเพราะมันเป็นเลขจำนวนเต็ม
  return word.length % 2 === 0
    ? word.slice(middleIndex - 1, middleIndex + 1)
    : word[middleIndex]; //by using this, it will get the character in the middle of the word by 
    //using the middleIndex as the index of the word (so its basically the 4th character of the word)
}
console.log(getMiddle("tedsdts")); 
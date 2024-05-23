function getMiddle(word) {
    var middleIndex = Math.floor(word.length / 2);
    console.log(middleIndex);
    return word.length % 2 === 0
        ? word.slice(middleIndex - 1, middleIndex + 1)
        : word[middleIndex];
}
console.log(getMiddle("tedsdts")); // es

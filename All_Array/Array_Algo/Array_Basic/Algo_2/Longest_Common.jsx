
:::::: Longest Common Prefix::::::::::::::::::::::::::::
function longestCommonPrefix(word1, word2) {
    let prefix = "";
    const minLength = Math.min(word1.length, word2.length);

    for (let i = 0; i < minLength; i++) {
        if (word1[i] === word2[i]) {
            prefix += word1[i]; // Add character to prefix if they match
        } else {
            break; // Break the loop if characters don't match
        }
    }
    return prefix;
}
// Example usage:
console.log(longestCommonPrefix('hello', 'world')); // Output will be an empty string as there's no common prefix
console.log(longestCommonPrefix('cat', 'cattle')); // Output will be "cat" as "cat" is the common prefix



// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
const getRandomIntInclusive = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}


export default {
    getRandomIntInclusive : getRandomIntInclusive
}
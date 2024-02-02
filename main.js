const findLongestWord = (obj) => {
    max = ''
    for (const string of obj) {
        if (string.length > max.length){
            max = string
        }
    }
    return max
};
const sumUniqueNumbers = (obj) => {
    const newObj = [... new Set(obj)];
    let result = 0;
    for (const num of newObj) {
        result += num
    }
    return result
}
const mergeArrays = (...obj) => {
    let result = []; 
    obj.forEach(obj => { 
        result = [...result, ...obj] 
    }); 
 
    return [... new Set(result)]
}
const hasProperty = (obj, value) => obj[value] === undefined ? false : true;
const getPropertyValue = (obj, value) => obj[value] === undefined ? undefined : obj[value];
const invertObject = (obj) => {
    result = {}
    for (const mas of Object.entries(obj)) {
        result[mas[1]] = mas[0]
    }
    return result;
}

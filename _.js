const _ = {
    clamp(number, lowerBound, upperBound) {
        return Math.min(Math.max(number, lowerBound), upperBound);
    },
    clamp2(number, lowerBound, upperBound) {
        if (number < lowerBound) {
            return lowerBound;
        } else if (number < upperBound) {
            return number;
        } else {
            return upperBound;
        };
    },
    inRange(number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        } else if (start > end) {
                let swap = end;
                end = start;
                start = swap;
        };
        return (number >= start && end > number);
    },
    words(string) {
        return string.split(' ');
    },
    pad(string, length) {
        if (string.length >= length) {
            return string;
        };
        const quotient = Math.floor((length - string.length)/2);
        return ' '.repeat(quotient) + string + ' '.repeat(length - string.length - quotient);
    },
    has(object, key) {
        return !(object[key] === undefined);
    },
    invert(object) {
        const newObject = {};
        for (let key in object) {
            newObject[object[key]] = key;
        };
        return newObject;
    },
    findKey(object, predicateFunction) {
        for (let key in object) {
            if (!!predicateFunction(object.key) === true) {
                return key;
            };
        };
        return undefined;
    },
    drop(array, number = 1) {
        return array.slice(number);
    },
    dropWhile2(array, predicateFunction) {
        array.forEach((value, index, array) => {
            if (predicateFunction(value, index, array)) {
                array.shift();
            } else {
                return array;
            };
        });
        return array;
    },
    dropWhile(array, predicateFunction) {
        const falsyIndex = array.findIndex((value, index, array) => {
            return !predicateFunction(value, index, array);
        });
        return this.drop(array, falsyIndex);
    },
    chunk(array, size = 1) {
        const chunkArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkArray.push(array.slice(i, i + size));
        };
        return chunkArray;
    }
};

// Do not write or modify code below this line.
module.exports = _;
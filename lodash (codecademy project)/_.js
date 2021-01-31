const _ = {
    clamp(number, lower, upper) {
        var lowerClampedValue = Math.max(number, lower)
        var clampedValue = Math.min(lowerClampedValue, upper)
        return clampedValue
    },

    inRange(number, startValue, endValue) {
        if (endValue === undefined) {
            endValue = startValue
            startValue = 0
        }

        if (startValue > endValue) {
            let tempValue = startValue
            startValue = endValue
            endValue = tempValue
        }

        if (number < startValue || number >= endValue) {
            return false
        } else {
            return true
        }
    },

    words(string) {
        return string.split(' ')
    },

    pad(string, length) {
        if (length <= string.length) {
            return string
        }
        const startPaddingLength = Math.floor((length-string.length)/2)
        const endPaddingLength = (length-string.length-startPaddingLength)
        const paddedString = ' '.repeat(startPaddingLength)+string+' '.repeat(endPaddingLength)
        return paddedString
    },

    has(object, key) {
        const hasValue = object[key]
        if (hasValue != undefined) {
            return true
        } else {
            return false
        }
    },

    invert(object) {
        let newObj = {}
        for (key in object) {
            const originalValue = object[key]
            newObj = {originalValue : key}
        }
        return newObj
    },

    findKey(object, predication) {
        for (let key in object) {
            let value = object[key];
            let predicateReturnValue = predication(value)
            if (predicateReturnValue === true) {
                return key
            }
        }
        return undefined
    },

    drop(array, number=1) {
        return array.slice(number)
    },

    dropWhile(arr, predicate) {
        const cb = (element, index) => {
            return !predicate(element, index, arr)
        }
        let dropNumber = arr.findIndex(cb)
        let droppedArray = this.drop(arr, dropNumber)
        return droppedArray
    },

    chunk(arr, size=1) {
        let arrayChunks = []
        for (i = 0; i < arr.length;i += size) {
            let arrayChunk = arr.slice(i, i+size)
            arrayChunks.push(arrayChunk)
        }
        return arrayChunks
    }



};




// Do not write or modify code below this line.
module.exports = _;
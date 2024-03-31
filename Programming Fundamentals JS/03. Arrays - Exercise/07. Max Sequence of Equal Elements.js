function maxSequenceOfEqualElements(arr) {
    let longestSequence = [];
    let leftMostIndex = 0;
 
 
    for (let i = 0; i < arr.length; i++) {
        currentEl = arr[i];
        let currentSequence = [currentEl];
 
 
        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j];
 
            if (nextEl === currentEl) {
                currentSequence.push(nextEl)
            } else {
                break;
            }
 
        }
 
        if (currentSequence.length > longestSequence.length) {
            longestSequence = [];
            for (let j = 0; j < currentSequence.length; j++) {
                longestSequence.push(currentSequence[j]);
            }
        } else if (currentSequence.length === longestSequence.length) {
            if (i < leftMostIndex) {
                leftMostIndex = i;
            }
        }
    }
    console.log(longestSequence.join(' '));
}
    

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
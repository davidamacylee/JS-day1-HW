function findWords(arr, str) {
    for (let i = 0; i < arr.length; i++) {
        if (str.includes(arr[i])) {
            console.log('Matched dog_name');
        } else {
            console.log('No Matches');
        }
    }
}

let dog_string = 'Hello Max, my name is Dog, and I have purple eyes!'
let dog_names = ['Max', 'HAS', 'PuRple', 'dog']
findWords(dog_names, dog_string)


let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr[i] = 'even index'
        }
    }
}

replaceEvens(given_arr)
console.log(given_arr)
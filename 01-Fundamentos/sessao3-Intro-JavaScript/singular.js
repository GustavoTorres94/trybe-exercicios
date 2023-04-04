const array1 = [2, 3, 6, 7, 10, 1]
const array2 = [9, 1, 3, 5, 7]


function indiceDoMaior(array) {
    let maiorIndex = 0;
    for (let i = 0; i < array.length; i += 1){
        if (array[i] > maiorIndex) {
          maiorIndex = array[i] 
        }
        return console.log(maiorIndex)
    }
   
}
indiceDoMaior(array2)
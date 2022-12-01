function matrixProduct(mat1, mat2) {
    let result = [];
    for (let i = 0; i < mat1.length; i++) {
        result[i] = [];
        for (let j = 0; j < mat2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < mat1[0].length; k++) {
                sum += mat1[i][k] * mat2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}


function sumOfMatrices(mat1, mat2){
    let result = [];
    for(i=0; i< mat1.length; i++){
        result[i] = [];
        for (let j = 0; j < mat1[0].length; j++){
            let sum = 0;
            
                sum += mat1[i][j] + mat2[i][j];
            
            result[i][j] = sum;
        }
    }
    return result;
}

function sumOfEachRow(mat){
    result = []
    for(i=0; i< mat.length; i++){
        result.push(sumOfArray(mat[i]));
        }
        return result;
    }

function sumOfArray(arr){
    sum = 0;
    for(j = 0; j< arr.length; j++){
        sum += arr[j]
    }
    return sum;

}

function countWords(a){
    return a.split(" ").filter(el => el != "").length;
}

function trim(str) {
    let doneTrimming = false;
    let result = "";
    for (let  i= 0; i < str.length; i++) {
        if(str[i] !== ' '){
            doneTrimming = true
        }
        if(doneTrimming){
            result += str[i]
        }
    }
    return result;
}

module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow,
    sumOfArray,
    countWords,
    trim
}
 

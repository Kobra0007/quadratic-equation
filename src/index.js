module.exports = function solveEquation(equation) {
   
    let answer = [];
    let arr = equation.replace(/\s/g, "").match(/[^\^]\d+/g);

    let discriminant = Math.pow(arr[1], 2) - 4 * arr[0] * arr[2];
    if(discriminant > 0) {
        let rootDisc = Math.sqrt(discriminant);
        answer[0] = Math.round(( -arr[1] - rootDisc) / (2 * arr[0]));
        answer[1] = Math.round(( -arr[1] + rootDisc) / (2 * arr[0]));
    }
    return answer.sort( (a,b) =>{
        return a - b ;
    } );
    
}
 
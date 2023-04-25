




// function exam() {
//     let arr = [1, 2, 3]
//     let first = arr.shift()
//     return first;
// }
// console.log(exam())




// function exam(a,b) {
//     let arr = [a,b];
//     return arr
// }
// console.log(exam(1, 2))


// function exam(arr){
//     return arr.reverse()
// }
// console.log(exam([1,2,3,4,5,6]))




// function addtoarr(arr) {
//     return arr.map(n => n + 1);
// }
// console.log(addtoarr([1, 2, 3, 4, 5]))



// function lastelement(arr){
//     return arr.pop()
// }
// console.log(lastelement([1,2,3,4,7,8,5,44]))


// function elem(arr){
//     return arr.indexOf(1)
// }
// console.log(elem([0,10,1]))


// function test(arr){
//     return arr.join("")
// }
// console.log(test(["dbgjh",2,4,"dhfbv",7,1,7]))



// function check(arr, number) {
//     let cnt = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === number) {
//             cnt++;
//         }
//     }
//     if (cnt >= 1) return true;
//     else return false;
// }
// console.log(check([1,5,8,1,5,4], 11))



// function check(arr, string) {
//     let cnt = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === string) {
//             return i
//         }
//     }
//     return "I could not find anything"
// }
// console.log(check(["hi", "edabit", "fgh", "abc"], "fgh"))



// function exam(arr, arr2) {
//     return arr.concat(arr2)
// }
// console.log(exam([1, 5, 5, 5, 12, 5,], [98, 52, 89, 5, 2]))


// function exam(arr) {
//     return arr.map(parseFloat);
// }
// console.log(exam(["9.4", "4.2"]))




//------------------------------------------22222222222222222222---------------------------------------------

// function exam(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "number") {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(exam([1, 2, "13", "4", "645"]))

//1

//------------------------------------------3333333333333333333---------------------------------------------


// function exam(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]%10 === 7) {
//             return "Boom!"
//         }
//     }
//     return "there is no 7 in the array"
// }
// console.log(exam([1,2,3,4,5,6,7]))

// 0.5
//------------------------------------------4444444444444444444---------------------------------------------

// function exam(arr) {

//     let m1 = arr.replace("a", "-a-")
//     let m2 = m1.replace("e", "-e-")
//     let m3 = m2.replace("i", "-i-")
//     let m4 = m3.replace("o", "-o-")
//     let m5 = m4.replace("u", "-u-")
//     let m6 = m5.replace("A", "-A-")
//     let m7 = m6.replace("E", "-E-")
//     let m8 = m7.replace("I", "-I-")
//     let m9 = m8.replace("O", "-O-")
//     let m10 = m9.replace("U", "-U-")
//     return m10;
// }
// console.log(exam("Edabit"))


//------------------------------------------5555555555555555555---------------------------------------------


// function exam(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i+1]) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(exam("loop"))







// function home(...arrays) {
//     return [].concat(...arrays);
// }
// console.log(home([1, 2, 3], [4, 5], [6, 7]))


// function home(arr){
//     let x = arr.sort((a,b)=>{
//         return a-b;
//     })
//     let y = x.reverse();
//     return y[1]

// }
// console.log(home([10, 40, 30, 20, 50]))



// function home(arr) {
//     let x = arr.filter((n, i) => {
//         return n;
//     })
//     return x;
// }
// console.log(home([0, 1, false, 2, "", 3]))






















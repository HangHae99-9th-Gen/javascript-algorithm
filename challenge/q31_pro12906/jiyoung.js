// 프로그래머스 12906 같은 숫자는 싫어
// https://school.programmers.co.kr/learn/courses/30/lessons/12906

// 2) filter()
function solution(arr) {
    return arr.filter((element, index) => arr[index-1] !== arr[index])
}

// 1) forEach -> 효율성 테스트에서 시간초과로 떨어진다.
// answer.at(-1)을 answer[answer.length-1]로 바꾸면 통과한다.
// function solution(arr) {
//     const answer = [arr[0]]
//     arr.forEach(element => {
//         if(answer.at(-1)!=(element)) {
//             answer.push(element)
//         }
//     })
//     return answer
// }

// 3) 프로그래머스 코드
// => 나와 비슷한데 매개변수 val을 활용했음
// function solution(arr){
//     return arr.filter((val,index) => val != arr[index+1]);
// }

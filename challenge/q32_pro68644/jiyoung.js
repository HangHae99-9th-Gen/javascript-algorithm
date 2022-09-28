// 프로그래머스 68644 두 개 뽑아서 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/68644
// 정수 배열 numbers가 주어집니다. 
// numbers에서 서로 다른 인덱스에 있는 
// 두 개의 수를 뽑아 더해서 만들 수 있는 
// 모든 수를 배열에 오름차순으로 담아 
// return 하도록 solution 함수를 완성해주세요.

// 2) 이중 for문
function solution(numbers) {
    let answer = [];

    for(let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            if(answer.indexOf(numbers[i] + numbers[j])===-1){
                answer.push(numbers[i] + numbers[j])
            }
        }
    }

    return answer.sort((a, b) => a - b)
}


// 1) 나 왜 이딴식으로 풀었지?
// function solution(numbers) {
//     let answer = [];
//     numbers.forEach((item, index) => {
//         for(let i = 0; i < numbers.length; i++) {
//             if(i+index+1 < numbers.length) {
//                 answer.push(item + numbers[i+index+1])
//             }
//         }
//     })
//     return answer.filter((element, index) => answer.indexOf(element) === index).sort((a, b) => a - b);
// }

// 3) 프로그래머스 코드
// function solution(numbers) {
//     const temp = []

//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             temp.push(numbers[i] + numbers[j])
//         }
//     }

//     const answer = [...new Set(temp)]

//     return answer.sort((a, b) => a - b)
// }

console.log(solution([2,1,3,4,1]))
console.log(solution([5,0,2,7]))
// 프로그래머스 68644 두 개 뽑아서 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/68644
// 정수 배열 numbers가 주어집니다. 
// numbers에서 서로 다른 인덱스에 있는 
// 두 개의 수를 뽑아 더해서 만들 수 있는 
// 모든 수를 배열에 오름차순으로 담아 
// return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    let answer = [];
    numbers.forEach((item, index) => {
        console.log("현재 요소: ", item)
        console.log("다음 요소: ", numbers[numbers.indexOf(item)+1])
        answer.push(item + numbers[numbers.indexOf(item)+1])
    })
    
    return answer;
}

console.log(solution([2,1,3,4,1]))
// console.log(solution([5,0,2,7]))
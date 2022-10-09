// 프로그래머스 81301 숫자 문자열과 영단어
// https://school.programmers.co.kr/learn/courses/30/lessons/81301

const numStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function solution(s) {
    // var answer = '';
    for(let i = 0; i < numStr.length; i++) {
        s = s.split(numStr[i])
        // console.log(s)
        s = s.join(i)
        // console.log(s)
    }
    return parseInt(s);
}

console.log(solution("one4seveneight"))
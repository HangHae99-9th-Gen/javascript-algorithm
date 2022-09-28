// 프로그래머스 86491 최소직사각형
// https://school.programmers.co.kr/learn/courses/30/lessons/86491

// 2) forEach 활용
function solution(sizes) {
    let xMax = 0;
    let yMax = 0;
    sizes.forEach(items => { 
        const [x, y] = items.sort((x, y) => x - y)
        if (x > xMax) xMax = x;
        if (y > yMax) yMax = y;
    })
    return xMax * yMax
}

// 1) for문 활용
// function solution(sizes) {
//     let xMax = 0;
//     let yMax = 0;
//     for(let i = 0; i < sizes.length; i++) {
//         sizes[i].sort((a, b) => b - a);
//         if(sizes[i][0] > xMax) xMax = sizes[i][0]
//         if(sizes[i][1] > yMax) yMax = sizes[i][1]
//     }
//     return xMax * yMax
// }

// 3) 프로그래머스 코드
// function solution(sizes) {
//     const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
//     return hor * ver;
// }

let a = [[60, 50], [30, 70], [60, 30], [80, 40]]
console.log(solution(a));

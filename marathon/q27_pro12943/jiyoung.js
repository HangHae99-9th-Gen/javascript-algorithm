function solution(num) {
    let cnt = 0;
    while (1) {
      if (num == 1) {
        return cnt;
      }
      if (cnt >= 500) {
        return -1;
      }
      if (num % 2 == 0) {
        num = num / 2;
        cnt++;
      } else {
        num = num * 3 + 1;
        cnt++;
        continue;
      }
    }
  }
  
  // 프로그래머스 코드
  // 1.
  function collatz(num) {
      var cnt = 0;
      while (num != 1 && cnt != 500) {
          num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
          cnt++;
      }
      return num == 1 ? cnt : -1;
  }
  
  // 2. 재귀함수 이용
  function collatz(num,count = 0) {
      return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
  }
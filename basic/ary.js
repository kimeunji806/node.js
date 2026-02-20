// ary.js
console.clear();

// 급여가 10000보다 적은 사람들.
const less_then_10000 = (elem, idx) => (elem.salary < 10000 ? true : false);

//  여자 중에서 급여가 8000 이상인 사람.
const more_than_8000 = (elem) =>
  elem.gender == "Female" && elem.salary >= 8000 ? true : false;

// filter() ~조건을 만족하는 요소를 새로운 배열로 반환.
result = ary.filter(more_than_8000).map((elem, idx, Array) => {
  // map() : A -> A'(매핑)
  // id/first_name/last_name/email/gender/salary
  // no/name/gender/salary
  // 객체구조분해.
  const { id, first_name, last_name, gender, email, salary } = elem;
  //
  const obj = {
    no: id,
    name: first_name + "-" + last_name,
    gender,
    salary,
  };
  return obj;
});
// 결과 출력.
console.log(result);

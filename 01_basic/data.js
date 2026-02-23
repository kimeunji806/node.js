const data = `[{"id":1,"first_name":"William","last_name":"Scini","email":"wscini0@archive.org","gender":"Male","salary":8110},
{"id":2,"first_name":"Cele","last_name":"Spieght","email":"cspieght1@bing.com","gender":"Female","salary":8411},
{"id":3,"first_name":"Othelia","last_name":"Buckthought","email":"obuckthought2@webs.com","gender":"Female","salary":13580},
{"id":4,"first_name":"Vivyanne","last_name":"Aristide","email":"varistide3@surveymonkey.com","gender":"Female","salary":10157},
{"id":5,"first_name":"Fitz","last_name":"Piscopello","email":"fpiscopello4@salon.com","gender":"Male","salary":13849},
{"id":6,"first_name":"Grove","last_name":"Kinder","email":"gkinder5@tinyurl.com","gender":"Male","salary":10828},
{"id":7,"first_name":"Etheline","last_name":"Vitte","email":"evitte6@cornell.edu","gender":"Female","salary":10879},
{"id":8,"first_name":"Kendricks","last_name":"Bee","email":"kbee7@lulu.com","gender":"Male","salary":3890},
{"id":9,"first_name":"Adey","last_name":"Ewbach","email":"aewbach8@sfgate.com","gender":"Female","salary":3737},
{"id":10,"first_name":"Bobby","last_name":"Ludwig","email":"bludwig9@hexun.com","gender":"Male","salary":13408},
{"id":11,"first_name":"Rochell","last_name":"Keighly","email":"rkeighlya@auda.org.au","gender":"Female","salary":10968},
{"id":12,"first_name":"Auguste","last_name":"Sciusscietto","email":"asciussciettob@hud.gov","gender":"Female","salary":13713},
{"id":13,"first_name":"Olin","last_name":"Boal","email":"oboalc@indiegogo.com","gender":"Male","salary":5832},
{"id":14,"first_name":"Abbot","last_name":"Trayhorn","email":"atrayhornd@archive.org","gender":"Male","salary":7160},
{"id":15,"first_name":"Dore","last_name":"Cullin","email":"dculline@omniture.com","gender":"Male","salary":3749},
{"id":16,"first_name":"Tristam","last_name":"Coulson","email":"tcoulsonf@google.ca","gender":"Male","salary":7604},
{"id":17,"first_name":"Letty","last_name":"Jindracek","email":"ljindracekg@usatoday.com","gender":"Female","salary":8989},
{"id":18,"first_name":"Christoph","last_name":"Lockhart","email":"clockharth@flickr.com","gender":"Male","salary":13622},
{"id":19,"first_name":"Gretchen","last_name":"Blackmore","email":"gblackmorei@paginegialle.it","gender":"Female","salary":11674},
{"id":20,"first_name":"Phylys","last_name":"Toffalo","email":"ptoffaloj@ycombinator.com","gender":"Female","salary":6657}]`;

// JSON문자열 ->Object
const ary = JSON.parse(data);
// console.log(ary);

// Object -> JSON
const json = JSON.stringify(ary);
// console.log(json);

// sort() -> 오름차순으로 정렬(가나다순)
// console.log(["Hello", "Hi", "Good", "World"].sort());
// console.log([10, 35, 21, 121, 11].sort((n1, n2) => n1 - n2)); // 오름차순 -값 반환.

// id순으로 정렬함수.
const order_by_id = (obj1, obj2) => obj2.id - obj1.id;

// salary 오름차순 정렬.
const order_by_salary = (obj1, obj2) => obj1.salary - obj2.salary;

// first_name 오름차순 정렬.
const order_by_fn = (obj1, obj2) =>
  obj1.first_name < obj2.first_name ? -1 : 1;
let result = ary.sort(order_by_fn); // id기준 정렬. 음수면 2 앞으로 양수면 1 앞으로.
// console.log(result);

if ("hello" > "nice") {
  // console.log("hello");
} else {
  // console.log("nice");
}

function getMember() {
  return ["user01", "user02", "user03"];
}

// module.exports = { ary, order_by_fn };

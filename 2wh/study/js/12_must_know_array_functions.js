/**
 * Array Functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// push() 어레이 끝에 반환 값을 추가한 다음에 길이를 반환해준다.
console.log(iveMembers.push('whale'));
console.log(iveMembers);

console.log('-------------------');
// pop() 마지막 element 값을 삭제한다. 삭제한 그 값을 반환한다.
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('-------------------');
// shift() 첫번째 element 값을 삭제한다. 삭제한 그 값을 반환한다.
console.log(iveMembers.shift());
console.log(iveMembers);

console.log('-------------------');
// unshift() push()와 마찬가지로 값을 추가하지만 맨앞에 추가한다.
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

console.log('-------------------');

// splice() 
console.log(iveMembers.splice(0,3));
console.log(iveMembers);

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// concat() 새로운 array를 만들어서 반환해줌, 저장되지는 않는다. 원래의 Array는 유지됨.
console.log(iveMembers.concat('Whale'));
console.log(iveMembers);

// slice() 원래의 Array는 유지됨됨
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

// spread operator ... Array 값을 펼쳐서 넣어준다.
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3);

console.log('--------------------');
let iveMembers4  = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log(iveMembers2 === iveMembers); // iveMembers2 is spread from iveMembers


// join() ()안의 arguments를 기준으로 모든 값을 합친다.
console.log(iveMembers.join());
console.log(iveMembers.join('/')); 
console.log(iveMembers.join(', '));

// sort() 오름차순 정렬
iveMembers.sort();
console.log(iveMembers);

// reverse() 내림차순 정렬
console.log(iveMembers.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);

/**
 *  a, b를 비교했을때
 *  1) a를 b 보다 나중에 정렬하려면(뒤에 두려면) 0보다 큰 숫자를 반환
 *  2) a를 b 보다 먼저 정렬하려면(앞에 두려면) 0보다 작은 숫자를 반환
 *  3) 원래 순서를 그대로 두려면 0를 반환
 */
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => a > b ? -1 : 1 );
console.log(numbers);

// map() Array 모든 값에 대해서 영향을 줄 수 있는 함수.원래 Array유지 
console.log('-------------------');
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if(x === '안유진'){
        return `아이브: ${x}`;
    }else{
        return x;
    }
}));
console.log(iveMembers);

// filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0));

// find()
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));

// reduce() 함수를 사용해서 iveMembers 변수에 있는 모든 스트링 값들의
// 길이를 더해서 반환하라.
// 참고로 string의 길이는 .length를 이용해서 구할 수 있다.
console.log(iveMembers.reduce((p, n) => p + n.length, 0));
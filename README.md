# *__IMPORT / EXPORT__*
1. Default export
    - 이름을 지정하지 않고 내보냄
    - 1개의 파일에서 1개의 data만 export할 수 있다
1. Named export
    - 이름을 지정하여 내보냄
    - ` { getType } ` > 중괄호 안에 이름 지정해야함
    - 이름만 지정되어 있으면 개수는 상관 없음
    - ` as `를 사용하여 객체 구조 분해(`:`)에서 처럼 이름 변경 가능
    - __`*`: WildCard -> 여러 내용을 한꺼번에 지정할 목적으로 사용__
        - ` import * as C from './getType' `
1. Named와 Default 같이 사용 가능

# *__JSON__*
> *J*ava*S*cript *O*bject *N*otation

## STORAGE
localStorage와 sessionStroage로 나뉘며, 동일한 컴퓨터와 동일한 브라우저에서만 작동한다
### localStorage
- 로컬 저장소에 저장하며, 브라우저 히스토리를 삭제하지 않는 한 영구 저장된다
- ```js
    localStorage.setItem('key', value);
    JSON.parse(localStroage.getItem('key'));
    localStorage.removeItem('key');
    ```
- 이미 저장된 오브젝트를 변경할 경우
  ```js
    const str = JSON.parse(localStorage.getItem('key', value));
    str.key = value;
    localStorage.setItem(JSON.stringify(str));
  ```
### sessionStorage
- 세션 저장소에 저장하며, 브라우저 종료 시 소멸한다
- ```js
    sessionStorage.setItem('key', value);
    JSON.parse(localStorage('key'));
    sessionStorage.remove('key');
  ```
- 이미 저장된 오브젝트를 변경할 경우
  ```js
    const str = JSON.parse(sessionStorage.getItem('key', value));
    str.key = value;
    sessionStorage.setItem(JSON.stringify(str));
  ```
## LOWDB
>[lowdb](https://github.com/typicode/lowdb) github <br>
>[lowdb Use](https://m.blog.naver.com/PostView.naver?blogId=pjok1122&logNo=221569697267&proxyReferer=https:%2F%2Fwww.google.com%2F)

### lowdb란?
JSON 파일 형식을 이욜하여 데이터를 저장하는 간단한 DB
### lowdb 설치
` npm i lowdb `
### lowdb 생성
```js
  const low = require('lowdb');
  const db = low('data.json');
  db.defaults({table1: [], table2: []}).write(); // 초기 데이터 설정
```
### lowdb CRUD
#### Create
```js
  db.get('table1')
  .push({
    name: '찬건',
    age: 25
  })
  .write();
```
table1: [{'찬건', 25}]
#### Read
```js
  db.get('table1').values();
```
table1의 모든 데이터 조회
#### Update
```js
  db.get('table1')
  .find({age: 25})
  .assgin({age: 26})
  .write()
```
table1에서 age가 25인 튜플을 찾은 후, age의 값을 26으로 변경 후 wirte
#### Delete
```js
  db.get('table1')
  .remove({age:26})
  .write()
```
table1에서 age가 26인 튜플을 제거 후, JSON에 반환함


## AXIOS
[axios Guide](https://xn--xy1bk56a.run/axios/guide/)

query string
method chaining
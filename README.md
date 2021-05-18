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
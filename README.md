# Food Nutrition Facts Backend

## 작업 과정

API 구조는 명확하게 제공되었으므로, 요구사항 명세서 작성과 API 명세서 작성을 제외하고 작성한다.

작업 순서는 다음과 같다.

1. DB 구조 설계
2. API 구현 
3. Table 생성과 초기 데이터를 위한 SQL문 작성

### 1. DB 구조 설계

DB는 RDBMS(PostgrSQL)을 사용한다.

DB 구조 설계는 요구사항 정의, 개념적 설계, 논리적 설계, 물리적 설계 단계로 나누어서 진행했다.

#### 요구사항 정의

요구사항은 mail로 답변을 통해서 필요한 data만 직접 저장받아도 된다는 허락을 받았으므로, search에서 필요한 정보 기반으로 저장하도록 한다.

요구사항은 search api에서 필요한 항목을 필수로 포함하도록 한다.

![required.jpeg](resource%2Frequired.jpeg)

식품영양성분은 위에 해당하는 항목을 가져야 한다.


#### 개념적 설계

개념적 설계 단계에서는 요구사항에 따라 개체와 속성, 관계를 나누어서 작성한다.

![sakak_diagram-1.png](resource%2Fsakak_diagram-1.png)


#### 논리적 설계

논리적 설계는 관계에 해당하는 내용을 릴레이션 스키마 변환 규칙에 따라서 변환한다.

![sakak_diagram-2.png](resource%2Fsakak_diagram-2.png)

개념적 설계에서 제외했었던 생성시간, 수정시간을 추가했다.

#### 물리적 설계

실제로 PostgreSQL에서 사용하는 데이터 타입을 사용해서 물리적인 설계를 진행한다.

![sakak_diagram-3.png](resource%2Fsakak_diagram-3.png)

문자열을 varchar(255)로만 제한 해 두었지만 개발 완료 후, 문자열 제한사항을 조금 더 강하게 수정할 예정


## 참고

#### DB 정규화를 고려하지 않은 이유.

출력 항목에 대한 정규화가 가능한 내용은 지역/제조사 부분인데, API 생성, 수정시 지역/제조사가 바뀌는 것을 고려해야 하므로,
API 복잡성 증가를 고려해서 정규화를 하지 않았다.  


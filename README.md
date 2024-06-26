# Food Nutrition Facts Backend

이 프로젝트는 NestJS로 작성된 웹 애플리케이션입니다. Docker 및 Docker Compose를 사용하여 쉽게 실행해 볼 수 있습니다.

## 프로젝트 실행 방법

<br>
<br>

### 사전 요구 사항
- [Docker](https://www.docker.com/)가 설치되어 있어야 합니다.
- [Docker Compose](https://docs.docker.com/compose/)가 설치되어 있어야 합니다.

<br>
<br>

### Docker Compose를 사용하여 프로젝트 실행

1. Docker Compose를 사용하여 컨테이너를 시작합니다:

    ```bash
    docker-compose up -d
    ```

2. 브라우저를 열고 `http://localhost:3000`에 접속합니다. 애플리케이션이 정상적으로 실행되고 있는 것을 확인할 수 있습니다.

3. 애플리케이션의 API 문서는 `http://localhost:3000/apiDocs` Swagger를 통해 확인할 수 있습니다.

<br>
<br>
<br>
<br>

## 작업 과정

API 구조는 명확하게 제공되었으므로, 요구사항 명세서 작성과 API 명세서 작성을 제외하고 작성한다.

작업 순서는 다음과 같다.

<br>

1. DB 구조 설계
2. API 구현 
3. Table 생성과 초기 데이터를 위한 SQL문 작성

<br>

### 1. DB 구조 설계

DB는 RDBMS(PostgrSQL)을 사용한다.

DB 구조 설계는 요구사항 정의, 개념적 설계, 논리적 설계, 물리적 설계 단계로 나누어서 진행했다.

<br>
<br>

#### 요구사항 정의

요구사항은 mail로 답변을 통해서 필요한 data만 직접 저장받아도 된다는 허락을 받았으므로, search에서 필요한 정보 기반으로 저장하도록 한다.

요구사항은 search api에서 필요한 항목을 필수로 포함하도록 한다.

![required.jpeg](resource%2Frequired.jpeg)

식품영양성분은 위에 해당하는 항목을 가져야 한다.

<br>
<br>

#### 개념적 설계

개념적 설계 단계에서는 요구사항에 따라 개체와 속성, 관계를 나누어서 작성한다.

![sakak_diagram-1.png](resource%2Fsakak_diagram-1.png)

<br>
<br>

#### 논리적 설계

논리적 설계는 관계에 해당하는 내용을 릴레이션 스키마 변환 규칙에 따라서 변환한다.

![sakak_diagram-2.png](resource%2Fsakak_diagram-2.png)

개념적 설계에서 제외했었던 생성시간, 수정시간을 추가했다.

<br>
<br>

#### 물리적 설계

실제로 PostgreSQL에서 사용하는 데이터 타입을 사용해서 물리적인 설계를 진행한다.

![sakak_diagram-3.png](resource%2Fsakak_diagram-3.png)

<br>
<br>

#### 최종 DB 구조

구현을 완료하면서, 조금씩 변한 구조와 Null 조건을 마지막으로 수정함.

![sakak_diagram-4.png](resource%2Fsakak_diagram-4.png)


<br>
<br>
<br>

### API 구현

Create API, Update API, Delete API, Read API

를 만들어두었고 Swagger를 이용해서 사용 방법을 확인할 수 있다.


## 고려한 점

### Project

#### DB 정규화를 고려하지 않음.

출력 항목에 대한 정규화가 가능한 내용은 지역/제조사 부분인데, API 생성, 수정시 지역/제조사가 바뀌는 것을 고려해야 하므로,
API 복잡성 증가를 고려해서 정규화를 하지 않았다.

<br>

#### HttpExceptionFilter를 이용해서, Error 구체화함.

HttpExceptionFilter를 사용해서, 예외가 발생하는 경우 기본보다 구체적인 응답을 반환하고 errorLog를 남기도록 했다.

<br>

#### Swagger 사용함.

API를 쉽게 읽을 수 있도록 Swagger를 사용했다.

<br>

#### class-validator 사용함.

class-validator를 사용해서 요청값이 잘못 오는 경우에는 pipe에서 막아두었다.

<br>

#### DB 초기값으로 미리 제공해준 xlsx 정보를 sql로 만들어서 제공함.

xlsx에서 필요한 정보를 받아와서 sql문으로 만들어 필요한 xlsx 정보 전체를 db에 저장함.

<br>

#### DockerFile + DockerCompose 사용

프로젝트에 대해서 간단하게 docker-compose up 으로 실행시킬 수 있도록 작업함.

<br>
<br>
<br>

### Rest API

REST API는 Representational State Transfer (REST) 아키텍처 스타일을 따르는 웹 서비스 인터페이스다.

해당 API 작업에 있어서 자원 기반의 설계를 고려해서 Restful 하게 작업했다.

<br>

#### nutrition을 기준으로 REST API 적용

생성: `nutrition`, 조회: `nutrition`, 수정: `nutrition/:id`, 삭제: `nutrition/:id` 로 자원 기준으로 API를 설계했다.

<br>

#### 상태 코드를 유효하게 사용

생성 성공: `201`, 조회 성공: `200`, 수정 성공: `201`, 삭제 성공 `204`, 예외는 400번대로 자원의 상태에 따라 상태코드를 두었다.

<br>
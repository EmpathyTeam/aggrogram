# 어?그로그램

Supabase를 활용하여 로그인, 회원가입 및 CRUD를 구현한 뉴스피드 프로젝트

# 🖥️ 프로젝트 소개

유저 간의 취미를 공유할 수 있는 웹 페이지

# 🕰️ 개발 기간

2024.08.28 ~ 2024.09.03

# 📂 폴더 구조

📦src  
 ┣ 📂api  
 ┃ ┣ 📜supabasePost.js  
 ┃ ┗ 📜supabaseStorage.js  
 ┣ 📂assets  
 ┃ ┗ 📜react.svg  
 ┣ 📂components  
 ┃ ┣ 📂board  
 ┃ ┃ ┣ 📜AddBoard.jsx  
 ┃ ┃ ┣ 📜BoardButton.jsx  
 ┃ ┃ ┣ 📜BoardForm.jsx  
 ┃ ┃ ┗ 📜UpdateBoard.jsx  
 ┃ ┣ 📂commons  
 ┃ ┃ ┣ 📜RoundButton.jsx  
 ┃ ┃ ┣ 📜sideBar.jsx  
 ┃ ┃ ┗ 📜Spinner.jsx  
 ┃ ┣ 📂Join  
 ┃ ┃ ┣ 📜SignIn.jsx  
 ┃ ┃ ┗ 📜SignUp.jsx  
 ┃ ┗ 📂posts  
 ┃ ┃ ┣ 📜PostCard.jsx  
 ┃ ┃ ┗ 📜PostList.jsx  
 ┣ 📂configs  
 ┃ ┗ 📜supabaseConfig.js  
 ┣ 📂contexts  
 ┃ ┗ 📜AggrogramContext.jsx  
 ┣ 📂layouts  
 ┃ ┣ 📜Header.jsx  
 ┃ ┗ 📜LayOut.jsx  
 ┣ 📂pages  
 ┃ ┣ 📜Board.jsx  
 ┃ ┣ 📜Join.jsx  
 ┃ ┣ 📜Main.jsx  
 ┃ ┗ 📜MyPage.jsx  
 ┣ 📂shared  
 ┃ ┗ 📜Router.jsx  
 ┣ 📂styles  
 ┃ ┣ 📜BoardButtonStyle.js  
 ┃ ┣ 📜BoardFormStyle.js  
 ┃ ┣ 📜BoardStyle.js  
 ┃ ┣ 📜HeaderStyle.js  
 ┃ ┣ 📜RouterStyle.js  
 ┃ ┗ 📜sideBarStyle.js  
 ┣ 📂utils  
 ┃ ┗ 📜formatDate.js  
 ┣ 📜App.css  
 ┣ 📜App.jsx  
 ┣ 📜index.css  
 ┗ 📜main.jsx

# 🧩 주요 기능

## 1. 회원가입 및 로그인

### 1-1. 회원가입

### 1-2. 로그인

## 2. 게시글

### 2-1. 등록(Create)

<!-- ![image](https://github.com/user-attachments/assets/c52b44a7-5459-44bb-a8d9-84656b4fc91b) -->

![image](https://github.com/user-attachments/assets/1b827e38-e152-4213-aa17-3fe4869425fc)
제목과 내용을 입력 후 `등록하기` 버튼 클릭 시 게시글이 `등록`됩니다.  
이미지 파일 첨부도 가능합니다.

### 2-2. 조회(Read)

![image](https://github.com/user-attachments/assets/455eb1e6-6db1-4624-b465-34b8f1c310e4)
사용자들이 작성한 게시글을 `조회`할 수 있으며, 각 게시물 클릭 시 상세 페이지로 이동합니다.

### 2-3. 수정(Update) \*\*이미지 캡쳐 추가해야 함!!

![image](https://github.com/user-attachments/assets/3b0b2e48-e358-4ed0-b0b9-09564d266828)
`수정하기` 클릭 시 본인이 썼던 게시글에 한하여 `수정`이 가능합니다.

![image](https://github.com/user-attachments/assets/15633b41-7e54-4ed2-a911-fd2703bac3bc)

### 2-4. 삭제(Delete)

![image](https://github.com/user-attachments/assets/bd3998a7-2fe0-4c0b-aa2c-15e8c8b6ba3e)
수정과 마찬가지로 `삭제하기` 클릭 시 본인이 썼던 게시글에 한하여 삭제가 가능합니다.

## 3. 마이페이지

### 3-1. 정보 조회 \*\*이미지 수정해야 함!!

![image](https://github.com/user-attachments/assets/fddb765e-6901-4e19-ab02-d13915dc20b4)
회원가입 시 입력했던 닉네임을 받아옵니다.  
또한 내가 작성한 게시글을 모아서 볼 수 있습니다.

### 3-2. 수정

![image](https://github.com/user-attachments/assets/fd3eee17-239b-41a1-83e9-2a426acf69b3)
`프로필 수정` 클릭 시 닉네임, 소개글, 프로필 이미지를 수정할 수 있습니다.

![image](https://github.com/user-attachments/assets/3ce0cc11-48ab-4490-957c-03009b8ee784)
수정한 프로필이 변경된 모습입니다.

# 🚨 트러블 슈팅

## 오류 내용

### 1. 구현하고자 했던 부분

### 2. 발생한 이슈

### 3. 시도한 방법

### 4. 해결 방법

##

![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
![supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)

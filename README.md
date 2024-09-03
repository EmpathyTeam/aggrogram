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
 ┃ ┃ ┣ 📜BoardForm.jsx  
 ┃ ┃ ┗ 📜UpdateBoard.jsx  
 ┃ ┣ 📂commons  
 ┃ ┃ ┣ 📜RadiusOrangeButton.jsx  
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

![image](https://github.com/user-attachments/assets/aee55650-5a99-4a7b-981d-afe94ba34345)  
이메일, 비밀번호, 닉네임을 입력하여 `회원가입`을 할 수 있습니다.

### 1-2. 로그인

![image](https://github.com/user-attachments/assets/0e317e30-bdf3-436d-8beb-a3afc5ed11a7)
회원가입 시 입력했던 이메일과 비밀번호를 입력하여 `로그인`을 할 수 있습니다.

## 2. 게시글

### 2-1. 등록(Create)

![image](https://github.com/user-attachments/assets/1b827e38-e152-4213-aa17-3fe4869425fc)
제목과 내용을 입력 후 `등록하기` 버튼 클릭 시 게시글이 `등록`됩니다.  
이미지 파일 첨부도 가능합니다.

### 2-2. 조회(Read)

![image](https://github.com/user-attachments/assets/455eb1e6-6db1-4624-b465-34b8f1c310e4)
사용자들이 작성한 게시글을 `조회`할 수 있으며, 각 게시물 클릭 시 상세 페이지로 이동합니다.

### 2-3. 수정(Update)

![image](https://github.com/user-attachments/assets/3b0b2e48-e358-4ed0-b0b9-09564d266828)
`수정하기` 클릭 시 본인이 썼던 게시글에 한하여 `수정`이 가능합니다.

![image](https://github.com/user-attachments/assets/573c696f-c666-438a-8b56-80ebcd056fe9)
![image](https://github.com/user-attachments/assets/b278b7b0-86e5-4dea-b2e5-f7cd580b1442)

### 2-4. 삭제(Delete)

![image](https://github.com/user-attachments/assets/bd3998a7-2fe0-4c0b-aa2c-15e8c8b6ba3e)
수정과 마찬가지로 `삭제하기` 클릭 시 본인이 썼던 게시글에 한하여 삭제가 가능합니다.

## 3. 마이페이지

### 3-1. 정보 조회

![image](https://github.com/user-attachments/assets/b3f31722-9048-45d7-a64a-5d83c29e421c)
회원가입 시 입력했던 닉네임을 받아옵니다.  
또한 내가 작성한 게시글을 모아서 볼 수 있습니다.

### 3-2. 수정

![image](https://github.com/user-attachments/assets/fd3eee17-239b-41a1-83e9-2a426acf69b3)
`프로필 수정` 클릭 시 닉네임, 소개글, 프로필 이미지를 수정할 수 있습니다.

![image](https://github.com/user-attachments/assets/3ce0cc11-48ab-4490-957c-03009b8ee784)
수정한 프로필이 변경된 모습입니다.

# 🚨 트러블 슈팅

## 마이페이지에서 새로고침 클릭 시 다른 페이지로 이동하는 오류

### 1. 구현하고자 했던 부분

마이페이지에서 새로고침 클릭 시 정상적으로 새로고침되게끔 하고 싶었습니다.

### 2. 발생한 이슈

마이페이지는 로그인한 회원만 접근하도록 설계가 되어있는 페이지입니다.  
로그인하지 않은 상태로 접근 시 `로그인 페이지`로 이동시킵니다.  
👇 코드 참고

```js
// 로그인한 상태에서만 접근 가능한 라우터
const PrivateRoute = () => {
  const { user } = useContext(AggrogramContext);

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
};
```

새로고침(리렌더링)함에 따라 user의 상태가 `null`이 되어 `로그인 페이지`로 이동되었습니다.  
그런데 이 페이지는 로그인한 user를 `메인 페이지`로 이동시키도록 설계가 되어있습니다.  
👇 코드 참고

```js
// 로그인한 상태라면 접근 불가능한 라우터
const AuthRoute = () => {
  const { user } = useContext(AggrogramContext);

  if (user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
```

### 3. 시도한 방법

1. `privateRoute`에서 설계해놓은 코드 주석 처리 후 jsx 문법 쓰는 곳에서 user가 없는 경우 alert창 호출  
   => 로그인이 되어있는 상태로 접근해도 alert창 호출됨

2. 기존에 있는 `useEffect` 안에 `async await` 구문을 써서 user의 값이 들어온 후 가져오도록 설계  
   => 1번의 방식과 같은 실행 결과

3. 로딩 중 state를 추가해서 상태에 따라 로직 처리

```js
const [isLoagding, setIsLoading] = useState(false);
```

```js
useEffect(() => {
  if (user) {
    setNewNickname(user.user_metadata.nickname);
    setNewDescription(user.user_metadata.description);
    setNewAvatarUrl(user.user_metadata.avatar_url);
    setIsLoading(true);
  }
  if (!user && !isLoading) {
    navigate("/signin");
  }
}, [user]);
```

### 4. 해결 방법

Context의 `user 초기값` 변경
Context에서 user의 초기값이 `null`로 할당되어 있어서 생긴 오류였다.  
새로고침 시 초기값인 null을 가져와서 user가 로그인 상태인데도 불구하고 user가 없다고 판단되어진 것이다.

👇수정 전

```js
// Context.jsx
const [user, setUser] = useState(null);
```

👇수정 후

```js
const [user, setUser] = useState({
  email: "",
  user_metadata: { nickname: "" }
});
```

user의 초기값을 회원가입 때 받아오는 정보로, 그리고 그 정보를 빈 스트링으로 할당했다.

##

![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
![supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)

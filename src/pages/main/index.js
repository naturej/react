import styled from "styled-components";
import SignInForm from "./components/Signin";
import SignUpForm from "./components/Signup";
const MainPage = () => {
  let isFormLogin = true;

  const onClickFormHeader = (e) => {
    const { innerText } = e.target;
    isFormLogin = innerText === "LOGIN" ? true : false;
  };

  return (
    <S.Container>
      <S.Header>
        <div onClick={onClickFormHeader}>LOGIN</div>
        <div onClick={onClickFormHeader}>SIGN</div>
      </S.Header>
      {isFormLogin ? <SignInForm /> : <SignUpForm />}
    </S.Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  width: 360px;
  height: 48px;
  display: flex;
  background-color: #00c7ae;
`;

// 일반 components와 styled-components의 구분을 위해 만든 객체
const S = {
  Container,
  Header,
};

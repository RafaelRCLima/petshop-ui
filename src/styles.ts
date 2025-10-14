import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  background-color: #f6f7f9ff;
  min-width: 90vh;
  min-height: 100vh;
  align-items: center;
`;

export const Header = Styled.header`
  display: flex;
  margin-top: 0;
  align-items: center;
  justify-content: center;
  
  height: 100px;
  width: 100%;

  font-weight: 600;
  background-color: #e5eeffff;

  .logo {
    height: 130px;
  }

  .menu-container {
    display: flex;
    gap: 16px;
  }

  .menu {
    cursor: pointer;
    transition: all .2s ease-in-out;
    color: #333;
    &:hover {
      color: #ff6347;
    }
    text-decoration: none;
  }

`;

export const Footer = Styled.footer`
  font-size: 11px;
  font-weight: 500;

  margin-top: auto;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

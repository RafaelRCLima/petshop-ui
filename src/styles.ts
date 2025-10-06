import Styled from "styled-components";

export const Container = Styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  background-color: #f6f7f9ff;
  max-width: 1100px;
  min-height: 900px;
  margin: 0 auto;
  justify-content: center;

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 500px;
  }

  .input-label {
    font-size: 12px;
    font-weight: 600;
  }

  .input-area {
    width: 100%;
    background-color: #ffffff;
  }
`;

export const FormContainer = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  .date-time-container {
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: row;
  }

  .date-time-position {
    display: flex;
    flex-direction: column;
  }

  .time-input-area {
    width: 260px;
  }
`;

export const Header = Styled.header`
  .logo {
    height: 130px;
  }

  .menu {
    cursor: pointer;
    transition: all .2s ease-in-out;
    color: #333;
    &:hover {
      color: #ff6347;
    }
  }

  background-color: #e5eeffff;
  margin-top: 0;
  height: 100px;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 600;
  gap: 16px
`;

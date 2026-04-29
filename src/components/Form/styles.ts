import Styled from 'styled-components';

export const FormContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    max-width: 400px;
    width: 100%;

    .input-area {
      width: 400px;
    }

    .select-input {
      width: 400px;
    }

    .date-time-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .select-input-time {
        width: 155px;
      }
    }

    .submit-button {
      margin-top: 20px;
      margin-left: auto;
    }
  }
`;

import styled, { StyledComponentBase } from 'styled-components'

interface WidgetProps extends StyledComponentBase<any, {}> {
  Content?: any;
  Header?: any;
}

const Widget: WidgetProps = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => {
    return theme.colors.mainBg;
  }};
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  & ul {
    list-style: none;
    padding: 0;
  }

  & input {
    height: 40px;
    width: 100%;
    padding: 0 15px;
    margin: 16px 0;
    color: ${({ theme }) => theme.colors.contrastText};
    font-size: 14px;
    letter-spacing: 0.15px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.mainBg};
    outline: none;
    transition: .35s;
  }

  & input:focus {
    border-color: ${({ theme }) => theme.colors.inputFocus};
  }
  
  & button {
    height: 40px;
    width: 100%;
    color: ${({ theme }) => theme.colors.contrastText};
    border: none;
    font-size: 14px;
    letter-spacing: 0.15px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    cursor: pointer;
    transition: .35s;
  }
  & button:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }

  & a {
    height: 40px;
    width: 100%;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    color: ${({ theme }) => theme.colors.contrastText};
    background: rgba(33, 150, 243, 0.35);
    text-decoration: none;
    border-radius: 4px;
    transition: .35s;
  }

  & a:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Widget
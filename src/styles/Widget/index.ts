import styled, { StyledComponentBase } from 'styled-components'

interface WidgetProps extends StyledComponentBase<any, {}> {
  Content?: any;
  Header?: any;
  Banner?: any;
  Topic?: any;
  Result?: any;
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

Widget.Banner = styled.img`
  object-fit: cover;
  width: 100%;
  height: 150px;
`; 

Widget.Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 32px 32px 32px;
  position: relative;
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

  & a {
    min-height: 40px;
    width: 100%;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    padding: 4px 15px;
    color: ${({ theme }) => theme.colors.contrastText};
    background: rgba(33, 150, 243, 0.35);
    text-decoration: none;
    border-radius: 4px;
    transition: .35s;
  }

  & a:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  & .icon {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 20px;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    background-color: ${({ theme }) => `${theme.colors.primary}`};
  }
`;

Widget.Result = styled.li`
  height: 40px;
  width: 100%;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: 4px;
`;



export default Widget
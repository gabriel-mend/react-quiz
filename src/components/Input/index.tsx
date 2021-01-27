import styled from 'styled-components'

const InputBase = styled.input`
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

    &:focus {
        border-color: ${({ theme }) => theme.colors.inputFocus};
    }
`;

export default function Input (props) {
    return (
        <InputBase {...props}/>
    )
}
import styled from 'styled-components'

const ButtonBase = styled.button`
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

    &:hover {
        background-color: ${({ theme }) => theme.colors.buttonHover};
    }

    &:disabled {
        cursor: not-allowed;

        &:hover {
            background-color: ${({ theme }) => theme.colors.secondary};
        }
    }
`;

export default function Button (props) {
    return (
        <ButtonBase {...props} />
    )
}
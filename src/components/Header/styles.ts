import styled, { css, DefaultTheme } from 'styled-components'
import { Link as ReactRouterLink } from 'react-router-dom'

interface LinkProps {
  isActive: boolean
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: #1d1d2a;
    width: 100%;
    padding: 2.4rem 0;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);

    & > div {
      display: flex;
      justify-content: space-between;
    }
  `}
`

export const Logo = styled.span`
  ${({ theme }) => css`
  font-family: 'Roboto', sans-serif;
    font-size: 5rem;
    color: #78be20;
  `}
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`

const linkModifiers = {
  borderBottom: (theme: DefaultTheme) => css`
    &::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: -41px;
      width: 100%;
      border-top: 2px solid #78be20;
    }
  `,
}

export const Link = styled(ReactRouterLink)<LinkProps>`
  ${({ theme, isActive }) => css`
    position: relative;
    font-size: ${theme.font.sizes.medium};
    font-weight: 600;
    color: ${isActive ? theme.colors.white : theme.colors.neutral[200]};
    text-decoration: none;
    transition: color #78be20;

    @keyframes hoverAnimation {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }

    &:hover {
      color: #78be20;

      &::after {
        animation: hoverAnimation 0.4s forwards;
      }
    }

    ${isActive && linkModifiers.borderBottom(theme)};
  `}
`

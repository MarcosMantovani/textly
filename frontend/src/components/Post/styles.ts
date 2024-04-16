import styled from 'styled-components'

import { colors } from '../../styles'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 40px 600px;
  column-gap: 8px;
  margin-bottom: 32px;

  .sideIcons {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }

  .postContent {
    border-top: 1px solid ${colors.white};
    padding-top: 32px;
  }
`

export const ProfilePhoto = styled.img`
  margin-top: 38px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${colors.blue};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10%);
  }
`

export const Name = styled.p`
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10%);
  }
`

export const Userame = styled.p`
  font-size: 12px;
  opacity: 0.75;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10%);
  }
`

export const TextPost = styled.div`
  background-color: ${colors.blue};
  border-radius: 8px;
  border-top-left-radius: 0;
  padding: 0 8px;
  min-height: 142px;

  .postHeader {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;

    .time {
      font-size: 12px;
      opacity: 0.5;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    padding-bottom: 8px;

    img {
      object-fit: cover;
      width: 584px;
      max-height: 300px;
      border-radius: 8px;
    }
  }

  transition: all 0.3s ease-in-out;
  &:hover {
    filter: brightness(110%);
    transform: translateY(-1%);
  }
`

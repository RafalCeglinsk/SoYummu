import styled from "styled-components";

export const ProfieleModalContainer = styled.div`
  position: absolute;
  top: 50px;
  left: -70px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 18px;
  border-radius: 8px;
  border: 1px solid var(--color-icons-3);
  background-color: var(--color-bg-modal);
  width: 160px;
`;

export const EditButton = styled.button`
  color: var(--color-text-3);
  background-color: transparent;
  border: none;
  padding: 10px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  transition: color var(--transition-time) var(--cubic);

  &:hover {
    color: green;
  }

  > svg {
    width: 14px;
    height: 14px;
  }
`;
export const LogoutButton = styled.button`
  background-color: var(--color-icons-3);
  color: var(--color-text-7);
  padding: 12px 27px;
  border-radius: 24px 44px;
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  transition: background-color var(--transition-time) var(--cubic);
  width: 100%;

  &:hover {
    background-color: var(--color-icons-1);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

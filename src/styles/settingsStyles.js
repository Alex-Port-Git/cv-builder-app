import styled from 'styled-components';

export const Wrapper = styled.div`
  direction: rtl;
  max-width: 600px;
  margin: auto;
  padding: 2rem;
  text-align: center;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 1rem;

  @media (max-width: 600px) {
    width: 100%;
    font-size: 0.95rem;
  }
`;

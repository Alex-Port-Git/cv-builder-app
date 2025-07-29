import styled from 'styled-components';

export const Wrapper = styled.div`
  direction: rtl;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 8px;
  max-width: 800px;
  margin: auto;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);

  @media (max-width: 600px) {
    padding: 1rem;
    font-size: 0.95rem;
    
  }
`;

export const Section = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h3`
  border-bottom: 2px solid ${({ theme }) => theme.marginTitle};
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
`;

export const InfoRow = styled.p`
  margin: 0.25rem 0;
`;

export const ExperienceCard = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.secondary}11;
  border-right: 4px solid ${({ theme }) => theme.primary};
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    padding: 0.75rem;
  }
`;

export const ExportButton = styled.button`
  display: block;
  margin: 1rem auto;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;

  @media (max-width: 600px) {
    width: 100%;
    font-size: 1rem;
  }
`;

export const H2 = styled.h2`
    display: flex;
    justify-content: center; 
`;

export const Ul = styled.ul`
  list-style-type: none;
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.primary || '#007bff'};
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.secondary || '#0056b3'};
  }
`;
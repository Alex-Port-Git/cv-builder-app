import styled from 'styled-components';
import { Field } from 'formik';

export const Wrapper = styled.div`
  direction: rtl;
  max-width: 700px;
  margin: auto;
  padding: 2rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const Section = styled.div`
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  display: block;
  margin-top: 1rem;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 0.25rem;
  margin-top: 0.15rem;
  border-radius: 4px;
  border: 1px solid gray;

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

export const Button = styled.button`
    margin-top: 1rem;
    margin-left: 1rem;
    padding: 0.5rem 1.25rem;
    font-size: 0.9rem;

  @media (max-width: 600px) {
    width: 100%;
    margin: 0.5rem 0;
    font-size: 0.95rem;
  }
`;
 
export const H2 = styled.h2`
    display: flex;
    justify-content: center;
`;

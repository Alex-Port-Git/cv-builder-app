import React, { useRef } from 'react';
import { useCvContext } from '../context/CvContext';
import html2pdf from 'html2pdf.js';
import {
  Wrapper,
  Section,
  Title,
  InfoRow,
  ExperienceCard,
  ExportButton,
  H2,
  Ul,
  StyledLink,
} from '../styles/previewStyles';

const PreviewPage = () => {
  const { personalDetails, experienceList, educationList, skillsList } = useCvContext();
  const cvRef = useRef();

  const handleExportPDF = () => {
    const element = cvRef.current;
    const opt = {
      margin: 0.5,
      filename: 'קורות-חיים.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <>
      <ExportButton onClick={handleExportPDF}>📄PDF -ייצא ל </ExportButton>

      <Wrapper ref={cvRef}>
        <H2>קורות חיים</H2>

        <Section>
          <Title>פרטים אישיים</Title>
          <InfoRow><strong>שם מלא:</strong> {personalDetails.fullName}</InfoRow>
          <InfoRow><strong>אימייל:</strong> {' '} <StyledLink href={`mailto:${personalDetails.email}`}> {personalDetails.email} </StyledLink></InfoRow>
          <InfoRow><strong>טלפון:</strong> {' '} <StyledLink href={`tel:${personalDetails.phone}`}> {personalDetails.phone} </StyledLink></InfoRow>
          <InfoRow><strong>כתובת:</strong> {personalDetails.address}</InfoRow>
        </Section>

        <Section>
          <Title>ניסיון תעסוקתי</Title>
          {experienceList.length === 0 && <p>לא הוזן ניסיון תעסוקתי.</p>}
          {experienceList.map((exp, index) => (
            <ExperienceCard key={index}>
              <p><strong>תפקיד:</strong> {exp.role}</p>
              <p><strong>מקום עבודה:</strong> {exp.company}</p>
              <p><strong>תקופה:</strong> {exp.period}</p>
              <p><strong>תיאור:</strong> {exp.description}</p>
            </ExperienceCard>
          ))}
        </Section>

        <Section>
  <Title>השכלה</Title>
  {educationList.length === 0 && <p>לא הוזנה השכלה.</p>}
  {educationList.map((edu, i) => (
    <InfoRow key={i}>
      {edu.degree} – {edu.institute} ({edu.period})
    </InfoRow>
  ))}
</Section>

<Section>
  <Title>כישורים ושפות</Title>
  {skillsList.length === 0 && <p>לא הוזנו כישורים או שפות.</p>}
  <Ul>
    {skillsList.map((skill, i) => (
      <li key={i}>{skill}</li>
    ))}
  </Ul>
</Section>


      </Wrapper>
    </>
  );
};

export default PreviewPage;

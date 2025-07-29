import React from 'react';
import { Formik, Form, FieldArray } from 'formik';
import { useCvContext } from '../context/CvContext';
import {
  Wrapper,
  Section,
  Label,
  Input,
  Button,
  H2,
} from '../styles/editCvStyles';

const EditCvPage = () => {
  const {
    personalDetails,
    experienceList,
    updatePersonal,
    setAllExperiences,
    educationList,
    setAllEducations,
    skillsList,
    setSkills,
  } = useCvContext();

  const initialValues = {
    fullName: personalDetails.fullName,
    email: personalDetails.email,
    phone: personalDetails.phone,
    address: personalDetails.address,
    experiences: experienceList.length > 0 ? experienceList : [
      { role: '', company: '', period: '', description: '' },
    ],
    educations: educationList.length > 0 ? educationList : [
      { degree: '', institute: '', period: '' },
    ],
    skills: skillsList.length > 0 ? skillsList : [''],
  };

  const handleSubmit = (values) => {
    updatePersonal({
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      address: values.address,
    });
    setAllExperiences(values.experiences);
    setAllEducations(values.educations);
    setSkills(values.skills);
    alert(' כל המידע נשמר בהצלחה');
  };


  return (
    <Wrapper>
      <H2>קורות חיים</H2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, setFieldValue }) => (
          <Form>

            <Section>
              <h3>פרטים אישיים</h3>
              <Label>שם מלא</Label>
              <Input placeholder="הוסף שם מלא... " name="fullName" />
              <Label>אימייל</Label>
              <Input placeholder="הוסף אימייל..." name="email" type="email" />
              <Label>טלפון</Label>
              <Input placeholder="הוסף מספר טלפון..." name="phone" />
              <Label>כתובת</Label>
              <Input placeholder="הוסף כתובת..." name="address" />
            </Section>

            <Section>
              <h3>ניסיון תעסוקתי</h3>
              <FieldArray name="experiences">
                {({ push, remove }) => (
                  <>
                    {values.experiences.map((_, index) => (
                      <div
                        key={index}
                    
                      >
                        <Label>תפקיד</Label>
                        <Input placeholder="הוסף תפקיד..." name={`experiences[${index}].role`} />

                        <Label>מקום עבודה</Label>
                        <Input placeholder="הוסף מקום עבודה..." name={`experiences[${index}].company`} />

                        <Label>תקופה</Label>
                        <Input placeholder="הוסף תקופה..." name={`experiences[${index}].period`} />

                        <Label>תיאור</Label>
                        <Input placeholder="הוסף תיאור..." name={`experiences[${index}].description`} />

                        <Button type="button" onClick={() => remove(index)}>
                          הסר
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      onClick={() =>
                        push({
                          role: '',
                          company: '',
                          period: '',
                          description: '',
                        })
                      }
                    >
                      הוסף ניסיון תעסוקתי
                    </Button>
                  </>
                )}
              </FieldArray>
            </Section>

            <Section>
              <h3>השכלה</h3>
              <FieldArray name="educations">
                {({ push, remove }) => (
                  <>
                    {values.educations.map((_, index) => (
                      <div key={index}>
                        <Label>תואר</Label>
                        <Input placeholder="הוסף תואר / תעודה" name={`educations[${index}].degree`} />

                        <Label>מוסד לימודים</Label>
                        <Input placeholder="הוסף את שם מוסד הלימודים..." name={`educations[${index}].institute`} />

                        <Label>תקופה</Label>
                        <Input placeholder="הוסף תקופת לימודים..." name={`educations[${index}].period`} />

                        <Button type="button" onClick={() => remove(index)}>
                          הסר
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      onClick={() => push({ degree: '', institute: '', period: '' })}
                    >
                      הוסף השכלה
                    </Button>
                  </>
                )}
              </FieldArray>
            </Section>

            <Section>
              <h3>כישורים ושפות</h3>
              <FieldArray name="skills">
                {({ push, remove }) => (
                  <>
                    {values.skills.map((skill, index) => (
                      <div key={index}>
                        <Input placeholder="הוסף כישורים/ שפות..."
                          name={`skills[${index}]`}
                          value={skill}
                          onChange={(e) => {
                            const updated = [...values.skills];
                            updated[index] = e.target.value;
                            setFieldValue('skills', updated);
                          }}
                        />
                        <Button type="button" onClick={() => {
                          const updated = values.skills.filter((_, i) => i !== index);
                          setFieldValue('skills', updated);
                        }}>
                          הסר
                        </Button>
                      </div>
                    ))}
                    <Button type="button" onClick={() => push('')}>
                      הוסף כישורים/ שפה
                    </Button>
                  </>
                )}
              </FieldArray>
            </Section>

            <Section>
              <Button type="submit">💾 שמור את כל השינויים</Button>
            </Section>

          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default EditCvPage;

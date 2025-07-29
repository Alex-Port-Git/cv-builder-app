import React, { createContext, useContext, useState } from 'react';

const CvContext = createContext();

export const CvContextProvider = ({ children }) => {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: ''
  });

  const [experienceList, setExperienceList] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [skillsList, setSkillsList] = useState([]);

const addEducation = (edu) => {
  setEducationList((prev) => [...prev, edu]);
};

const removeEducation = (index) => {
  setEducationList((prev) => prev.filter((_, i) => i !== index));
};

const setAllEducations = (eduArray) => {
  setEducationList(eduArray);
};

const setSkills = (skillsArray) => {
  setSkillsList(skillsArray);
};


  const updatePersonal = (newData) => {
    setPersonalDetails(newData);
  };

  const addExperience = (newExp) => {
    setExperienceList(prev => [...prev, newExp]);
  };

  const removeExperience = (index) => {
    setExperienceList(prev => prev.filter((_, i) => i !== index));
  };

  const setAllExperiences = (newList) => {
    setExperienceList(newList);
  };

  return (
    <CvContext.Provider value={{
      personalDetails,
      experienceList,
      updatePersonal,
      addExperience,
      removeExperience,
      setAllExperiences,
      educationList,
      skillsList,
      addEducation,
      removeEducation,
      setAllEducations,
      setSkills,
    }}>
      {children}
    </CvContext.Provider>
  );
};

export const useCvContext = () => useContext(CvContext);

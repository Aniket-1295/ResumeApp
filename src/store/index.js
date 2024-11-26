import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    template1: false,
    template2: false,
    template3: false,
    template4: false,
    personalInfo: {},
    workExperiences: {},
    education: {},
    keySkills: {},
  };

  export const stateSlice = createSlice({
     name: "state",
    initialState,
    reducers:{
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
           
          },
          setTemplate1: (state) => {
           
          },
          setTemplate2: (state) => {
            
          },
          setTemplate3: (state) => {
           
          },
          setTemplate4: (state) => {
            
          },
          setPersonalInfo: (state, action) => {
            
          },
          setWorkExperiences: (state, action) => {
            
          },
          setEducation: (state, action) => {
            
          },
          setKeySkills: (state, action) => {
            
          },


    }



  })

  export const {
    setMode,
    setTemplate1,
    setTemplate2,
    setTemplate3,
    setTemplate4,
    setPersonalInfo,
    setEducation,
    setKeySkills,
    setWorkExperiences,
  } = stateSlice.actions;
  export default stateSlice.reducer;
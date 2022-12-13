import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Patient, department } from "../types/patient";
import { useState } from "react";

type initialStateType = {
  patientList: Patient[];
};

// const patientList= JSON.parse(localStorage.getItem("patient") || "{}");


const patientList: Patient[] = [
  {
    id: Math.random().toString(),
    name: "maher",
    email: "maher@gmail.com",
    phone: 12345678910,
    age: 20,
    diagnosis: "network",
    department: department["Eye"],
    date: new Date("02-30-2021 09:20:00 pm"),
  },
  {
    id: Math.random().toString(),
    name: "ahmed",
    email: "ahmed@gmail.com",
    phone: 12345678910,
    age: 40,
    diagnosis: "network",
    department: department["Heart"],
    date: new Date("02-30-2021 09:20:00 am"),
  },
];

const initialState: initialStateType = {
  patientList,
};

const patientSlice = createSlice({
  name: "patient",
  initialState,

  reducers: {
    
    replacePatient:(state,action :PayloadAction<Patient[]>)=>{
      
      state.patientList=action.payload;
    },
  
    addNewPatient: (state, action: PayloadAction<Patient>) => {
      state.patientList.push(action.payload);
    },

    updatedPatient: (state, action:PayloadAction<Patient> ) => {
      const { id, name, email, phone, diagnosis, department, date } =
        action.payload;

      state.patientList = state.patientList.map((patient: any) =>
        patient.id === id
          ? { ...patient, name, email, phone, diagnosis, department, date }
          : patient
      );
    },

    deletePatient: (state, action: PayloadAction<{ id: string }>) => {
      state.patientList = state.patientList.filter(
        (patient) => patient.id !== action.payload.id
      );
    },
  },
});

export const {replacePatient, addNewPatient, updatedPatient, deletePatient } =
  patientSlice.actions;

export default patientSlice;

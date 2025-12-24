import { PayloadAction } from "@reduxjs/toolkit";
import { FormState, Gender, Country, DateRangeData  } from "@/types/form";

export const setNameReducer = (
    state: { current: FormState }, 
    action: PayloadAction<string>) => {
        state.current.name = action.payload;
    };

export const setEmailReducer = (
    state: { current: FormState }, 
    action: PayloadAction<string>) => {
        state.current.email = action.payload;
    };

export const setPhoneReducer = (
    state: { current: FormState }, 
    action: PayloadAction<string>) => {
        state.current.phone = action.payload;
    };

export const setGenderReducer = (
    state: { current: FormState }, 
        action: PayloadAction<Gender>) => {
        state.current.gender = action.payload;
    };

export const setCountryReducer = (
    state: { current: FormState }, 
    action: PayloadAction<Country>) => {
        state.current.country = action.payload;
    };

export const setDateRangeReducer = (
  state: { current: FormState },
  action: PayloadAction<DateRangeData>
) => {
  state.current.dateRange = action.payload;
};

export const setSkillsReducer = (
  state: { current: FormState },
  action: PayloadAction<string[]>
) => {
  state.current.skills = action.payload;
};


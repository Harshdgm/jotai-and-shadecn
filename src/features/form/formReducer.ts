import { PayloadAction } from "@reduxjs/toolkit";
import { FormState, Gender, Country } from "@/types/form";

export const setName = (
    state: { current: FormState }, 
    action: PayloadAction<string>) => {
        state.current.name = action.payload;
    };

export const setEmail = (
    state: { current: FormState }, 
    action: PayloadAction<string>) => {
        state.current.email = action.payload;
    };

export const setGender = (
    state: { current: FormState }, 
        action: PayloadAction<Gender>) => {
        state.current.gender = action.payload;
    };

export const setCountry = (
    state: { current: FormState }, 
    action: PayloadAction<Country>) => {
        state.current.country = action.payload;
    };

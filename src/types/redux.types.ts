import type { Action } from '@reduxjs/toolkit';
import type { FormActions } from '@/features/form/formSlice';

export type AppAction = FormActions | Action;

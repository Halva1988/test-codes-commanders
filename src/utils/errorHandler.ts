import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

type ErrorType = FetchBaseQueryError | SerializedError;

export const handleError = (error: ErrorType) => {
  if ('status' in error) {
    console.error(`Error status: ${error.status}`);
    if (error.data && typeof error.data === 'object' && 'message' in error.data) {
      console.error(`Error message: ${(error.data as { message: string }).message}`);
    }
  } else {
    console.error(`Error message: ${error.message}`);
  }
};
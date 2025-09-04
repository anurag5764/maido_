import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  domesticHelp: {
    selectedServices: string[];
    gender: 'male' | 'female';
    houseSize: string;
    floors: string;
    hasDogs: 'yes' | 'no';
    workShift: string;
    startDate: string;
    notes: string;
    hasReligiousPreference: boolean;
    agreeToTerms: boolean;
    bathroom?: {
      bathrooms: string;
    };
    dusting?: {
      duration: string;
    };
    dishwashing?: {
      peopleCount: string;
      frequency: string;
    };
  };
  cooking: {
    selectedServices: string[];
    gender: 'male' | 'female';
    serviceFormData: {
      cooking?: {
        mealType: string;
        peopleCount: string;
        mealTime: string;
        meals: string[];
      };
      dishwashing?: {
        peopleCount: string;
        frequency: string;
      };
    };
  };
}

const initialState: FormState = {
  domesticHelp: {
    selectedServices: ['brooming'],
    gender: 'female',
    houseSize: '',
    floors: '',
    hasDogs: 'no',
    workShift: '',
    startDate: '',
    notes: '',
    hasReligiousPreference: false,
    agreeToTerms: false,
  },
  cooking: {
    selectedServices: ['home-style'],
    gender: 'female',
    serviceFormData: {},
  },
};

export const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    // Domestic Help Form Actions
    updateDomesticHelpServices: (state, action: PayloadAction<string[]>) => {
      state.domesticHelp.selectedServices = action.payload;
    },
    updateDomesticHelpGender: (state, action: PayloadAction<'male' | 'female'>) => {
      state.domesticHelp.gender = action.payload;
    },
    updateDomesticHelpHouseDetails: (state, action: PayloadAction<{ houseSize?: string; floors?: string }>) => {
      if (action.payload.houseSize !== undefined) {
        state.domesticHelp.houseSize = action.payload.houseSize;
      }
      if (action.payload.floors !== undefined) {
        state.domesticHelp.floors = action.payload.floors;
      }
    },
    updateDomesticHelpDogs: (state, action: PayloadAction<'yes' | 'no'>) => {
      state.domesticHelp.hasDogs = action.payload;
    },
    updateDomesticHelpSchedule: (state, action: PayloadAction<{ workShift?: string; startDate?: string }>) => {
      if (action.payload.workShift !== undefined) {
        state.domesticHelp.workShift = action.payload.workShift;
      }
      if (action.payload.startDate !== undefined) {
        state.domesticHelp.startDate = action.payload.startDate;
      }
    },
    updateDomesticHelpNotes: (state, action: PayloadAction<string>) => {
      state.domesticHelp.notes = action.payload;
    },
    updateDomesticHelpPreferences: (state, action: PayloadAction<{ hasReligiousPreference?: boolean; agreeToTerms?: boolean }>) => {
      if (action.payload.hasReligiousPreference !== undefined) {
        state.domesticHelp.hasReligiousPreference = action.payload.hasReligiousPreference;
      }
      if (action.payload.agreeToTerms !== undefined) {
        state.domesticHelp.agreeToTerms = action.payload.agreeToTerms;
      }
    },
    updateBathroomService: (state, action: PayloadAction<{ bathrooms: string }>) => {
      state.domesticHelp.bathroom = action.payload;
    },
    updateDustingService: (state, action: PayloadAction<{ duration: string }>) => {
      state.domesticHelp.dusting = action.payload;
    },
    updateDishwashingService: (state, action: PayloadAction<{ peopleCount: string; frequency: string }>) => {
      state.domesticHelp.dishwashing = action.payload;
    },
    resetDomesticHelpForm: (state) => {
      state.domesticHelp = initialState.domesticHelp;
    },

    // Cooking Form Actions
    updateCookingServices: (state, action: PayloadAction<string[]>) => {
      state.cooking.selectedServices = action.payload;
    },
    updateCookingGender: (state, action: PayloadAction<'male' | 'female'>) => {
      state.cooking.gender = action.payload;
    },
    updateCookingServiceData: (state, action: PayloadAction<{
      cooking?: {
        mealType: string;
        peopleCount: string;
        mealTime: string;
        meals: string[];
      };
      dishwashing?: {
        peopleCount: string;
        frequency: string;
      };
    }>) => {
      state.cooking.serviceFormData = action.payload;
    },
    resetCookingForm: (state) => {
      state.cooking = initialState.cooking;
    },
  },
});

export const {
  updateDomesticHelpServices,
  updateDomesticHelpGender,
  updateDomesticHelpHouseDetails,
  updateDomesticHelpDogs,
  updateDomesticHelpSchedule,
  updateDomesticHelpNotes,
  updateDomesticHelpPreferences,
  updateBathroomService,
  updateDustingService,
  updateDishwashingService,
  resetDomesticHelpForm,
  updateCookingServices,
  updateCookingGender,
  updateCookingServiceData,
  resetCookingForm,
} = formsSlice.actions;

export default formsSlice.reducer;
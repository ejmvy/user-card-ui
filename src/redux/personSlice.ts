//Define initialStates type

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PersonState } from "../types";
import { RootState } from "./store";

// initial state type
type initialStateType = {
  personList: PersonState[];
};

// define initial state of person list
const personList: PersonState[] = [];

// define initial state
const initialState: initialStateType = {
  personList,
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addNewPerson: (state, action: PayloadAction<PersonState>) => {
      console.log("add", action.payload);
      state.personList.push(action.payload);
    },
  },
});

export const { addNewPerson } = personSlice.actions;

export const selectPeopleList = (state: RootState) => state.person.personList;

export default personSlice.reducer;

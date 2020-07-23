import { createSelector } from 'reselect';
import { rootState } from '../root-reducer';

const selectDirectory = (state: rootState) => state.directory;

export const selectSections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);

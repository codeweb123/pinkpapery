import { createSelector } from 'reselect';

const selectCardContainer = state => state.cardcontainer;

export const selectCardContainerSections = createSelector(
    [selectCardContainer],
    cardcontainer => cardcontainer.sections 
    
)
import { ActionReducerMap } from '@ngrx/store';
import * as fromGiftIdeas from './gift-ideas.reducer';
export const featureName = 'giftsFeature';

export interface GiftFeatureState {
  giftIdeas: fromGiftIdeas.GiftIdeaState;
}

export const reducers: ActionReducerMap<GiftFeatureState> = {
  giftIdeas: fromGiftIdeas.reducer
};

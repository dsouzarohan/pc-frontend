import {createFeatureSelector} from '@ngrx/store';
import {CoreFeatureState} from './core-feature.reducer';

export const getCoreState = createFeatureSelector<CoreFeatureState>('core');

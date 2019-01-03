import {createFeatureSelector} from '@ngrx/store';
import {CoreFeatureState} from './core.reducer';

export const getCoreState = createFeatureSelector<CoreFeatureState>('core');

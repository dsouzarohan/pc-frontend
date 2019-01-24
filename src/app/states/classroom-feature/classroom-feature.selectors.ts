import {createFeatureSelector} from '@ngrx/store';
import {ClassroomFeatureState} from './classroom-feature.reducer';

export const getClassroomFeatureState = createFeatureSelector<ClassroomFeatureState>('classroom');

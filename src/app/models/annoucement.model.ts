import {Teacher} from './user.models';
import {denormalize, normalize, schema} from 'normalizr';

export interface Announcement {
  id: number;
  body: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  classroomId: number;
  creator: Teacher
}

const announcementSchema = new schema.Entity('announcement');
const announcementListSchema = [announcementSchema];

export const announcementsArrayToEntity = (announcements: Array<Announcement>): { entities: any, result: Array<any> } => {

  return normalize(announcements, announcementListSchema);
};

export const announcementsEntityToArray = (announcementEntity: { entities: any, result: Array<any> }): Array<Announcement> => {

  if (announcementEntity) {
    if (announcementEntity.entities) {
      return denormalize(announcementEntity.result, announcementListSchema, announcementEntity.entities);
    }
    return [];
  }
  return null;
};

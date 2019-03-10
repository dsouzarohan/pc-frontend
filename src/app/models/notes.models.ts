import {MasterUserName} from './user.models';
import {denormalize, normalize, schema} from 'normalizr';

export interface UploadFile {
  id: number;
  originalName: string;
  size: number;
  key: string;
  createdAt: string;
  updatedAt: string;
  uploadId: string;
}

export interface Upload {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  classroomId: number;
  uploaderId: number;
  files?: Array<UploadFile>;
  uploader: MasterUserName;
}

export interface UploadsEntity {
  entities: {
    uploads: Upload;
  };
  result: Array<string>;
}

const uploadsSchema = new schema.Entity('uploads');
const uploadsListSchema = [uploadsSchema];

export const uploadsArrayToEntity = (uploads: Array<Upload>): UploadsEntity => {
  return normalize(uploads, uploadsListSchema);
};

export const uploadsEntityToArray = (
  uploadsEntity: UploadsEntity
): Array<Upload> => {
  if (uploadsEntity) {
    return denormalize(
      uploadsEntity.result,
      uploadsListSchema,
      uploadsEntity.entities
    );
  } else {
    return null;
  }
};

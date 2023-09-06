import {ProfileIMG} from '../../assets/image';

export const profileData = {
  avatar: ProfileIMG,
  userPhotos: [],
};

export const photosData = [];

export interface UserDataI {
  avatar: string;
  name: string;
  email: string;
  username: string;
  country: string;
  password: string;
  occupation: string;
  description: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  photos: PhotosI[];
  video: string;
}
// export interface UserDataI {
//   avatar: string;
//   privatInfo: PrivatInfoI;
//   publicInfo: PublicInfoI;
//   links: LinksI;
//   photos: PhotosI[];
//   video: string;
// }
// export interface PrivatInfoI {
//   name: string;
//   email: string;
//   username: string;
//   country: string;
//   password: string;
// }
//
// export interface PublicInfoI {
//   occupation: string;
//   description: string;
// }
//
// export interface LinksI {
//   facebook: string;
//   instagram: string;
//   twitter: string;
//   website: string;
// }
//
export interface PhotosI {
  name: string;
  description: string;
  photo: string;
}
// export const userProfileData: UserDataI = {
//   avatar: '',
//   privatInfo: {
//     name: '',
//     email: '',
//     username: '',
//     country: '',
//     password: '',
//   },
//   publicInfo: {
//     occupation: '',
//     description: '',
//   },
//   links: {
//     facebook: '',
//     instagram: '',
//     twitter: '',
//     website: '',
//   },
//   photos: [{name: '', description: '', photo: ''}],
//   video: '',
// };
export const userProfileData: UserDataI = {
  avatar: '',
  // privatInfo: {
  name: '',
  email: '',
  username: '',
  country: '',
  password: '',
  // },
  // publicInfo: {
  occupation: '',
  description: '',
  // },
  // links: {
  facebook: '',
  instagram: '',
  twitter: '',
  website: '',
  // },
  photos: [{name: '', description: '', photo: ''}],
  video: '',
};

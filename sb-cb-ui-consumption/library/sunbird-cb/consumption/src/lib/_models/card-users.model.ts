import { NsCardContent } from './card-content.model'

export namespace NsCardUser {
  export interface ICard {
    content: user | IUserProfile;
    cardSubType: NsCardContent.TCardSubType;
    context: { pageSection: string; position?: number };
    likes?: number;
    stateData: any;
  }

  export interface IUserProfile {
    userId: string
    email?: string
    departmentName?: string
    userName?: string
    name?:string
    firstName?: string
    surName?: string
    middleName?: string
    lastName?: string
    rootOrgId?: string
    rootOrgName?: string
    image?: string
    givenName?: string
    country?: null | string
    unit?: string | null
    source_profile_picture?: null | string
    dealerCode?: null | string
    isManager?: boolean
    competencies?: any
    systemTopics?: any
    desiredTopics?: any
    desiredCompetencies?: any
    userRoles?: any
    profileUpdateCompletion?: number
    profileImageUrl?: string
    professionalDetails?: any
    webPortalLang?: any
    description?: string
  }

  export interface user {
    userId: string,
    name?: string
    description?: string
    image?: string
  }


  export type TCardSubType =
    | 'standard'
    | 'minimal'
    | 'space-saving'
    | 'basic-info'
    | 'basic-details'
    | 'card-description-back'
    | 'network-card'
    | 'user-card';
}
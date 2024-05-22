import { Component, OnInit } from '@angular/core';
import { RatingService } from '../../_services/rating.service';

@Component({
  selector: 'sb-uic-user-content-rating',
  templateUrl: './user-content-rating.component.html',
  styleUrls: ['./user-content-rating.component.scss']
})
export class UserContentRatingComponent implements OnInit {
  currentIndex: any =0
    styleData =  {
      "bannerMetaClass": "inline-meta",
      "bannerMeta": "visible",
      "bannerMetaAlign": "right",
      "navigationArrows": "visible",
      "borderRadius": "0",
      "customHeight": "424px",
      "arrowsPlacement": "middle-inline",
      "responsive": {
          "bannerMetaClass": "inline-meta",
          "customHeight": "232px",
          "bannerMetaAlign": "right",
          "navigationArrows": "visible",
          "dots": "hidden",
          "arrowsPlacement": "middle-inline"
      }
  }
  sliders = [
      {
          "active": true,
          "banners": {
              "l": "https://portal.karmayogi.nic.in/content-store/content/do_114051307572264960124/artifact/do_114051307572264960124_1715247613335_l.png",
              "m": "https://portal.karmayogi.nic.in/content-store/content/do_114051307572264960124/artifact/do_114051307572264960124_1715247613335_l.png",
              "s": "https://portal.karmayogi.nic.in/content-store/content/do_114051307572264960124/artifact/do_114051307572264960124_1715247613335_l.png",
              "xl": "https://portal.karmayogi.nic.in/content-store/content/do_114051307572264960124/artifact/do_114051307572264960124_1715247613335_l.png",
              "xs": "https://portal.karmayogi.nic.in/content-store/content/do_114051307572264960124/artifact/do_114051307572264960124_1715247613335_l.png",
              "xxl": "https://portal.karmayogi.nic.in/content-store/content/do_114051307572264960124/artifact/do_114051307572264960124_1715247613335_l.png"
          },
          "redirectUrl": "",
          "queryParams": {},
          "title": ""
      },
      {
          "active": true,
          "banners": {
              "l": "https://portal.karmayogi.nic.in/content-store/content/do_114051312372424704125/artifact/do_114051312372424704125_1715248147439_l.png",
              "m": "https://portal.karmayogi.nic.in/content-store/content/do_114051312372424704125/artifact/do_114051312372424704125_1715248147439_l.png",
              "s": "https://portal.karmayogi.nic.in/content-store/content/do_114051312372424704125/artifact/do_114051312372424704125_1715248147439_l.png",
              "xl": "https://portal.karmayogi.nic.in/content-store/content/do_114051312372424704125/artifact/do_114051312372424704125_1715248147439_l.png",
              "xs": "https://portal.karmayogi.nic.in/content-store/content/do_114051312372424704125/artifact/do_114051312372424704125_1715248147439_l.png",
              "xxl": "https://portal.karmayogi.nic.in/content-store/content/do_114051312372424704125/artifact/do_114051312372424704125_1715248147439_l.png"
          },
          "redirectUrl": "",
          "queryParams": {},
          "title": ""
      },
      {
          "active": true,
          "banners": {
              "l": "https://portal.karmayogi.nic.in/content-store/content/do_114051314864234496126/artifact/do_114051314864234496126_1715248438443_l.png",
              "m": "https://portal.karmayogi.nic.in/content-store/content/do_114051314864234496126/artifact/do_114051314864234496126_1715248438443_l.png",
              "s": "https://portal.karmayogi.nic.in/content-store/content/do_114051314864234496126/artifact/do_114051314864234496126_1715248438443_l.png",
              "xl": "https://portal.karmayogi.nic.in/content-store/content/do_114051314864234496126/artifact/do_114051314864234496126_1715248438443_l.png",
              "xs": "https://portal.karmayogi.nic.in/content-store/content/do_114051314864234496126/artifact/do_114051314864234496126_1715248438443_l.png",
              "xxl": "https://portal.karmayogi.nic.in/content-store/content/do_114051314864234496126/artifact/do_114051314864234496126_1715248438443_l.png"
          },
          "redirectUrl": "",
          "queryParams": {},
          "title": ""
      },
      {
          "active": true,
          "banners": {
              "l": "https://portal.karmayogi.nic.in/content-store/content/do_114051307572264960124/artifact/do_114051307572264960124_1715247613335_l.png",
              "m": "https://portal.karmayogi.nic.in/content-store/content/do_114051307572264960124/artifact/do_114051307572264960124_1715247613335_l.png",
              "s": "https://portal.karmayogi.nic.in/content-store/content/do_114051307572264960124/artifact/do_114051307572264960124_1715247613335_l.png",
              "xl": "https://portal.karmayogi.nic.in/content-store/content/do_114051307572264960124/artifact/do_114051307572264960124_1715247613335_l.png",
              "xs": "https://portal.karmayogi.nic.in/content-store/content/do_114051307572264960124/artifact/do_114051307572264960124_1715247613335_l.png",
              "xxl": "https://portal.karmayogi.nic.in/content-store/content/do_114051307572264960124/artifact/do_114051307572264960124_1715247613335_l.png"
          },
          "redirectUrl": "",
          "queryParams": {},
          "title": ""
      },
      {
          "active": true,
          "banners": {
              "l": "https://portal.karmayogi.nic.in/content-store/content/do_114051307572264960124/artifact/do_114051307572264960124_1715247613335_l.png",
              "m": "https://portal.karmayogi.nic.in/content-store/content/do_114051307572264960124/artifact/do_114051307572264960124_1715247613335_l.png",
              "s": "https://portal.karmayogi.nic.in/content-store/content/do_114051307572264960124/artifact/do_114051307572264960124_1715247613335_l.png",
              "xl": "https://portal.karmayogi.nic.in/content-store/content/do_114051307572264960124/artifact/do_114051307572264960124_1715247613335_l.png",
              "xs": "https://portal.karmayogi.nic.in/content-store/content/do_114051307572264960124/artifact/do_114051307572264960124_1715247613335_l.png",
              "xxl": "https://portal.karmayogi.nic.in/content-store/content/do_114051307572264960124/artifact/do_114051307572264960124_1715247613335_l.png"
          },
          "redirectUrl": "",
          "queryParams": {},
          "title": ""
      }
  ]
  contentCard = {
    "content": {
      "identifier": "do_113990515935854592111",
        "competencies_v5": [
            {
                "competencyArea": "Behavioural",
                "competencyAreaId": 1,
                "competencyAreaDescription": "Behavioural Competency Area",
                "competencyTheme": "Collaboration",
                "competencyThemeId": 25,
                "competecnyThemeDescription": "Collaboration competency Theme",
                "competencyThemeType": "Core",
                "competencySubTheme": "Diversity & Inclusion",
                "competencySubThemeId": 27,
                "competecnySubThemeDescription": "Diversity & Inclusion Competency Sub-Theme"
            }
        ],
        "description": "Invite only program",
        "organisation": [
            "Ministry of Finance"
        ],
        "creatorLogo": null,
        "posterImage": "https://portal.karmayogiqa.nic.in/content-store/content/do_1139430185765847041226/artifact/do_1139430185765847041226_1702028635111_maxresdefault.jpg",
        "duration": "2280",
        "additionalTags": null,
        "appIcon": "https://static.karmayogiprod.nic.in/igotqa/collection/do_113990515935854592111/artifact/do_1139430185765847041226_1702028635111_maxresdefault.thumb.jpg",
        "primaryCategory": "Program",
        "name": "Invite only program",
        "avgRating": null,
        "contentType": "Course"
    },
    "cardSubType": "card-wide-lib",
    "cardCustomeClass": "",
    "context": {
      "pageSection": "featuredContents",
      "position": 3
    },
    "review": "Credit",
    "rating": 5.0,
    "userDetails": {
        "firstName": "Agri usertwo",
        "userId": "f00473e1-54e8-40b7-b541-461250f298d1",
        "profileImageUrl": null
    }
  }

  widgetData = {
    cardSubType: ''
  }
  responseData = [
    {
        "review": "Credit",
        "rating": 5.0,
        "userDetails": {
            "firstName": "Agri usertwo",
            "userId": "f00473e1-54e8-40b7-b541-461250f298d1",
            "profileImageUrl": null
        },
        "content": {
            "identifier": "do_113990515935854592111",
            "competencies_v5": [
                {
                    "competencyArea": "Behavioural",
                    "competencyAreaId": 1,
                    "competencyAreaDescription": "Behavioural Competency Area",
                    "competencyTheme": "Collaboration",
                    "competencyThemeId": 25,
                    "competecnyThemeDescription": "Collaboration competency Theme",
                    "competencyThemeType": "Core",
                    "competencySubTheme": "Diversity & Inclusion",
                    "competencySubThemeId": 27,
                    "competecnySubThemeDescription": "Diversity & Inclusion Competency Sub-Theme"
                }
            ],
            "description": "Invite only program",
            "organisation": [
                "Ministry of Finance"
            ],
            "creatorLogo": null,
            "posterImage": "https://portal.karmayogiqa.nic.in/content-store/content/do_1139430185765847041226/artifact/do_1139430185765847041226_1702028635111_maxresdefault.jpg",
            "duration": "2280",
            "additionalTags": null,
            "appIcon": "https://static.karmayogiprod.nic.in/igotqa/collection/do_113990515935854592111/artifact/do_1139430185765847041226_1702028635111_maxresdefault.thumb.jpg",
            "primaryCategory": "Program",
            "name": "Invite only program",
            "avgRating": null,
            "contentType": "Course"
        },
        "cardSubType": "card-wide-lib",
        "cardCustomeClass": "",
        "context": {
          "pageSection": "featuredContents",
          "position": 3
        }
    },
    {
        "review": "Abc xyz1",
        "rating": 5.0,
        "userDetails": {
            "firstName": "Qa test user one @#$ 123",
            "userId": "7fd686b6-d5b2-4e0a-a43f-d6e57cd2ea09",
            "profileImageUrl": null
        },
        "cardSubType": "card-wide-lib",
        "cardCustomeClass": "",
        "context": {
          "pageSection": "featuredContents",
          "position": 3
        },
        "content": {
            "identifier": "do_113987549775609856182_rc",
            "competencies_v5": [
                {
                    "competencyArea": "Domain",
                    "competencyAreaId": 145,
                    "competencyAreaDescription": "Domain Competency Area",
                    "competencyTheme": "Account Management",
                    "competencyThemeId": 148,
                    "competecnyThemeDescription": "Account Management competency Theme",
                    "competencyThemeType": "Core",
                    "competencySubTheme": "Account Management",
                    "competencySubThemeId": 149,
                    "competecnySubThemeDescription": "Account Management Competency Sub-Theme"
                }
            ],
            "description": "Course Check for MDO Specific All Users 09 Feb",
            "organisation": [
                "Ministry of Finance"
            ],
            "creatorLogo": null,
            "posterImage": "https://portal.karmayogiqa.nic.in/content-store/content/do_11395704427130060819/artifact/do_11395704427130060819_1703740756028_capture71703740758098.png",
            "duration": "606",
            "additionalTags": null,
            "appIcon": "https://static.karmayogiprod.nic.in/igotqa/collection/do_113987549775609856182_rc/artifact/do_11395704427130060819_1703740756028_capture71703740758098.thumb.png",
            "primaryCategory": "Course",
            "name": "Course Check for MDO Specific All Users 09 Feb",
            "avgRating": 5.0,
            "contentType": "Course"
        }
    },
    {
        "review": "Testing ratings - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eum, assumenda quasi accusamus perferendis voluptas saepe, ducimus architecto animi iste numquam vitae minima sed explica",
        "rating": 5.0,
        "userDetails": {
            "firstName": "Agri usertwo",
            "userId": "f00473e1-54e8-40b7-b541-461250f298d1",
            "profileImageUrl": null
        },
        "cardSubType": "card-wide-lib",
        "cardCustomeClass": "",
        "context": {
          "pageSection": "featuredContents",
          "position": 3
        },
        "content": {
            "identifier": "do_114006606955921408144",
            "competencies_v5": [
                {
                    "competencyArea": "Behavioural",
                    "competencyAreaId": 1,
                    "competencyAreaDescription": "Behavioural Competency Area",
                    "competencyTheme": "Collaborative Leadership",
                    "competencyThemeId": 46,
                    "competecnyThemeDescription": "Collaborative Leadership competency Theme",
                    "competencyThemeType": "Leadership",
                    "competencySubTheme": "Influencing and Negotiation",
                    "competencySubThemeId": 47,
                    "competecnySubThemeDescription": "Influencing and Negotiation Competency Sub-Theme"
                }
            ],
            "description": "test Scrom",
            "organisation": [
                "Ministry of Finance"
            ],
            "creatorLogo": null,
            "posterImage": "https://portal.karmayogiqa.nic.in/content-store/content/do_1139430185765847041226/artifact/do_1139430185765847041226_1702028635111_maxresdefault.jpg",
            "duration": "180",
            "additionalTags": null,
            "appIcon": "https://static.karmayogiprod.nic.in/igotqa/collection/do_114006606955921408144/artifact/do_1139430185765847041226_1702028635111_maxresdefault.thumb.jpg",
            "primaryCategory": "Course",
            "name": "Large PDF test Cases",
            "avgRating": 4.0,
            "contentType": "Course"
        }
    },
    {
        "review": "Good courseQA",
        "rating": 5.0,
        "userDetails": {
            "firstName": "Public User QA env",
            "userId": "0517056e-b57b-49ca-a44c-cdc3a251dd3e",
            "profileImageUrl": null
        },
        "cardSubType": "card-wide-lib",
        "cardCustomeClass": "",
        "context": {
          "pageSection": "featuredContents",
          "position": 3
        },
        "content": {
            "identifier": "do_113902049969004544112",
            "competencies_v5": [
                {
                    "competencyArea": "Domain",
                    "competencyAreaDescription": "Domain Competency Area",
                    "competencyAreaId": 145,
                    "competencyTheme": "Communication Backbone System Maintenance",
                    "competencyThemeDescription": "Communication Backbone System Maintenance competency Theme",
                    "competencyThemeId": 186,
                    "competencyThemeType": "Core",
                    "competencySubTheme": "Communication Backbone System Maintenance",
                    "competencySubThemeId": 187,
                    "competencySubThemeDescription": "Communication Backbone System Maintenance Competency Sub-Theme"
                },
                {
                    "competencyArea": "Domain",
                    "competencyAreaDescription": "Domain Competency Area",
                    "competencyAreaId": 145,
                    "competencyTheme": "Communication Auxiliary Systems Maintenance",
                    "competencyThemeDescription": "Communication Auxiliary Systems Maintenance competency Theme",
                    "competencyThemeId": 184,
                    "competencyThemeType": "Core",
                    "competencySubTheme": "Communication Auxiliary Systems Maintenance",
                    "competencySubThemeId": 185,
                    "competencySubThemeDescription": "Communication Auxiliary Systems Maintenance Competency Sub-Theme"
                }
            ],
            "description": "QATestCourse2",
            "organisation": [
                "Ministry of Finance"
            ],
            "creatorLogo": null,
            "posterImage": "https://portal.karmayogiqa.nic.in/content-store/content/do_113902071254761472117/artifact/do_113902071254761472117_1697030308090_screenshotfrom202310101224021697030170978.png",
            "duration": "540",
            "additionalTags": null,
            "appIcon": "https://portal.karmayogiqa.nic.in/content-store/content/do_113902071254761472117/artifact/do_113902071254761472117_1697030308090_screenshotfrom202310101224021697030170978.png",
            "primaryCategory": "Course",
            "name": "QATestCourse2",
            "avgRating": 5.0,
            "contentType": "Course"
        }
    },
    {
        "review": "ok",
        "rating": 5.0,
        "userDetails": {
            "firstName": "qatestcreator",
            "userId": "54548483-0708-417c-ac9f-9b2260e13962",
            "profileImageUrl": null
        },
        "cardSubType": "card-wide-lib",
        "cardCustomeClass": "",
        "context": {
          "pageSection": "featuredContents",
          "position": 3
        },
        "content": {
            "identifier": "do_113902049969004544112",
            "competencies_v5": [
                {
                    "competencyArea": "Domain",
                    "competencyAreaDescription": "Domain Competency Area",
                    "competencyAreaId": 145,
                    "competencyTheme": "Communication Backbone System Maintenance",
                    "competencyThemeDescription": "Communication Backbone System Maintenance competency Theme",
                    "competencyThemeId": 186,
                    "competencyThemeType": "Core",
                    "competencySubTheme": "Communication Backbone System Maintenance",
                    "competencySubThemeId": 187,
                    "competencySubThemeDescription": "Communication Backbone System Maintenance Competency Sub-Theme"
                },
                {
                    "competencyArea": "Domain",
                    "competencyAreaDescription": "Domain Competency Area",
                    "competencyAreaId": 145,
                    "competencyTheme": "Communication Auxiliary Systems Maintenance",
                    "competencyThemeDescription": "Communication Auxiliary Systems Maintenance competency Theme",
                    "competencyThemeId": 184,
                    "competencyThemeType": "Core",
                    "competencySubTheme": "Communication Auxiliary Systems Maintenance",
                    "competencySubThemeId": 185,
                    "competencySubThemeDescription": "Communication Auxiliary Systems Maintenance Competency Sub-Theme"
                }
            ],
            "description": "QATestCourse2",
            "organisation": [
                "Ministry of Finance"
            ],
            "creatorLogo": null,
            "posterImage": "https://portal.karmayogiqa.nic.in/content-store/content/do_113902071254761472117/artifact/do_113902071254761472117_1697030308090_screenshotfrom202310101224021697030170978.png",
            "duration": "540",
            "additionalTags": null,
            "appIcon": "https://portal.karmayogiqa.nic.in/content-store/content/do_113902071254761472117/artifact/do_113902071254761472117_1697030308090_screenshotfrom202310101224021697030170978.png",
            "primaryCategory": "Course",
            "name": "QATestCourse2",
            "avgRating": 5.0,
            "contentType": "Course"
        }
    },
    {
        "review": "nic onenic onenic onenic onenic onenic onenic onenic onenic onenic onenic onenic onenic one",
        "rating": 5.0,
        "userDetails": {
            "firstName": "Qa test user one @#$ 123",
            "userId": "7fd686b6-d5b2-4e0a-a43f-d6e57cd2ea09",
            "profileImageUrl": null
        },
        "cardSubType": "card-wide-lib",
        "cardCustomeClass": "",
        "context": {
          "pageSection": "featuredContents",
          "position": 3
        },
        "content": {
            "identifier": "do_113902049969004544112",
            "competencies_v5": [
                {
                    "competencyArea": "Domain",
                    "competencyAreaDescription": "Domain Competency Area",
                    "competencyAreaId": 145,
                    "competencyTheme": "Communication Backbone System Maintenance",
                    "competencyThemeDescription": "Communication Backbone System Maintenance competency Theme",
                    "competencyThemeId": 186,
                    "competencyThemeType": "Core",
                    "competencySubTheme": "Communication Backbone System Maintenance",
                    "competencySubThemeId": 187,
                    "competencySubThemeDescription": "Communication Backbone System Maintenance Competency Sub-Theme"
                },
                {
                    "competencyArea": "Domain",
                    "competencyAreaDescription": "Domain Competency Area",
                    "competencyAreaId": 145,
                    "competencyTheme": "Communication Auxiliary Systems Maintenance",
                    "competencyThemeDescription": "Communication Auxiliary Systems Maintenance competency Theme",
                    "competencyThemeId": 184,
                    "competencyThemeType": "Core",
                    "competencySubTheme": "Communication Auxiliary Systems Maintenance",
                    "competencySubThemeId": 185,
                    "competencySubThemeDescription": "Communication Auxiliary Systems Maintenance Competency Sub-Theme"
                }
            ],
            "description": "QATestCourse2",
            "organisation": [
                "Ministry of Finance"
            ],
            "creatorLogo": null,
            "posterImage": "https://portal.karmayogiqa.nic.in/content-store/content/do_113902071254761472117/artifact/do_113902071254761472117_1697030308090_screenshotfrom202310101224021697030170978.png",
            "duration": "540",
            "additionalTags": null,
            "appIcon": "https://portal.karmayogiqa.nic.in/content-store/content/do_113902071254761472117/artifact/do_113902071254761472117_1697030308090_screenshotfrom202310101224021697030170978.png",
            "primaryCategory": "Course",
            "name": "QATestCourse2",
            "avgRating": 5.0,
            "contentType": "Course"
        }
    },
    {
        "review": "Checking Ratings and alignment under Overview",
        "rating": 5.0,
        "userDetails": {
            "firstName": "Get Started User Five",
            "userId": "e6a9d4b6-b30a-405f-9bcb-166038600218",
            "profileImageUrl": null
        },
        "cardSubType": "card-wide-lib",
        "cardCustomeClass": "",
        "context": {
          "pageSection": "featuredContents",
          "position": 3
        },
        "content": {
            "identifier": "do_113902049969004544112",
            "competencies_v5": [
                {
                    "competencyArea": "Domain",
                    "competencyAreaDescription": "Domain Competency Area",
                    "competencyAreaId": 145,
                    "competencyTheme": "Communication Backbone System Maintenance",
                    "competencyThemeDescription": "Communication Backbone System Maintenance competency Theme",
                    "competencyThemeId": 186,
                    "competencyThemeType": "Core",
                    "competencySubTheme": "Communication Backbone System Maintenance",
                    "competencySubThemeId": 187,
                    "competencySubThemeDescription": "Communication Backbone System Maintenance Competency Sub-Theme"
                },
                {
                    "competencyArea": "Domain",
                    "competencyAreaDescription": "Domain Competency Area",
                    "competencyAreaId": 145,
                    "competencyTheme": "Communication Auxiliary Systems Maintenance",
                    "competencyThemeDescription": "Communication Auxiliary Systems Maintenance competency Theme",
                    "competencyThemeId": 184,
                    "competencyThemeType": "Core",
                    "competencySubTheme": "Communication Auxiliary Systems Maintenance",
                    "competencySubThemeId": 185,
                    "competencySubThemeDescription": "Communication Auxiliary Systems Maintenance Competency Sub-Theme"
                }
            ],
            "description": "QATestCourse2",
            "organisation": [
                "Ministry of Finance"
            ],
            "creatorLogo": null,
            "posterImage": "https://portal.karmayogiqa.nic.in/content-store/content/do_113902071254761472117/artifact/do_113902071254761472117_1697030308090_screenshotfrom202310101224021697030170978.png",
            "duration": "540",
            "additionalTags": null,
            "appIcon": "https://portal.karmayogiqa.nic.in/content-store/content/do_113902071254761472117/artifact/do_113902071254761472117_1697030308090_screenshotfrom202310101224021697030170978.png",
            "primaryCategory": "Course",
            "name": "QATestCourse2",
            "avgRating": 5.0,
            "contentType": "Course"
        }
    },
    {
        "review": "Testing rating 123",
        "rating": 5.0,
        "userDetails": {
            "firstName": "Qa test user one @#$ 123",
            "userId": "7fd686b6-d5b2-4e0a-a43f-d6e57cd2ea09",
            "profileImageUrl": null
        },
        "cardSubType": "card-wide-lib",
        "cardCustomeClass": "",
        "context": {
          "pageSection": "featuredContents",
          "position": 3
        },
        "content": {
            "identifier": "do_1139400923254046721119",
            "competencies_v5": [
                {
                    "competencyArea": "Functional",
                    "competencyAreaDescription": "Functional Competency Area",
                    "competencyAreaId": 56,
                    "competencyTheme": "Administration Matters",
                    "competencyThemeDescription": "Administration Matters competency Theme",
                    "competencyThemeId": 140,
                    "competencyThemeType": "Core",
                    "competencySubTheme": "Handling Miscellaneous Matters (Car, Residence, Personal Staff etc.)",
                    "competencySubThemeId": 143,
                    "competencySubThemeDescription": "Handling Miscellaneous Matters (Car, Residence, Personal Staff etc.) Competency Sub-Theme"
                }
            ],
            "description": "Youtube Links",
            "organisation": [
                "Ministry of Finance"
            ],
            "creatorLogo": null,
            "posterImage": "https://portal.karmayogiqa.nic.in/content-store/content/do_1139400694644490241113/artifact/do_1139400694644490241113_1701668637063_effective-communication.png",
            "duration": "420",
            "additionalTags": null,
            "appIcon": "https://static.karmayogiprod.nic.in/igotqa/collection/do_1139400923254046721119/artifact/do_1139400694644490241113_1701668637063_effective-communication.thumb.png",
            "primaryCategory": "Course",
            "name": "Course New 04 Dec",
            "avgRating": 5.0,
            "contentType": "Course"
        }
    },
    {
        "review": "nice1",
        "rating": 5.0,
        "userDetails": {
            "firstName": "Qa test user one @#$ 123",
            "userId": "7fd686b6-d5b2-4e0a-a43f-d6e57cd2ea09",
            "profileImageUrl": null
        },
        "cardSubType": "card-wide-lib",
        "cardCustomeClass": "",
        "context": {
          "pageSection": "featuredContents",
          "position": 3
        },
        "content": {
            "identifier": "do_1139967854457651201519_rc",
            "competencies_v5": [
                {
                    "competencyArea": "Behavioural",
                    "competencyAreaId": 1,
                    "competencyAreaDescription": "Behavioural Competency Area",
                    "competencyTheme": "Personal Effectiveness",
                    "competencyThemeId": 7,
                    "competecnyThemeDescription": "Personal Effectiveness competency Theme",
                    "competencyThemeType": "Core",
                    "competencySubTheme": "Resilience",
                    "competencySubThemeId": 9,
                    "competecnySubThemeDescription": "Resilience Competency Sub-Theme"
                }
            ],
            "description": "Sub:- Vikas- New Program '22/02/24'     ",
            "organisation": [
                "Ministry of Finance"
            ],
            "creatorLogo": null,
            "posterImage": "https://portal.karmayogiqa.nic.in/content-store/content/do_1139946848192430081395/artifact/do_1139946848192430081395_1708335549501_digitalindiaandegovernance1708335549950.jpg",
            "duration": "12761",
            "additionalTags": null,
            "appIcon": "https://static.karmayogiprod.nic.in/igotqa/collection/do_1139967854457651201519_rc/artifact/do_1139946848192430081395_1708335549501_digitalindiaandegovernance1708335549950.thumb.jpg",
            "primaryCategory": "Program",
            "name": "Vikas- New Program '22/02/24'",
            "avgRating": 2.0,
            "contentType": "Course"
        }
    },
    {
        "review": "bv",
        "rating": 5.0,
        "userDetails": {
            "firstName": "qa dstuserone",
            "userId": "31c81730-bf33-437a-a53e-0bd8ac2fc3d6",
            "profileImageUrl": null
        },
        "cardSubType": "card-wide-lib",
        "cardCustomeClass": "",
        "context": {
          "pageSection": "featuredContents",
          "position": 3
        },
        "content": {
            "identifier": "do_113965740548784128178",
            "competencies_v5": [
                {
                    "competencyArea": "Functional",
                    "competencyAreaId": 56,
                    "competencyAreaDescription": "Functional Competency Area",
                    "competencyTheme": "Establishment & HR",
                    "competencyThemeId": 101,
                    "competecnyThemeDescription": "Establishment & HR competency Theme",
                    "competencyThemeType": "Core",
                    "competencySubTheme": "Handling Fundamental Rules /Supplementary Rules",
                    "competencySubThemeId": 104,
                    "competecnySubThemeDescription": "Handling Fundamental Rules /Supplementary Rules Competency Sub-Theme"
                }
            ],
            "description": "Course with more subthemes",
            "organisation": [
                "Ministry of Finance"
            ],
            "creatorLogo": null,
            "posterImage": "https://portal.karmayogiqa.nic.in/content-store/content/do_113921119628378112168/artifact/do_113921119628378112168_1699355423624_capture121699355424283.png",
            "duration": "540",
            "additionalTags": [
                "mostEnrolled"
            ],
            "appIcon": "https://static.karmayogiprod.nic.in/igotqa/collection/do_113965740548784128178/artifact/do_113921119628378112168_1699355423624_capture121699355424283.thumb.png",
            "primaryCategory": "Course",
            "name": "Course with more subthemes",
            "avgRating": 5.0,
            "contentType": "Course"
        }
    }
]
  constructor(public ratingService: RatingService) { }

  ngOnInit() {
  }

  getRatingIcon(ratingIndex: number, avg: number): 'star' | 'star_border' | 'star_half' {
    return this.ratingService.getRatingIcon(ratingIndex, avg)
  }
  getRatingIconClass(ratingIndex: number, avg: number): boolean {
    return this.ratingService.getRatingIconClass(ratingIndex, avg)
  }

  getCurrentIndex(indexValue: any) {
    this.currentIndex = indexValue
  }
}

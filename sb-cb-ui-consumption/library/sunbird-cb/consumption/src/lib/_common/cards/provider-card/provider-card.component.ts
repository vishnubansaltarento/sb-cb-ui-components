import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-uic-provider-card',
  templateUrl: './provider-card.component.html',
  styleUrls: ['./provider-card.component.scss']
})
export class ProviderCardComponent implements OnInit {

  providers = [
    {
      name: 'Indian Institute of Management Bengaluru (IIMB)',
      link: 'https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/IIMB/all-CBP',
      logo: 'assets/icons/top-providers/ef8a88cf-33cc-42de-bdc3-7deed1ab2418.png'
    },
    {
      name: 'Department for Promotion of Industry and Internal Trade',
      link: 'https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/Department for Promotion of Industry and Internal Trade/all-CBP',
      logo: 'assets/icons/top-providers/0d400bdf-4ad8-45bf-914c-be44018c2d07.png'
    },
    {
      name: 'RAKNPA',
      link: 'https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/RAKNPA/all-CBP',
      logo: 'assets/icons/top-providers/1becfffa-956e-48ba-8ffd-77c19cd720c8.jpeg'
    },
    {
      name: 'Lal Bahadur Shastri National Academy of Administration (LBSNAA)',
      link: 'https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/Ministry of Environment, Forest and Climate Change/all-CBP',
      logo: 'assets/icons/top-providers/1d76c041-a7c9-437c-94d9-36d997f3804c.jpeg'
    },
    {
      name: 'Ministry of Environment, Forest and Climate Change',
      link: 'https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/LBSNAA/all-CBP',
      logo: 'assets/icons/top-providers/1fb72c3f-1c96-4600-8e22-09871a85e6c4.jpeg'
    },
    {
      name: 'ISTM',
      link: 'https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/Institute of Secretariat Training and Management/all-CBP',
      logo: 'assets/icons/top-providers/6f046f76-b778-476a-987b-8669e106b44c.jpeg'
    },
    {
      name: 'Department of Expenditure',
      link: 'https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/Department%20of%20Expenditure%20/all-CBP',
      logo: 'assets/icons/top-providers/7f6df809-6930-44f4-abcf-c8297363d3e0.png'
    },
    {
      name: 'Department of Personnel and Training DoPT',
      link: 'https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/Department%20of%20Personnel%20and%20Training%20DoPT/all-CBP',
      logo: 'assets/icons/top-providers/dopt.png'
    },
    {
      name: 'Indian Cybercrime Coordination Centre - I4C',
      link: 'https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/Indian%20Cybercrime%20Coordination%20Centre%20-%20I4C/all-CBP',
      logo: 'assets/icons/top-providers/7f8cab8e-9d22-44ba-a41e-83b907e5a5f0.jpeg'
    },
    {
      "name": "Capacity Building Commission",
      "link": "https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/Capacity%20Building%20Commission/all-CBP",
      "logo": "assets/icons/top-providers/33e9c66f-312f-4244-901e-7d7525ae8847.jpeg"
  },
  {
      "name": "Ministry of Railways",
      "link": "https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/Ministry%20of%20Railways/all-CBP",
      "logo": "assets/icons/top-providers/36d93700-c43f-499e-ab3c-68ea76388a2a.png"
  },
  {
      "name": "World Bank",
      "link": "https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/World%20Bank/all-CBP",
      "logo": "assets/icons/top-providers/385ff4a0-41af-4114-8015-10d26c1e8af4.jpeg"
  },
  {
      "name": "Sashastra Seema Bal (SSB)",
      "link": "https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/Sashastra%20Seema%20Bal%20%28SSB%29/all-CBP",
      "logo": "assets/icons/top-providers/778b56bf-8946-45fe-87d3-358203f2faf4.png"
  },
  {
      "name": "SVPNPA",
      "link": "https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/SVPNPA/all-CBP",
      "logo": "assets/icons/top-providers/2862d2e5-473e-4c55-abaa-8a2f86e5eee4.jpeg"
  },
  {
      "name": "Microsoft",
      "link": "https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/Microsoft/all-CBP",
      "logo": "assets/icons/top-providers/53407dd6-d22c-4dba-a394-015fae667636.png"
  },
  {
      "name": "Indian Institute of Public Administration",
      "link": "https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/Indian%20Institute%20of%20Public%20Administration/all-CBP",
      "logo": "assets/icons/top-providers/869960d7-2dc7-4205-8c4b-11321d901060.jpeg"
  },
  {
      "name": "Food Corporation of India (FCI)",
      "link": "https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/Food%20Corporation%20of%20India%20%28FCI%29/all-CBP",
      "logo": "assets/icons/top-providers/4183673f-9063-4fa9-bf84-1e8856c8e531.jpeg"
  },
  {
      "name": "National Telecommunications Institute for Policy Research, Innovation and Training",
      "link": "https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/NTIPRIT/all-CBP",
      "logo": "assets/icons/top-providers/a976f025-e990-49b0-a52a-9bd0a8e43584.jpeg"
  },
  {
      "name": "The Art of Living",
      "link": "https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/The%20Art%20of%20Living/all-CBP",
      "logo": "assets/icons/top-providers/abbb8f64-84db-4a92-85c9-1b394ffab71c.png"
  },
  {
      "name": "National Institute of Communication Finance",
      "link": "https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/National%20Institute%20of%20Communication%20Finance/all-CBP",
      "logo": "assets/icons/top-providers/b6bf0be6-7e29-4187-a29d-da6db1db7c69.jpeg"
  },
  {
      "name": "Department of Posts",
      "link": "https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/Department%20of%20Posts/all-CBP",
      "logo": "assets/icons/top-providers/cf567f4c-d0fa-447f-aba4-cb378ea3c90d.png"
  },
  {
      "name": "Government e Market Place(GeM)",
      "link": "https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/Government%20e%20Market%20Place%28GeM%29/all-CBP",
      "logo": "assets/icons/top-providers/f445c11b-ff73-4ca4-9dea-8d8945d92a4a.png"
  },
  {
      "name": "Bharat Sanchar Nigam Limited(BSNL)",
      "link": "https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/Bharat%20Sanchar%20Nigam%20Limited%28BSNL%29/all-CBP",
      "logo": "assets/icons/top-providers/fc67226a-4bbc-449a-8c5c-e1b338716545.png"
  },
  {
      "name": "Defence Accounts Department (DAD)",
      "link": "https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/Defence%20Accounts%20Department%20%28DAD%29/all-CBP",
      "logo": "assets/icons/top-providers/fccdb487-a389-48d9-bce0-c4d64315b546.png"
  },
  {
      "name": "Morarji Desai National Institute of Yoga (MDNIY)",
      "link": "https://portal.igotkarmayogi.gov.in/app/learn/browse-by/provider/Morarji%20Desai%20National%20Institute%20of%20Yoga%20%28MDNIY%29/all-CBP",
      "logo": "assets/icons/top-providers/fcde4c60-7ccd-456e-a5df-260dcfa2d3ee.png"
  }
    
  ];

  colors = [
    '#EF941D', '#F97440', '#35B5B0', '#9988FF', '#816FEC',
    '#254092', '#926525', '#4F72DF'
  ];

  constructor() {}

  ngOnInit() {
  }

  redirectTo(provider: any): void {
    window.open(provider.link, '_blank');
  }


}
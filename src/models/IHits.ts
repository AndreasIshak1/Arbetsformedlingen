export interface IHits {
  id: string,
  headline: string,
  logo_url: string,
  description: {
    text: string;
    text_formatted: string;
  },
  employment_type: {
    label: string;
  },
  employer: {
    name: string,

  },
  salary_type: {
    label: string;
  }
  working_hours_type: {
    label: string;
  },
  workplace_address: {
    city: string,
    region: string,
    country: string,
    postcode: string;
    street_address: string;
  }
  application_details: {
    url: string;
  }
}

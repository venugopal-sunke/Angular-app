export interface UserPipe {
    id: number;
    name: string;
    city: string;
    salary: number;
    dob: Date;
  }

  interface geoInfo {
    lat: string;
    lng: string;
  }
  export interface userInfo {
    id: string;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: geoInfo;
    },
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    }
  }

  export interface comments {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }

  export interface Menu {
    name: string,
    link: string | null,
  }

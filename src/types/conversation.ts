export type TConversation= {
  id: number;
  favorite: boolean;
  avatar: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: TUserAddress;
  company: TCompany;
  posts: TPost[];
  accountHistory: TAccountHistory[];
}

export type TUserAddress = {
      streetA: string;
      streetB: string;
      streetC: string;
      streetD: string;
      city: string;
      state: string;
      country: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      }
}

export type TCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
}

export type TPost = {
    words: Array<string | null>;
    sentence: string;
    sentences: string;
    paragraph: string;
  }

export type TAccountHistory = {
  amount: string;
  date: string;
  business: string;
  name: string;
  type: string;
  account: string;
}
export interface datas {
  fullName: string;
  email: string;
  text: string;
}
export interface state {
  PersonData: datas[];
}
export const AppState: state = {
  PersonData: [
    {
      fullName: '',
      email: '',
      text: '',
    },
  ],
};

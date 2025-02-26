export interface cardType {
  id?: number;
  title: string;
  noCard: string;
  expDate: string;
  color: string;
  limit: string;
}
export const cards: cardType[] = [
  {
    id: 1,
    title: "Superhuman",
    noCard: "123455678513",
    expDate: "03/2026",
    color: "#F12424",
    limit: "1000",
  },
  {
    id: 2,
    title: "FB ADS",
    noCard: "123455678129",
    expDate: "05/2026",
    color: "#3632DE",
    limit: "1000",
  },
  {
    id: 3,
    title: "Rudy Kerfun Wang",
    noCard: "123455678410",
    expDate: "01/2024",
    color: "#090833",
    limit: "1000",
  },
  {
    id: 4,
    title: "Superhuman",
    noCard: "123455678139",
    expDate: "03/2026",
    color: "#F12424",
    limit: "1000",
  },
];

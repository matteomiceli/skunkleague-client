import { ObjectId } from "mongodb";

type Player = {
  Alias: string;
  FirstName: string;
  LastName: string;
  ID: ObjectId;
  Losses: number;
  Wins: number;
  Points: number;
};

export { Player };

import { ObjectId } from "mongodb";

type Game = {
  _id: ObjectId;
  players: PlayerResult[];
  time: Date;
  winner: ObjectId;
  round: int;
};

type PlayerResult = {
  id: ObjectId;
  alias: string;
  points: number;
};

export { Game, PlayerResult };

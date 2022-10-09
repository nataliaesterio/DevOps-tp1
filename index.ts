import express from "express";
import { Player } from "./player";

const app = express();
const PORT = 8081;

const players = [
  new Player(1, "Natalia", "Esterio", 551502000000).toJson(),
  new Player(2, "Héctor", "Acosta", 571806000000).toJson(),
];

app.get("/players", (_, res) => {
  res.json(players);
});

app.listen(PORT, () => {
  console.log(`Express server is listening at port ${PORT}`);
});

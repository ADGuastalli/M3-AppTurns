import server from "./server";
import { DB_PORT, PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
  .then((res) => {
    console.log(`Connection to the Database Successfully on Port ${DB_PORT}`);
    server.listen(PORT, () => {
      console.log(`Server Listening on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));

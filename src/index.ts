import express, { Request, RequestHandler, Response }  from "express";
import cors from "cors";

import { PrismaClient as PrismaClient1 } from '../prisma/generated/client1'
import { PrismaClient as PrismaClient2 } from '../prisma/generated/client2'
// import { PrismaClient as PrismaClient2 } from '@prisma/client'
import{z} from "zod";

import morgan from "morgan";
import { env_entorno } from "./env";



//server app
const app = express();

const port = env_entorno.PORT;
app.listen(port, () => {
  console.log(`🔥  🚀  server runn port ➡️ ... ${port} 😃  ✔️`);
});

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




const client1 = new PrismaClient1()
const client2 = new PrismaClient2()





app.get('/red', async  (req : Request, res: Response) => {

  const Validated = z.object({
    nombre : z.string(),
    habilitado : z.boolean(),
  })

   Validated.parse({
    nombre : "fsff",
    habilitado : true,
  })

  type Validated = z.infer<typeof Validated>;

  console.log(Validated);

  // const pepe = await client2.
  const pepe = await client1.documento.findMany({})
  

} )

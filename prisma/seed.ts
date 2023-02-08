//code
import { PrismaClient } from "@prisma/client";

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.dump.upsert({
    where: {},
    update: {},
    create: {
        
      description: "Basurero con luces led y con sonido para interactuar.",
      ubication: "Unidad Educativa CIBV Totoracocha" ,
      maintenance:"Martes" ,
      amount: "Vacio",
    },
  });

  const post2 = await prisma.dump.upsert({
    where: {},
    update: {},
    create: {
      
      description: "leave its grave at night to drink the blood of the living by biting their necks with long pointed canine teeth.",
      ubication:"Unidad Educativa CIBV Totoracocha" ,
      maintenance: "Jueves",
      amount: "lleno",
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
  


  //Devuelve un valor lógico que indica si el valor especificado coincide con alguno de los valores con los que se lo compara.
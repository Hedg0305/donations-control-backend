import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const workers: Prisma.WorkerCreateInput[] = [
  {
    name: "John",
    email: "teste@teste.com",
    phone: "21321432",
    address: "Rua teste",
    role: "CALLER",
  },
  {
    name: "Lucas",
    email: "teste1@teste.com",
    phone: "123214",
    address: "Rua teste 1",
    role: "CALLER",
  },
  {
    name: "Pedro",
    email: "teste2@gmail.com",
    phone: "12321432",
    address: "Rua teste 2",
    role: "COURIER",
  },
  {
    name: "Fernanda",
    email: "teste3@gmail.com",
    phone: "2132134",
    address: "Rua teste 2",
    role: "COURIER",
  },
];

const donators: Prisma.DonatorCreateInput[] = [
  {
    name: "Lucas",
    email: "teste1@gmail.com",
    address: "Rua teste 1",
    phone: "123214",
  },
  {
    name: "Pedro",
    email: "teste2@gmail.com",
    address: "Rua teste 2",
    phone: "12321432",
  },
  {
    name: "Fernanda",
    email: "teste3@gmail.com",
    address: "Rua teste 3",
    phone: "2132134",
  },
  {
    name: "Marcio",
    email: "teste4@gmail.com",
    address: "Rua teste 4",
    phone: "2132134",
  },
];

async function main() {
  console.log("Starting seed...");
  await prisma.worker.deleteMany({});
  workers.forEach(async (worker) => {
    const user = await prisma.worker.create({
      data: {
        ...worker,
      },
    });
    console.log(`Created worker: ${user.name}`);
  });

  await prisma.donator.deleteMany({});
  donators.forEach(async (donator) => {
    const user = await prisma.donator.create({
      data: {
        ...donator,
      },
    });
    console.log(`Created donator: ${user.name}`);
  });

  console.log("Seed finished!");
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


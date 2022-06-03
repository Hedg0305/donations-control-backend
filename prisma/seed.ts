import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const couriers: Prisma.CourierCreateInput[] = [
  {
    name: "John",
    email: "teste@teste.com",
    phone: "21321432",
    address: "Rua teste",
  },
  {
    name: "Lucas",
    email: "teste1@teste.com",
    phone: "123214",
    address: "Rua teste 1",
  },
  {
    name: "Leandro",
    email: "teste43@gmail.com",
    phone: "21321432",
    address: "Rua teste",
  },
  {
    name: "Pedro",
    email: "teste2@gmail.com",
    phone: "12321432",
    address: "Rua teste 2",
  },
  {
    name: "Fernanda",
    email: "teste3@gmail.com",
    phone: "2132134",
    address: "Rua teste 2",
  },
  {
    name: "João",
    email: "teste4@gmail.com",
    phone: "2132134",
    address: "Rua teste 2",
  },
  {
    name: "Maria",
    email: "teste55@gmail.com",
    phone: "2132134",
    address: "Rua teste 2",
  },
];

const telemarketing: Prisma.TelemarketingCreateInput[] = [
  {
    name: "Michele",
    email: "teste@teste.com",
    phone: "21321432",
    address: "Rua teste",
  },
  {
    name: "Luana",
    email: "teste1@teste.com",
    phone: "123214",
    address: "Rua teste 1",
  },
  {
    name: "Julia",
    email: "teste43@gmail.com",
    phone: "21321432",
    address: "Rua teste",
  },
  {
    name: "Carlos",
    email: "teste2@gmail.com",
    phone: "12321432",
    address: "Rua teste 2",
  },
  {
    name: "Marcos",
    email: "teste3@gmail.com",
    phone: "2132134",
    address: "Rua teste 2",
  },
  {
    name: "Pedro",
    email: "teste4@gmail.com",
    phone: "2132134",
    address: "Rua teste 2",
  },
  {
    name: "Luciana",
    email: "teste55@gmail.com",
    phone: "2132134",
    address: "Rua teste 2",
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
  {
    name: "Maria",
    email: "teste456@gmail.com",
    address: "Rua teste 5",
    phone: "2132134",
  },
];

async function main() {
  console.log("Starting seed...");

  await prisma.donation.deleteMany({});
  await prisma.donator.deleteMany({});
  await prisma.courier.deleteMany({});
  await prisma.telemarketing.deleteMany({});

  couriers.forEach(async (couriers) => {
    const user = await prisma.courier.create({
      data: {
        ...couriers,
      },
    });
    console.log(`Created courier: ${user.name}`);
  });

  telemarketing.forEach(async (telemarketing) => {
    const user = await prisma.telemarketing.create({
      data: {
        ...telemarketing,
      },
    });
    console.log(`Created telemarketing: ${user.name}`);
  });

  donators.forEach(async (donator) => {
    const user = await prisma.donator.create({
      data: {
        ...donator,
      },
    });
    console.log(`Created donator: ${user.name}`);
  });
  generateDonations();
}

const generateDonations = async () => {
  const callers = await prisma.telemarketing.findMany({});

  const couriers = await prisma.courier.findMany({});

  const donators = await prisma.donator.findMany();

  const donations: Prisma.DonationCreateInput[] = [];

  for (let i = 0; i < 35; i++) {
    const randonCourier = couriers[Math.floor(Math.random() * couriers.length)];

    const randomTelemarketing =
      callers[Math.floor(Math.random() * callers.length)];

    const donator = donators[Math.floor(Math.random() * donators.length)];

    donations.push({
      courier: {
        connect: {
          id: randonCourier.id,
        },
      },
      telemarketing: {
        connect: {
          id: randomTelemarketing.id,
        },
      },
      donator: {
        connect: {
          id: donator.id,
        },
      },
      amount: Math.floor(Math.random() * 100),
      date: new Date(),
    });
  }

  donations.forEach(async (donation) => {
    const user = await prisma.donation.create({
      data: {
        ...donation,
      },
    });
    console.log(`Created donation: ${user.amount}`);
  });
};

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


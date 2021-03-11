import pkg from "@prisma/client";
const { PrismaClient } = pkg;

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({
    log: ["query", "info", `warn`, `error`],
  });
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      log: ["query", "info", `warn`, `error`],
    });
  }
  prisma = global.prisma;
}

export default prisma;

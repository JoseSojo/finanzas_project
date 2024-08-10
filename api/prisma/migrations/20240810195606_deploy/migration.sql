-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "last_session" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "startSession" TIMESTAMP(3) NOT NULL,
    "endSession" TIMESTAMP(3),
    "token" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "redirect" TEXT NOT NULL DEFAULT '',
    "type" TEXT NOT NULL,
    "by" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Money" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "propietaryId" TEXT NOT NULL,

    CONSTRAINT "Money_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PayMethod" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "propietaryId" TEXT NOT NULL,
    "moneyId" TEXT NOT NULL,
    "mountTransfer" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "mountIngreso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "mountEgreso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PayMethod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Theme" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'INGRESO',
    "name" TEXT NOT NULL,
    "description" TEXT,
    "propietaryId" TEXT NOT NULL,

    CONSTRAINT "Theme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "themeId" TEXT NOT NULL,
    "payId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mount" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "History" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Month" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "objectType" TEXT NOT NULL,
    "objectId" TEXT,
    "monthNumber" INTEGER NOT NULL,
    "monthName" TEXT NOT NULL,
    "propietaryId" TEXT NOT NULL,
    "totalMonth" INTEGER NOT NULL,
    "day1" INTEGER NOT NULL,
    "day2" INTEGER NOT NULL,
    "day3" INTEGER NOT NULL,
    "day4" INTEGER NOT NULL,
    "day5" INTEGER NOT NULL,
    "day6" INTEGER NOT NULL,
    "day7" INTEGER NOT NULL,
    "day8" INTEGER NOT NULL,
    "day9" INTEGER NOT NULL,
    "day10" INTEGER NOT NULL,
    "day11" INTEGER NOT NULL,
    "day12" INTEGER NOT NULL,
    "day13" INTEGER NOT NULL,
    "day14" INTEGER NOT NULL,
    "day15" INTEGER NOT NULL,
    "day16" INTEGER NOT NULL,
    "day17" INTEGER NOT NULL,
    "day18" INTEGER NOT NULL,
    "day19" INTEGER NOT NULL,
    "day20" INTEGER NOT NULL,
    "day21" INTEGER NOT NULL,
    "day22" INTEGER NOT NULL,
    "day23" INTEGER NOT NULL,
    "day24" INTEGER NOT NULL,
    "day25" INTEGER NOT NULL,
    "day26" INTEGER NOT NULL,
    "day27" INTEGER NOT NULL,
    "day28" INTEGER NOT NULL,
    "day29" INTEGER NOT NULL,
    "day30" INTEGER NOT NULL,
    "day31" INTEGER NOT NULL,

    CONSTRAINT "Month_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Year" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "propietaryId" TEXT NOT NULL,
    "totalMonth1" INTEGER NOT NULL,
    "totalMonth2" INTEGER NOT NULL,
    "totalMonth3" INTEGER NOT NULL,
    "totalMonth4" INTEGER NOT NULL,
    "totalMonth5" INTEGER NOT NULL,
    "totalMonth6" INTEGER NOT NULL,
    "totalMonth7" INTEGER NOT NULL,
    "totalMonth8" INTEGER NOT NULL,
    "totalMonth9" INTEGER NOT NULL,
    "totalMonth10" INTEGER NOT NULL,
    "totalMonth11" INTEGER NOT NULL,
    "totalMonth12" INTEGER NOT NULL,

    CONSTRAINT "Year_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Money" ADD CONSTRAINT "Money_propietaryId_fkey" FOREIGN KEY ("propietaryId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayMethod" ADD CONSTRAINT "PayMethod_propietaryId_fkey" FOREIGN KEY ("propietaryId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayMethod" ADD CONSTRAINT "PayMethod_moneyId_fkey" FOREIGN KEY ("moneyId") REFERENCES "Money"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Theme" ADD CONSTRAINT "Theme_propietaryId_fkey" FOREIGN KEY ("propietaryId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_payId_fkey" FOREIGN KEY ("payId") REFERENCES "PayMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Month" ADD CONSTRAINT "Month_propietaryId_fkey" FOREIGN KEY ("propietaryId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Year" ADD CONSTRAINT "Year_propietaryId_fkey" FOREIGN KEY ("propietaryId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

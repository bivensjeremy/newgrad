-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "graduationYear" TEXT NOT NULL,
    "program" TEXT NOT NULL,
    "extern" BOOLEAN NOT NULL DEFAULT false,
    "department" TEXT[],
    "takenNCLEX" TEXT,
    "passedNCLEX" TEXT,
    "nclexScheduled" TEXT,
    "nclexDate" TEXT,
    "takenExitExam" TEXT,
    "exitExamScheduled" TEXT,
    "exitExamDate" TEXT,
    "nclexScores" TEXT,
    "exitExamScores" TEXT,
    "exitExamTest" TEXT,
    "position" TEXT,
    "studentID" SERIAL NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offer" (
    "id" SERIAL NOT NULL,
    "offerStatus" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "department" TEXT,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

import { cache } from "react";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prismaClient";

const prisma = new PrismaClient();

const getProjectData = cache(async (id: number) => {
  try {
    const project = await prisma.project.findFirst({
      where: {
        id: id,
      },
    });
    return NextResponse.json(project);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error" });
  }
});

export default getProjectData;

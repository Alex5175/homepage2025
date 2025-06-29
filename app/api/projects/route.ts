import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

// Middleware to handle CORS
function handleCors(req: NextRequest) {
  const allowedOrigins = ["https://alex-zeitlhofer.com"];
  const origin = req.headers.get("origin");

  if (!allowedOrigins.includes(origin || "")) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const response = NextResponse.next();
  response.headers.set("Access-Control-Allow-Origin", origin || "");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Authorization, Content-Type"
  );
  return response;
}

// GET: List all projects
export async function GET(req: NextRequest) {
  const corsResponse = handleCors(req);
  if (corsResponse.status === 403) return corsResponse;

  try {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Failed to list projects:", error);
    return NextResponse.json(
      { error: "Failed to list projects" },
      { status: 500 }
    );
  }
}

// POST: Create a new project
export async function POST(req: NextRequest) {
  const corsResponse = handleCors(req);
  if (corsResponse.status === 403) return corsResponse;

  try {
    const body = await req.json();
    const { title, description, image } = body;
    const project = await prisma.project.create({
      data: { title, description, image },
    });
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("Failed to create project:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}

// OPTIONS: Handle preflight requests
export async function OPTIONS(req: NextRequest) {
  return handleCors(req);
}

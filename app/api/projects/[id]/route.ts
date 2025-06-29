import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

// Middleware to handle CORS
function handleCors(req: NextRequest) {
  const allowedOrigins = ["https://alex-zeitlhofer.com"]; // Replace with your frontend domain
  const origin = req.headers.get("origin");

  if (!allowedOrigins.includes(origin || "")) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const response = NextResponse.next();
  response.headers.set("Access-Control-Allow-Origin", origin || "");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, PATCH, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Authorization, Content-Type"
  );
  return response;
}

// GET: Retrieve a project by ID
export async function GET(req: NextRequest) {
  const corsResponse = handleCors(req);
  if (corsResponse.status === 403) return corsResponse;

  const url = new URL(req.url);
  const id = url.pathname.split("/").pop(); // Extract the ID from the URL

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  try {
    const project = await prisma.project.findUnique({
      where: { id: Number(id) },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Failed to retrieve project:", error);
    return NextResponse.json(
      { error: "Failed to retrieve project" },
      { status: 500 }
    );
  }
}

// PATCH: Update a project by ID
export async function PATCH(req: NextRequest) {
  const corsResponse = handleCors(req);
  if (corsResponse.status === 403) return corsResponse;

  const url = new URL(req.url);
  const id = url.pathname.split("/").pop(); // Extract the ID from the URL

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  try {
    const body = await req.json();
    const updatedProject = await prisma.project.update({
      where: { id: Number(id) },
      data: body,
    });

    return NextResponse.json(updatedProject);
  } catch (error) {
    console.error("Failed to update project:", error);
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

// DELETE: Delete a project by ID
export async function DELETE(req: NextRequest) {
  const corsResponse = handleCors(req);
  if (corsResponse.status === 403) return corsResponse;

  const url = new URL(req.url);
  const id = url.pathname.split("/").pop(); // Extract the ID from the URL

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  try {
    await prisma.project.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete project:", error);
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}

// OPTIONS: Handle preflight requests
export async function OPTIONS(req: NextRequest) {
  return handleCors(req);
}

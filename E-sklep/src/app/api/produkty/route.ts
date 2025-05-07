import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    const produkty = await prisma.listaProduktow.findMany();
    return NextResponse.json(produkty);
}
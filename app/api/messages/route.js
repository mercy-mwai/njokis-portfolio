import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();

export async function POST(request){
    const {name, email, content}=await request.json();
    console.log(name, email, content);
    if(!name || !email || !content){
        return new Response('Missing fields', {status: 400});
    }
    try{
        const message = await prisma.message.create({
            data: { name, email, content },
          });
      
          return new Response(JSON.stringify(message), { status: 200 });
    }catch(error){
        console.error('Error saving message:', error);
        return new Response('Internal Server Error', {status: 500});
    }
}
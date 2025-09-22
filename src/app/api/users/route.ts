const baseUrl = process.env.BASE_URL
export async function GET() {
    try{
        const response = await fetch (`${baseUrl}/users`);
        const result = await response.json();
        return new Response(JSON.stringify(result), {
            status:200
        });
    }
    catch (error){
        return new Response((error as Error).message, {
            status: 500
        });
    }
}
export async function POST(request: Request){
    const bodyData = await request.json();
    const {firstName, lastName, age} = bodyData;
    if(!firstName || !lastName || !age){
        return new Response("Missing required fields firstname, stname, adn age"), {
            status: 400
        }
    }
    try{
        const response  = await fetch (`${baseUrl}/users/add`,{
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ firstName, lastName, age}),
        });
        const result = await response.json();
        return new Response(JSON.stringify(result), {
            status: 201,
            statusText: "User created successfully",
        });
    }
    catch(error){
        return new Response((error as Error).message, {
            status: 500
        })
    }
}
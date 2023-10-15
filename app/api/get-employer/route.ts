import {URL_EMPLOYER} from "@/app/config";

export async function GET() {
    try{
        const response=await fetch(`${URL_EMPLOYER}`)
        const result=await response.json();
        return new Response(JSON.stringify(result),{
            status:200,
            statusText:'Success'
        })
    }
    catch(error:any){
        return new Response(error.message,{
            status:500,
            statusText:'Failed'
        })
    }
}

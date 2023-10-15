import {URL_JOBSEEKER} from "@/app/config";
export async function GET() {
    try{
        const response=await fetch(`${URL_JOBSEEKER}`)
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



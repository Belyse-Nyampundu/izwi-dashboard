import {URL_JOBAPPLICATION} from "@/app/config";

export async function GET() {
    try{
      
        const response=await fetch(`${URL_JOBAPPLICATION}`)
        const result=await response.json();
        return new Response(JSON.stringify(result),{
            status:200,
            statusText:'Success'
        })
    }
    catch(error:any){
        console.error('Error fetching job postings:', error);
        return new Response(error.message,{
            status:500,
            statusText:'Failed'
        })
    }
}

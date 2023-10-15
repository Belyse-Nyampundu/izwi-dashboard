import {PER_EMPLOYER,TOKEN} from "@/app/config";

export async function GET(_request:Request,{params}:{params:{slug:string}}){
    const slug=params.slug
    try{
        if (!'https://bf8c-41-80-116-99.ngrok-free.app/jobpost/employer/job_posts/') {
            return new Response('Employer url not found',{
                status:404,
                statusText:"failed",
            })
        }
        if(!TOKEN){
            return new Response('Employer access token not found',{
                status:404,
                statusText:'failed'
            })
        }
        console.log(TOKEN,"token")
        const response=await fetch(`https://bf8c-41-80-116-99.ngrok-free.app/jobpost/employer/job_posts/${slug}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                Authorization:`${TOKEN}`
            }
        })
        const result=await response.json()
        return new Response(JSON.stringify(result),{
            status:200,
            statusText:"success"
        })
    }
    catch(error:any){
        return new Response(error,{
            status:500,
            statusText:'failed'
        })
    }
}
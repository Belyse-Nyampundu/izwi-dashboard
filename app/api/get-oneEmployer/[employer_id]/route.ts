import {EMPLOYER_DETAIL,TOKEN} from "@/app/config";

export async function GET(_request:Request,{params}:{params:{employer_id:number}}){
    const employer_id=params.employer_id
    try{
        if (!EMPLOYER_DETAIL) {
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
        const response=await fetch(`${EMPLOYER_DETAIL}${employer_id}`,{
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

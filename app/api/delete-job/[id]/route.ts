// import { URL } from './../../config';
import {URL} from "@/app/config";
import { NextApiRequest, NextApiResponse } from "next";
export async function DELETE( request: Request,
    { params }: { params: { id: string } }) {
      const id = params.id
      console.log(id, "slug")
    try {
        const response = await fetch(`${URL}${id}`, {
            method: "DELETE",
        });
    //   console.log(`${URL}`)
    //   console.log(JSON.stringify(response.json()),"response")
        if (response.ok) {
            console.log("I am ok")
            return new Response(JSON.stringify(response.json()), {
                status: 200,
                statusText: 'Success'
            }
            );
        }
        else {
            const errorResponse = await response.json();
            return new Response(JSON.stringify(errorResponse), {
                status: response.status,
                statusText: 'Failed'
            });
        }
    } catch (error: any) {
        return new Response(error.message, {
            status: 500,
            statusText: 'Failed'
        });
    }
}
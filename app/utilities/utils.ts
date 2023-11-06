
interface LoginData{
  username:string;
  password:string;
}
export const loginUser = async (loginData: LoginData) => {
  try {
    const response = await fetch('/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      throw new Error('Failed to log in');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return { error: 'Logged failed.' };

  }
};

  interface FormData {
    email: string;
    phone_number: string;
    password: string;
    confirm_password: string;
    username: string;
    first_name:string;
    last_name:string;
    location:string;
    national_identity:string;  
  }
  export const registerUser = async (formData: FormData) => {
    const url = '/api/signup';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(response,"result1")
      result.success = response.status == 201 ? true : false
      return result;
    } catch (error: any) {
      console.log(error,"error2")
      throw new Error(error);
    }
  };

  




export const getJobPosted= async()=>{
        const url ='/api/get-jobs/';
try{
    const response = await fetch (url)
    const result = await response.json();
    return result;
}
catch(error:any){
    return error.message
}

}


export const getRegisteredJobseeker= async()=>{
    const url ='/api/get-jobseeker';
try{
  const response = await fetch (url)
  const result = await response.json();
  return result;
}
  catch(error:any){
  return error.message
}
}


export const getRegisteredEmployer= async()=>{
    const url ='/api/get-employer';  
try{
const response = await fetch (url)
const result = await response.json();
return result;
}
catch(error:any){
return error.message
}

}


interface UsersData {
    title: string;
    description: string;
    location: string;
    num_workers_needed: string;
    posted_date: string;
    job_category: string;
  }


export const createPosts = async (userData: UsersData) => {
    const url = '/api/post-jobs';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const result = await response.json();
      return result;
    } catch (error: any) {
      return error.message;
    }
  };



  export const getJobCategory= async()=>{
    const url ='/api/get-jobcategory';
   try{
      const response = await fetch (url)
      const result = await response.json();
      return result;
      }
       catch(error:any){
       return error.message
  }

}


export const deleteJob = async (id: number) => {
  const url = `/api/delete-job/${id}`; 

  try {
    const response = await fetch(url,{
      method: "DELETE", 
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      const errorResponse = await response.json();
      return errorResponse;
    }
  } catch (error: any) {
    console.error("Error:", error.message);
    return error.message;
  }
};


export const getJobApplication = async()=>{
  const url = '/api/get-jobApplication'
  try{
    const response = await fetch(url)
    const result = await response.json()

    return result
  }
  catch(error:any){
    return error.message
  }
}



export const getEmployerDetail = async(employerPhone:number)=>{
  const url =`/api/get-oneEmployer/${employerPhone}`;

  try{
      const response=await fetch(url)
      if(!response.ok){
          return `employer with phonenumber ${employerPhone} not found`
      }
      const result=await response.json()
      return result;
  }
  catch(error){
      return error
  }
}


export const getJobPostedPerEmployer = async(employerNumber:string)=>{
  const url =`/api/get-jobPerEmployer/${employerNumber}`;

  try{
      const response=await fetch(url)
      if(!response.ok){
          return `employer with phonenumber ${employerNumber} not found`
      }
      const result=await response.json()
      return result;
  }
  catch(error){
      return error
  }
}
     
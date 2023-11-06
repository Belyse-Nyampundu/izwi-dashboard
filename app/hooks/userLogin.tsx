interface LoginData {
  username: string;
  password: string;
}
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '../utilities/utils';
import { toast } from 'react-toastify';
import cookie from 'cookiejs';

const useLogin = () => {
  const router = useRouter()
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleLogin = async (loginData: LoginData) => {
    setLoading(true)
    setError('')
    const response = await loginUser(loginData);
    setLoading(false)
    if (response.error) {
      setError(response.error)
      return
    }
      setUser(response);
      cookie.set('sessionToken', response);
      toast('Logged done')
      router.push('/jobPosting');
  };
  return { handleLogin, loading, user, error };
};
export default useLogin;





import { userState, useEffect } from 'react';

const userFetch = (url) => {

    const [data,setData] = userState([]);
    const [error,setError] = userState([null]);
    const [loading,setLoading] = userState([false]);

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            try{
              const res = await fetch(url);

              if(!res.ok){
                setError('failed to fetch');
              }
              const json = await res.json();

              setData(result.data);
              setLoading(false);

         }catch(err){
              setError(err.massage);
              setLoading(false);
         }
        };

        fetchData();
    },[url]);

    return {
        data,
        error,
        loading,
    };
};

export default userFetch
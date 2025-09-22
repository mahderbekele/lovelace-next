import { useState, useEffect } from "react";
import {fetchUsers} from "../utils/fetchUsers"

interface User{
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    userName: string;
    image: string;
}
const useFetchUsers = () => {
    const [users, setUsers] = useState<Array<User>>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(()=>{
        (async()=>{
            try {
                const data = await fetchUsers();
                setUsers(data?.users);
            }
            catch(error){
                setError((error as Error).message)
            }
            finally{
                setLoading(false);
            }
        })();
    }, []);
    return {users, loading, error}
};
export default useFetchUsers;
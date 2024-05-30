
import { useEffect, useState } from "react"
import { User } from "../models/User"
import { fetchUsers } from "../services/api"

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getusers = async () => {
            try {
                const response = await fetchUsers()
                setUsers(response.data)
            } catch (err) {
                console.error('Failed to fetch users', err)
            } finally {
                setLoading(false)
            }
        }
        getusers()
    },[])
return {users, loading}
}

export default useUsers
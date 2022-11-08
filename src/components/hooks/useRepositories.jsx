import React, {useState, useEffect} from 'react'

const useRepositories = () => {
    const [repositories, setRepositories] = useState()
    const [loading, setLoading] = useState(false)
    const fetchRepos = async() =>{
        setLoading(true)
        const request = await globalThis.fetch('http://192.168.0.10:5000/api/repositories')
        const data = await request.json()
        const repositories = data ? data.edges.map(edge => edge.node) : []
        setRepositories(repositories)
        setLoading(false)

    }

    useEffect(()=>{
        fetchRepos()
    }, [])
    return {repositories, loading, refetch: fetchRepos}
}

export default useRepositories
import { Text } from "@mantine/core"
import { useQuery } from 'react-query'

const fetchLogin = () => fetch('/login.json').then((res) => res.json())
const fetchUser = (id) => fetch(`/${id}.json`).then(res => res.json())

const login = async () => {
    console.log('loginResponse')
    const loginResponse = await fetchLogin()
    console.log('loginResponse', loginResponse)
    return fetchUser(loginResponse.id)
}

const Login = () => {
    const { data: user } = useQuery('login', login)
    return (<Text>{JSON.stringify(user)}</Text>)
}

export default Login
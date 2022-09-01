import { QueryClientProvider } from "react-query"
import { Container, MantineProvider, Stack, Title } from "@mantine/core"

import client from "./client"
import Login from "./Login"
import Stopwatch from "./Stopwatch"

function App() {
  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <Container>
        <Stack>
          <Title>Login</Title>
          <Login />
        </Stack>
        <Stack>
          <Title>Stop Watch</Title>
          <Stopwatch />
        </Stack>
      </Container>
    </MantineProvider>
  )
}

export default function WrappedApp() {
  return (
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  )
}

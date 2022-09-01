import { QueryClientProvider } from "react-query"
import { Container, MantineProvider, Stack, Title } from "@mantine/core"

import client from "./client"
import Login from "./Login"
import Stopwatch from "./Stopwatch"
import Logger from "./Logger"
import GPS from "./GPS"
import WebWorker from "./WebWorker"
import GlobalState from "./GlobalState"

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
        <Stack>
          <Title>Throtteled Logger</Title>
          <Logger />
        </Stack>
        <Stack>
          <Title>GPS</Title>
          <GPS />
        </Stack>
        <Stack>
          <Title>WebWorker</Title>
          <WebWorker />
        </Stack>
        <Stack>
          <Title>Global State</Title>
          <GlobalState />
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

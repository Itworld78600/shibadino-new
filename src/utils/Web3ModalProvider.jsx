/* eslint-disable react/prop-types */
import { bscTestnet, mainnet } from "wagmi/chains";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConectivityProvider } from "./utils";

const queryClient = new QueryClient();

const projectId = "cba73ada547c01c1a64d7725fb732495";

const chains = [bscTestnet, mainnet];

export const config = defaultWagmiConfig({
  chains,
  projectId,
  auth: {
    email: false,
    socials: [],
  },
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  themeMode: "dark",
  enableOnramp: false,
  enableSwaps: false,
});

export function Web3ModalProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConectivityProvider>{children}</ConectivityProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

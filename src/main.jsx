import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { bsc } from "@reown/appkit/networks";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const projectId = "d671236016330da759c4f1c871e9b9df";

const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks: [bsc]
});

createAppKit({
  adapters: [wagmiAdapter],
  networks: [bsc],
  projectId,
  metadata: {
    name: "Mox App",
    description: "Mox Crypto Login",
    url: "https://mox.com",
    icons: ["https://mox.com/logo.png"]
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);

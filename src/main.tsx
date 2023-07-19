import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { CardContextProvider } from "./store/CardContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<CardContextProvider>
			<App />
		</CardContextProvider>
	</React.StrictMode>
);

import { Refine } from "@refinedev/core";
import { useNotificationProvider , RefineThemes } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";
import routerProvider, {
    UnsavedChangesNotifier,
    DocumentTitleHandler,
} from "@refinedev/react-router-v6";
import { BrowserRouter} from "react-router-dom";
import { ConfigProvider } from "antd";
import dataProvider from "@refinedev/simple-rest";
import {routes} from "./routes/routes";
import {resources} from "./routes/resource";

function App() {
    return (
        <BrowserRouter>
            <ConfigProvider theme={RefineThemes.Red}>
                <Refine

                    notificationProvider={useNotificationProvider}
                    routerProvider={routerProvider}
                    dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                    resources={
                        resources
                    }
                >
                    {routes}
                    <UnsavedChangesNotifier />
                    <DocumentTitleHandler />
                </Refine>
            </ConfigProvider>
        </BrowserRouter>
    );
}

export default App;
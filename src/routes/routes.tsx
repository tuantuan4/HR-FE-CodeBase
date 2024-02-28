import {Outlet, Route, Routes} from "react-router-dom";
import {ErrorComponent, ThemedHeaderV2, ThemedLayoutV2, ThemedTitleV2} from "@refinedev/antd";
import {NavigateToResource} from "@refinedev/react-router-v6";
import UserList from "../pages/user/UserList";
import UserCreate from "../pages/user/UserCreate";
import UserEdit from "../pages/user/UserEdit";
import {PostCreate, PostList, PostUpdate} from "../pages/post";
import {Layout} from "../components/layout";
import {Menu} from "../components/menu";
import {MenuFoldOutlined} from '@ant-design/icons'
import {Image} from "antd";
export const routes = (
    <Routes>
        <Route
            element={
                <ThemedLayoutV2
                    Title={({ collapsed }) => (
                        <ThemedTitleV2
                            // collapsed is a boolean value that indicates whether the <Sidebar> is collapsed or not
                            collapsed={collapsed}
                            icon={<Image src={"https://www.ssi.com.vn/frontend/images/logo.svg"}/>}
                            text="HR tool"
                        />
                    )}
                >
                    <Outlet />
                </ThemedLayoutV2>
            }
        >
            <Route index element={<NavigateToResource resource="users" />} />
            <Route path="users">
                <Route index element={<UserList />} />
                <Route path="create" element={<UserCreate />} />
                <Route path="edit/:id" element={<UserEdit />} />
            </Route>
            <Route index element={<NavigateToResource resource="posts" />} />
            <Route path="posts">
                <Route index element={<PostList />} />
                <Route path="create" element={<PostCreate />} />
                <Route path="edit/:id" element={<PostUpdate />} />
            </Route>
            <Route path="*" element={<ErrorComponent />} />
        </Route>
    </Routes>
);
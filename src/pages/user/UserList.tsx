import React from "react";
import {DeleteButton, EditButton, List, useTable} from "@refinedev/antd";
import { Space, Table } from "antd";

interface IFormValue {
    name: string;
    email: string;
    skills: string;
    id: number;
}

export default function UserList() {
    const { tableProps } = useTable<IFormValue>();

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="firstName" title="First Name" />
                <Table.Column dataIndex="email" title="Email" />
                <Table.Column dataIndex="skills" title="Skills" />
                <Table.Column<IFormValue>
                    title="Actions"
                    dataIndex="actions"
                    render={(__text_, _record_): React.ReactNode => {
                        return (
                            <Space>
                                <EditButton size="small" recordItemId={_record_.id} hideText />
                                <DeleteButton size="small" recordItemId={_record_.id} hideText/>
                            </Space>
                        );
                    }}
                />
            </Table>
        </List>
    );
}
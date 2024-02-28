export const resources=[

    {
        name: "test"
    },
    {
        name: "users",
            meta: { parent: "test" },
        list: "/users",
            create: "/users/create",
        edit: "/users/edit/:id",
    },
    {
        name: "posts",
            meta: { parent: "test" },
        list: "/posts",
            create: "/posts/create",
        edit: "/posts/edit/:id"
    },
    {
        name: "test2"
    },
    {
        name: "users",
        meta: { parent: "test2" },
        list: "/users",
        create: "/users/create",
        edit: "/users/edit/:id",
    },
    {
        name: "posts",
        meta: { parent: "test2" },
        list: "/posts",
        create: "/posts/create",
        edit: "/posts/edit/:id"
    }
]
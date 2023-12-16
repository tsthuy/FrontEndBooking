export const adminMenu = [
    { //quản lí người dùng
        name: 'menu.admin.user', menus: [
            {
                name: 'menu.admin.crud-user', link: '/system/user-manage'
            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux'
            },
            {
                name: 'menu.admin.manage-doctor', link: '/system/doctor-manage'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            }, {
                name: 'menu.admin.manage-admin', link: '/system/admin-manage'
            },
        ]
    },
    { //manage clinic
        name: 'menu.admin.clinic', menus: [
            {
                name: 'menu.admin.manage-clinic',
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },

        ]
    },
    { // handbook
        name: 'menu.admin.handbook', menus: [
            {
                name: 'menu.admin.manage-handbook',

            },
        ]
    },
    { //Specialty
        name: 'menu.admin.specialty', menus: [
            {
                name: 'menu.admin.manage-specialty',

            },
        ]
    },
];
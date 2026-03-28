

 export const allmenus = [
    {
        label : "Dashboard",
        path: "/dashboard",
        action: "route",
        key: "dashboard",
        type: "headermenu",
        roles: "DEVOPS,DEVELOPER,PROJECTADMIN"
     },
     {
        label: "Projects",
        path: "",
        action: "dropdown",
        key: 'projects',
        type: "headermenu",
        roles: "DEVELOPER"
     },
     {
        label: "Global Templates",
        path: "/globaltemplates",
        action: "route",
        key: 'globaltemplates',
        type: "headermenu",
        roles: "DEVOPS"
     },
     {
        label: "User Management",
        path: "",
        action: "route",
        key: "usermanagement",
        type: "headermenu",
        roles: "ADMIN"
     }
                                   ]
export const headermenus = (role: string) =>{
  let available = allmenus.filter((f) => {
    return f.roles.includes(role);
  });

  if(available && available.length) {
     return [...available];
  }
  return [];
}
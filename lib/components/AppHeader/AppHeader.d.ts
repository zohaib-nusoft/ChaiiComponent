import React from "react";
interface Props {
    isAuthenticated: boolean;
    userName: string;
    notificationsCount: number;
}
declare const AppHeader: React.FC<Props>;
export default AppHeader;

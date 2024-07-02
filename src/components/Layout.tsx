import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
    <div className="outer">
        <div className="inner">
            {children}
        </div>
    </div>
);

export default Layout;

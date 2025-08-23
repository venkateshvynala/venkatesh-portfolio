
import { type ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "@/components/error/ErrorBoundry";

// import { ThemeProvider } from "@/contexts/ThemeContext";
// import { AuthProvider } from "@/contexts/useAuth";
// import { ErrorBoundary } from "@/components/error/ErrorBoundry";



const AppProviders = ({ children }: { children: ReactNode }) => {
    const providers = [
        (children: ReactNode) => <BrowserRouter>{children}</BrowserRouter>,
        (children: ReactNode) => <ErrorBoundary>{children}</ErrorBoundary>,
    ];

    return providers.reduceRight((acc, Provider) => Provider(acc), children);
};

export default AppProviders;

import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
    errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Error caught by ErrorBoundary:", error, errorInfo);

        this.setState({
            error,
            errorInfo,
        });
    }

    resetError = () => {
        this.setState({
            hasError: false,
            error: undefined,
            errorInfo: undefined,
        });
    };

    reloadPage = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className='flex min-h-screen items-center justify-center bg-primary px-4'>
                    <div className='w-full max-w-2xl rounded-xl bg-secondary p-8 shadow-lg'>
                        <div className='text-center'>
                            <div className='text-5xl mb-4'>⚠️</div>

                            <h1 className='text-2xl font-semibold text-white'>
                                Something went wrong
                            </h1>

                            <p className='mt-2 text-white/80'>
                                An unexpected error occurred. Try again or
                                reload the page.
                            </p>

                            <div className='mt-6 flex justify-center gap-3'>
                                <button
                                    onClick={this.reloadPage}
                                    className='rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition'>
                                    Reload Page
                                </button>

                                <button
                                    onClick={this.resetError}
                                    className='rounded-lg border border-gray-500/67 px-4 py-2 text-white hover:bg-primary transition'>
                                    Try Again
                                </button>
                            </div>
                        </div>

                        <details className='mt-6 rounded-md bg-gray-50 p-4 text-sm text-left'>
                            <summary className='cursor-pointer font-medium text-black'>
                                Error details
                            </summary>

                            <pre className='mt-2 whitespace-pre-wrap text-red-500'>
                                {this.state.error?.toString()}
                                {"\n"}
                                {this.state.errorInfo?.componentStack}
                            </pre>
                        </details>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

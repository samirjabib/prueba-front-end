export const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div className="error h-screen w-full flex items-center flex-col justify-center ">
            <p className="text">Tenemos un error, intenta de nuevo</p>
            <pre>{error.message}</pre>
            <button 
                onClick={resetErrorBoundary}
                className="mt-6 border border-black px-4 p-2 transition-all hover:bg-black hover:text-white"
            >Try again</button>
        </div>
    )
}
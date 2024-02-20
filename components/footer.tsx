export default function Footer() {
    return (
        <footer className="mt-10 flex w-full items-center justify-between px-0 py-4">
            <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Hansumfella LLC
            </p>
            <p className="text-sm text-muted-foreground">
                Made with ❤️ by{" "}
                <a href="https://dickey.gg" target="_blank" className="hover:underline">
                    dickey
                </a>
            </p>
        </footer>
    );
}

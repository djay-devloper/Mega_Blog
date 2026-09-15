function Logo({ width = '32px' }) {
    return (
        <div
            style={{ width }}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white p-1 shadow-md ring-1 ring-slate-200"
            aria-hidden="true"
        >
            <svg
                viewBox="0 0 64 64"
                className="h-full w-full rounded-full object-cover"
                role="img"
                aria-label="MegaBlog logo"
                style={{ display: 'block' }}
            >
                <defs>
                    <linearGradient id="logoGradient" x1="0%" x2="100%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                </defs>
                <circle cx="32" cy="32" r="30" fill="url(#logoGradient)" />
                <path
                    d="M20 42V22h8.5c5.2 0 8.4 2.9 8.4 7.3 0 4.5-3.2 7.7-8.4 7.7H20zm7.2-11.9h1.2c2.1 0 3.4-1.2 3.4-3.1 0-1.9-1.3-3.1-3.4-3.1h-1.2v6.2zm11.6 11.9V22h5.3v20h-5.3z"
                    fill="#fff"
                />
            </svg>
        </div>
    );
}

export default Logo;
import logo from '../assets/megabloLogo.png';

function Logo({ width = '32px' }) {
    return (
        <div
            style={{ width }}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white p-1 shadow-md ring-1 ring-slate-200"
            aria-hidden="true"
        >
            <img
                src={logo}
                alt="Logo"
                className="h-full w-full rounded-full object-cover"
                style={{ display: 'block' }}
            />
        </div>
    );
}

export default Logo;
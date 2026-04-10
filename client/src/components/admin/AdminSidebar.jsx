import { NavLink } from 'react-router-dom';

function AdminSidebar({ onLogout }) {
    return (
        <aside className="flex w-full flex-col bg-[#0b0f14] px-4 py-6 text-white lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:px-6">
            <div className="mb-8 mt-2 font-heading text-2xl font-bold tracking-tight text-white lg:mt-4">
                Admin Panel
            </div>
            <nav className="space-y-2">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 font-medium transition ${isActive ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                        }`
                    }
                >
                    Dashboard
                </NavLink>
            </nav>
            <div className="mt-auto pt-8">
                <button
                    onClick={onLogout}
                    className="w-full rounded-xl bg-slate-800 px-4 py-3 text-left font-medium text-slate-300 transition hover:bg-slate-700 hover:text-white"
                >
                    Logout
                </button>
            </div>
        </aside>
    );
}

export default AdminSidebar;

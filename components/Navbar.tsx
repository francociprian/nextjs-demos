import Link from "next/link"
import { ButtonToggleTheme } from "./ButtonToggleTheme"


export const Navbar = () => {
    return (
        <div className='backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 h-12 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between'>
            <div className="container max-w-9xl mx-auto flex items-center justify-between px-4">
                <Link href='/'>Home</Link>
                <div className="ml-auto flex items-center space-x-4">
                    <ButtonToggleTheme />
                </div>
            </div>
        </div>
    )
}
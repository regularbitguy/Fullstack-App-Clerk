import 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { Outlet, Link, Navigate } from 'react-router-dom'

export function Layout() {


    return <div className='app-layout'>
        <header className='app-header'>
            <div className='header-content'>
                <h1>Generador de Desafío de Programación</h1>
                <nav>
                    <SignedIn>
                        <Link to ="/">Generar Desafío</Link>
                        <Link to ="/history">Historial</Link>
                        <UserButton></UserButton>
                    </SignedIn>
                </nav>
            </div>
        </header>

        <main className='app-main'>
            <SignedOut>
                <Navigate to ="/sign-in" replace></Navigate>
            </SignedOut>
            <SignedIn>
                <Outlet></Outlet>
            </SignedIn>
        </main>
    </div>
}
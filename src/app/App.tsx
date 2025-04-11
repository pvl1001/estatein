import { HashRouter, Route, Routes } from 'react-router'
import { Footer } from 'widgets/Footer'
import { Header } from 'widgets/Header'
import { Nav } from 'widgets/Nav'

function App() {
    return (
        <HashRouter>
            <Nav />
            <Routes>
                <Route
                    path={'/'}
                    element={
                        <>
                            <Header />
                            <main className={'wrapper'}>main</main>
                        </>
                    }
                ></Route>
            </Routes>
            <Footer />
        </HashRouter>
    )
}

export default App

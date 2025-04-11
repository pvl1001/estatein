import { BrowserRouter, Route, Routes } from 'react-router'
import { Footer } from 'widgets/Footer'
import { Header } from 'widgets/Header'
import { Nav } from 'widgets/Nav'

function App() {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    )
}

export default App

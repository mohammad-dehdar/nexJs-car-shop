function Layout({ children }) {
    return (
        <>
            <header>
                <h2>Car Shop</h2>
                <p>Choose and buy your car</p>
            </header>

            <div>{children}</div>

            <footer>
                creat by Mohammad Dehdar|<a>github</a>
            </footer>
        </>
    )
}

export default Layout
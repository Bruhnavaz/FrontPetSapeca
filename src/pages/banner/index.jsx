const Banner = () => {
    return (
        <header className="header-admin">
          <nav>
            <ul>
            <li>
            <img className="logo-header" src="/logo.svg" alt="Logo" />
            </li>
              <li>
                <a href="/fornecedor">FORNECEDORES</a>
              </li>
              <li>
                <a className="page-admin" href="/banner">BANNERS</a>
              </li>
              <li>
                <a href="/produtos">PRODUTOS</a>
              </li>
            </ul>
          </nav>
        </header>
    )
}
export default Banner
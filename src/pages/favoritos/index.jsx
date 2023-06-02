const Favoritos = () => {
  return (
    <>
    <div className="page-fav">
    <header className="header-user">
      <nav>
        <ul>
          <li>
          <img className="logo-header" src="/logo.svg" alt="Logo" />
          </li>
          <li>
            <a href="/home">Página Inicial</a>
          </li>
          <li>
            <a className="page-open" href="/favoritos">
              Favoritos
            </a>
          </li>
          <li>
            <a href="/carrinho">Carrinho</a>
          </li>
        </ul>
      </nav>
    </header>
    <main className="main-fav">
    <div className="produtos">

    <div className="card">
            <img
              src="/racao04.png"
              alt="Imagem do Produto"
              className="card-img"
            />
          <div className="card-content">
            <h3 className="card-title">Cama Hamster</h3>
            <p className="card-price">R$ 30,00</p>
            <p className="card-description">Serragem para hamster 100g</p>
            <div className="card-icons">
              <span className="heart-icon">&#10084;</span>
              <span className="cart-icon">&#128722;</span>
            </div>
          </div>
        </div>

        <div className="card">
            <img
              src="/racao02.png"
              alt="Imagem do Produto"
              className="card-img"
            />
          <div className="card-content">
            <h3 className="card-title">Wiskas sabor peixe</h3>
            <p className="card-price">R$ 49,99</p>
            <p className="card-description">Wiskas sabor peixe 900g</p>
            <div className="card-icons">
              <span className="heart-icon">&#10084;</span>
              <span className="cart-icon">&#128722;</span>
            </div>
          </div>
        </div>

        <div className="card">
            <img
              src="/racao01.png"
              alt="Imagem do Produto"
              className="card-img"
            />
          <div className="card-content">
            <h3 className="card-title">Pedigree</h3>
            <p className="card-price">R$ 99,99</p>
            <p className="card-description">Ração para cachorro 15kg</p>
            <div className="card-icons">
              <span className="heart-icon">&#10084;</span>
              <span className="cart-icon">&#128722;</span>
            </div>
          </div>
        </div>
        </div>
    </main>
    </div>
    </>
  );
};
export default Favoritos;

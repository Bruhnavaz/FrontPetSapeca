import { useState } from "react";

const Carrinho = () => {
  // const { users, isLoading, isError, error } = useUsers()
  const [valor, setValor] = useState(0);

  const incrementar = () => {
    setValor(valor + 1);
  };

  const decrementar = () => {
    if (valor > 0) {
      setValor(valor - 1);
    }
  };

  return (
    <>
      <div className="page-carrinho">
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
                <a href="/favoritos">Favoritos</a>
              </li>
              <li>
                <a className="page-open" href="/carrinho">
                  Carrinho
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main-carrinho">
          <div className="produtos">
          <div className="card">
              <img
                src="caminho_da_imagem"
                alt="Imagem do Produto"
                className="card-img"
              />
              <div className="card-content">
                <h3 className="card-title">Nome do Produto</h3>
                <p className="card-price">R$ 99,99</p>
                <p className="card-description">Descrição do produto...</p>
                <div className="card-icons">
                  <span className="heart-icon">
                    {" "}
                    <div className="contador">
                      <button className="botao menos" onClick={decrementar}>
                        -
                      </button>
                      <div className="valor">{valor}</div>
                      <button className="botao mais" onClick={incrementar}>
                        +
                      </button>
                    </div>
                  </span>
                  <span className="cart-icon">&#10084;</span>
                </div>
              </div>
            </div>
            {/* <div className="card">
              <img
                src="caminho_da_imagem"
                alt="Imagem do Produto"
                className="card-img"
              />
              <div className="card-content">
                <h3 className="card-title">Nome do Produto</h3>
                <p className="card-price">R$ 99,99</p>
                <p className="card-description">Descrição do produto...</p>
                <div className="card-icons">
                  <span className="heart-icon">
                    {" "}
                    <div className="contador">
                      <button className="botao menos" onClick={decrementar}>
                        -
                      </button>
                      <div className="valor">{valor}</div>
                      <button className="botao mais" onClick={incrementar}>
                        +
                      </button>
                    </div>
                  </span>
                  <span className="cart-icon">&#10084;</span>
                </div>
              </div>
            </div> */}
            <div className="card">
              <img
                src="caminho_da_imagem"
                alt="Imagem do Produto"
                className="card-img"
              />
              <div className="card-content">
                <h3 className="card-title">Nome do Produto</h3>
                <p className="card-price">R$ 99,99</p>
                <p className="card-description">Descrição do produto...</p>
                <div className="card-icons">
                  <span className="heart-icon">
                    {" "}
                    <div className="contador">
                      <button className="botao menos" onClick={decrementar}>
                        -
                      </button>
                      <div className="valor">{valor}</div>
                      <button className="botao mais" onClick={incrementar}>
                        +
                      </button>
                    </div>
                  </span>
                  <span className="cart-icon">&#10084;</span>
                </div>
              </div>
            </div>

            <div className="card">
              <img
                src="caminho_da_imagem"
                alt="Imagem do Produto"
                className="card-img"
              />
              <div className="card-content">
                <h3 className="card-title">Nome do Produto</h3>
                <p className="card-price">R$ 99,99</p>
                <p className="card-description">Descrição do produto...</p>
                <div className="card-icons">
                  <span className="heart-icon">
                    {" "}
                    <div className="contador">
                      <button className="botao menos" onClick={decrementar}>
                        -
                      </button>
                      <div className="valor">{valor}</div>
                      <button className="botao mais" onClick={incrementar}>
                        +
                      </button>
                    </div>
                  </span>
                  <span className="cart-icon">&#10084;</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Carrinho;

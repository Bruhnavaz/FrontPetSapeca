// import { Box, Container, Flex, Spacer } from '@chakra-ui/react'
// import { useUsers } from "../../hooks/useUsers"
// import { Link } from "react-router-dom"

import { useProdutos } from "../../hooks/mutationProdutos";

const Home = () => {
    const { produtos,isLoading,isError,Produtos} = useProdutos()

  return (
    <div className="page-home">
      <header className="header-user">
        <nav>
          <ul>
            <li>
              <img className="logo-header" src="/logo.svg" alt="Logo" />
            </li>
            <li>
              <a className="page-open" href="/home">
                Página Inicial
              </a>
            </li>
            <li>
              <a href="/favoritos">Favoritos</a>
            </li>
            <li>
              <a href="/carrinho">Carrinho</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-home">
        <div className="carrossel-container">
          <div className="carrossel-itens">
            <div className="item">     <img className="item-banner" src="/banner.png" alt="banner" />  
</div>
            <div className="item tres"> <img className="item-banner" src="/banner5.jpg" alt="banner" />  </div>
            <div className="item quatro"> <img className="item-banner" src="/banner3.jpeg" alt="banner" />  </div>
            <div className="item dois"> <img className="item-banner" src="/banner2.png" alt="banner" />  </div>
          </div>
        </div>
        <div className="produtos">
        {isLoading && <p>Carregando…</p>}
    {isError && <p>Erro ao carregar produtos</p>}
     {(produtos && !isError) ? Produtos.forEach((produto) => (
          <div key={produto.id} className="card">
            <img
              src="caminho_da_imagem"
              alt="Imagem do Produto"
              className="card-img"
            />
            <div className="card-content">
              <h3 className="card-title">{produto.nomeProduto}</h3>
              <p className="card-price">{produto.valor}</p>
              <p className="card-description">{produto.tipoProduto}</p>
              
              <div className="card-icons">
                <span className="heart-icon">&#10084;</span>
                <span className="cart-icon">&#128722;</span>
              </div>
            </div>
          </div>
     )) : <p></p>}
          <div className="card">
            <img
              src="/racao01.png"
              alt="Imagem do Produto"
              className="card-img"
            />
            <div className="card-content">
              <h3 className="card-title">Pedigree</h3>
              <p className="card-price">R$ 99,99</p>
              <p className="card-description">Ração Pedigree para cachorro 15kg</p>
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
              <h3 className="card-title">Whiskas sabor peixe</h3>
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
              src="/racao03.png"
              alt="Imagem do Produto"
              className="card-img"
            />
            <div className="card-content">
              <h3 className="card-title">Areia Premium</h3>
              <p className="card-price">R$ 109,00</p>
              <p className="card-description">Areia para gato premium 4kg</p>
              <div className="card-icons">
                <span className="heart-icon">&#10084;</span>
                <span className="cart-icon">&#128722;</span>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src="/racao04.png"
              alt="Imagem do Produto"
              className="card-img"
            />
            <div className="card-content">
              <h3 className="card-title">Cama Hamster </h3>
              <p className="card-price">R$ 30,00</p>
              <p className="card-description">Serragem para hamster 100g</p>
              <div className="card-icons">
                <span className="heart-icon">&#10084;</span>
                <span className="cart-icon">&#128722;</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


export default Home;

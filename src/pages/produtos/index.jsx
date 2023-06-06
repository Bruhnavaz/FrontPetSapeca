import {
  useToast,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useProdutos } from "../../hooks/mutationProdutos";
import { useEffect, useState } from "react";
import { config } from "../../../config";

const base_url = (config.debug ? config.dev_url : config.url) + "/produto";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  // const {produto} = useProdutos()
  const toast = useToast();
  const { reset, register, handleSubmit } = useForm();
  // const { mutate: mutateDeleteProdutos, isLoading: isLoadingProdutos, isError: isErrorDelete } = useDeleteProdutos()
  const { mutate: mutateCreateProdutos, isError } = useProdutos();
  useEffect(() => {
    downloadProdutos();
  }, []);

  const downloadProdutos = () => {
    fetch(base_url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setProdutos(response);
      });
  };

  // const onDeleteProdutos= (id) => {mutateDeleteProdutos (id)
  //   if(isErrorDelete){
  //     alert('Erro ao remover!')
  //   } else {
  //     alert('Removido com sucesso!')
  //     refetch()
  //   }
  // }

  const onSubmit = (data) => {
    fetch(base_url, { body: JSON.stringify(data),method: "POST", headers: {
      "Content-Type": "application/json",
    }, })
      .then(() => {
        toast({
          title: "Sucesso",
          description: "Produto criado com sucesso",
          status: "success",
          // duration: 3000,
          // isClosable: true,
          // onCloseComplete: () => window.location = '/'
        });
        downloadProdutos();
        reset();
      })
      .catch((error) => {
        console.log(error)
        toast({
          title: "Erro",
          description: "Erro ao criar produto",
          status: "error",
          // duration: 3000,
          // isClosable: true,
          // onCloseComplete: () => window.location = '/'
        });
      });
    // mutateCreateProdutos(data);
    // if (!isError) {
    //   toast({
    //     title: "Sucesso",
    //     description: "Produto criado com sucesso",
    //     status: "success",
    //     // duration: 3000,
    //     // isClosable: true,
    //     // onCloseComplete: () => window.location = '/'
    //   });
    //   downloadProdutos();
    //   reset();
    // }
  };
  const deleteProduto = (id) => {
    fetch(base_url+"/"+id ,{method: "DELETE"})
      .then(() => {
        toast({
          title: "Sucesso",
          description: "Produto removido com sucesso",
          status: "success",
          // duration: 3000,
          // isClosable: true,
          // onCloseComplete: () => window.location = '/'
        });
        downloadProdutos();
      })
      .catch((error) => {
        console.log(error)
        toast({
          title: "Erro",
          description: "Erro ao remover produto",
          status: "error",
          // duration: 3000,
          // isClosable: true,
          // onCloseComplete: () => window.location = '/'
        });
      });
    }

  return (
    <>
      <div className="page-produto">
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
                <a href="/banner">BANNERS</a>
              </li>
              <li>
                <a className="page-admin" href="/produtos">
                  PRODUTOS
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main-produto">
          <div className="produto">
            <div className="board-produto">
              <h2>PRODUTOS</h2>
              <div className="scroll-produto">
              {Array.isArray(produtos)
                ? produtos.map((produto) => (
              <div id="excluir-produto" key={produto.id}>

                Cod: {produto.id} <br /> Produto: {produto.nomeProduto} <br /> Qtd: {produto.quantidade} <br /> Valor: R${produto.valor}
                <div type="button"
                      onClick={() => {
                        if (window.confirm("Deseja excluir?")) {
                          deleteProduto(produto.id)
                        }
                      }}
                    >
                      {" "}
                      &#128465;
                    </div>
                </div>
                  ))
                : null}

              </div>
            </div>
          </div>
          <div className="form-produto">
            <div className="cadastro-produto">
              <h2>CADASTRO</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack className="form-inputs">
                  <div className="dois-campos">
                    <FormControl id="cod" className="cod">
                      <FormLabel>Cod</FormLabel>
                      <Input
                        type="string"
                        {...register("cod", { required: true })}
                      />
                    </FormControl>

                    {/* <div className="space-5"></div> */}
                    <FormControl id="nomeProduto" className="nomeProduto">
                      <FormLabel>Nome Produto</FormLabel>
                      <Input
                        type="text"
                        {...register("nomeProduto", { required: true })}
                      />
                    </FormControl>
                  </div>
                  {/* <div className="space-5"></div> */}
                  <div className="dois-campos">
                    <FormControl id="valorProduto" className="valorProduto">
                      <FormLabel>Valor</FormLabel>
                      <Input
                        type="string"
                        {...register("valor", { required: true })}
                      />
                    </FormControl>

                    {/* <div className="space-5"></div> */}
                    <FormControl id="quantidade" className="quantidade">
                      <FormLabel>Quantidade</FormLabel>
                      <Input
                        type="text"
                        {...register("quantidade", { required: true })}
                      />
                    </FormControl>
                  </div>

                  {/* <div className="space-5"></div> */}
                  <FormControl id="cnpjFornecedor" className="cnpjFornecedor">
                    <FormLabel>Cnpj Fornecedor</FormLabel>
                    <Input
                      type="string"
                      {...register("cnpjFornecedor", { required: true })}
                    />
                  </FormControl>

                  {/* <div className="space-5"></div> */}
                  <FormControl id="tipoProduto" className="tipoProduto">
                    <FormLabel>Tipo Produto</FormLabel>
                    <Input
                      type="text"
                      {...register("tipoProduto", { required: true })}
                    />
                  </FormControl>

                  {/* <div className="space-5"></div> */}
                  <FormControl id="unidadeMedida" className="unidadeMedida">
                    <FormLabel>Unidade Medida</FormLabel>
                    <Input
                      type="text"
                      {...register("unidadeMedida", { required: true })}
                    />
                  </FormControl>

                  {/* <div className="space-5"></div> */}
                  <FormControl id="publico" className="publico">
                    <FormLabel>Publico</FormLabel>
                    <Input
                      type="text"
                      {...register("publico", { required: true })}
                    />
                  </FormControl>
                  <div className="botoes">


                    <Button
                      id="botao-editar-produto"
                      mt={4}
                      colorScheme="teal"
                      // isLoading={isLoadingDeleteProduto}
                      //
                      //     }
                      // }}
                    >
                      Editar
                    </Button>

                    <Button
                      id="botao-cadastrar-produto"
                      mt={4}
                      colorScheme="teal"
                      type="submit"
                    >
                      Salvar
                    </Button>
                  </div>
                  {/* <Button id="botao-cadastrar" mt={4} colorScheme="teal" type="submit">
            <Link to="/home">Cadastrar</Link>{" "}
          </Button> */}
                </Stack>
              </form>
            </div>
            {/* <div className="editar-fornecedor">
              <h2>EDITAR</h2>
            </div> */}
          </div>
        </main>
      </div>
    </>
  );
};
export default Produtos;

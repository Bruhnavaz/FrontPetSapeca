import {useToast,Stack,FormControl,FormLabel,Input,Button} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useFornecedor } from "../../hooks/mutationFornecedor";
// import { Link } from "react-router-dom";

const Fornecedor = () => {
  const toast = useToast()
  const { reset, register, handleSubmit } = useForm();

  const { mutate: mutateCreateFornecedor, isError } = useFornecedor();

  const onSubmit = (data) => {
    mutateCreateFornecedor(data)
    if(!isError){
        toast({
            title: "Sucesso",
            description: "Fornecedor criado com sucesso",
            status: 'success',
            // duration: 3000,
            // isClosable: true,
            // onCloseComplete: () => window.location = '/'
        })
        reset()
    }
}

    return (
      <>
      <div className="page-fornecedor">
        <header className="header-admin">
          <nav>
            <ul>
            <li>
            <img className="logo-header"  src="/logo.svg" alt="Logo" />
            </li>
              <li>
                <a className="page-admin" href="/fornecedor">FORNECEDORES</a>
              </li>
              <li>
                <a href="/banner">BANNERS</a>
              </li>
              <li>
                <a href="/produtos">PRODUTOS</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main-fornecedor">
          <div className="fornecedores">
            <div className="board-fornecedores">
            <h2>FORNECEDORES</h2>
            <ul className="lista-fornecedor">
              <li><p>123.123.123/0001 </p>,<p>Mars S.A </p>,<p>(11) 1234-5678 </p>,<p>contato@mars.com.br  </p></li>
            </ul>
            </div>
          </div>
          <div className="form-fornecedores">
            <div className="cadastro-fornecedor">
              <h2>CADASTRO</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
        <Stack className="form-cadastrar">
          <FormControl id="cnpj" className="cnpj">
            <FormLabel>Cnpj</FormLabel>
            <Input type="string" {...register("cnpj", { required: true })} />
          </FormControl>

          <FormControl id="nomeFornecedor" className="nomeFornecedor">
            <FormLabel>Nome</FormLabel>
            <Input type="text" {...register("nome", { required: true })} />
          </FormControl>

          <FormControl id="emailFornecedor" className="emailFornecedor">
            <FormLabel>Email</FormLabel>
            <Input type="email" {...register("email", { required: true })} />
          </FormControl>
          <FormControl id="ruaFornecedor" className="ruaFornecedor">
            <FormLabel>Rua</FormLabel>
            <Input type="text" {...register("rua", { required: true })} />
          </FormControl>
          <div className="dois-campos">

          <FormControl id="numeroFornecedor" className="numeroFornecedor">
            <FormLabel>Número</FormLabel>
            <Input type="string" {...register("numero", { required: true })} />
          </FormControl>

          <FormControl id="bairroFornecedor" className="bairroFornecedor">
            <FormLabel>Bairro</FormLabel>
            <Input type="text" {...register("bairro", { required: true })} />
          </FormControl>
          </div>

          <div className="dois-campos">

          <FormControl id="cidadeFornecedor" className="cidadeFornecedor">
            <FormLabel>Cidade</FormLabel>
            <Input type="text" {...register("cidade", { required: true })} />
          </FormControl>

          <FormControl id="estadoFornecedor" className="estadoFornecedor">
            <FormLabel>Estado</FormLabel>
            <Input type="text" {...register("estado", { required: true })} />
          </FormControl>
          </div>

          <div className="botoes">
      
          <Button id="botao-editar-fornecedor" mt={4} colorScheme="teal" type="delete"
          >
            Excluir
          </Button>
          
          <Button id="botao-editar-fornecedor" mt={4} colorScheme="teal" type="submit">
            Editar
          </Button>

          <Button id="botao-cadastrar-fornecedor" mt={4} colorScheme="teal" type="submit">
            Cadastrar
          </Button>
          </div>
           {/* <Button id="botao-cadastrar" mt={4} colorScheme="teal" type="submit"> */}
          {/* <Link to="/home">Cadastrar</Link>{" "}  */}
          {/* </Button>  */}
        </Stack>
      </form>
            </div>
          </div>
        </main>
      </div>
      </>
    )
}
export default Fornecedor
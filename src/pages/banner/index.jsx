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

const Banner = () => {
  const toast = useToast();
  const { reset, register, handleSubmit } = useForm();

  const { mutate: mutateCreateProdutos, isError } = useProdutos();

  const onSubmit = (data) => {
    mutateCreateProdutos(data);
    if (!isError) {
      toast({
        title: "Sucesso",
        description: "Produto criado com sucesso",
        status: "success",
        // duration: 3000,
        // isClosable: true,
        // onCloseComplete: () => window.location = '/'
      });
      reset();
    }
  };
  return (
    <>
      <div>
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
                <a className="page-admin" href="/banner">
                  BANNERS
                </a>
              </li>
              <li>
                <a href="/produtos">PRODUTOS</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="main-banner">
          <div className="banner-list">
            <div className="board-banner">
              <h1>BANNERS</h1>
            </div>
          </div>
          <div className="banner-form">
            <div className="form-banner">
              <form
                className="form-inputs-banner"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Stack>
                  <div className="dois-campos banner-dois-campos">
                    <FormControl id="idBanner" className="idBanner">
                      <FormLabel className="idBanner-label">
                        ID Banner
                      </FormLabel>
                      <Input
                        type="text"
                        {...register("idBanner", { required: true })}
                      />
                    </FormControl>
                    <FormControl id="nomeBanner" className="nomeBanner">
                      <FormLabel className="nomeBanner-label">
                        Nome Banner
                      </FormLabel>
                      <Input
                        type="text"
                        {...register("nomeBanner", { required: true })}
                      />
                    </FormControl>
                  </div>

                  {/* <div className="space-5"></div> */}
                  <FormControl id="linkImagem" className="linkImagem">
                    <FormLabel className="linkImagem-label">
                      Link Imagem
                    </FormLabel>
                    <Input
                      type="link"
                      {...register("linkImagem", { required: true })}
                    />
                  </FormControl>

                  <div className="botoes botoes-banner">
                    <Button
                      id="botao-banner"
                      mt={4}
                      colorScheme="teal"
                      type="submit"
                    >
                      Excluir
                    </Button>

                    <Button
                      id="botao-banner"
                      mt={4}
                      colorScheme="teal"
                      // isLoading={isLoadingDeleteProduto}
                      // onClick={() => {
                      //     if(window.confirm('Deseja excluir?')){
                      //         onDeleteProdutos(produto.id)
                      //     }
                      // }}
                    >
                      Editar
                    </Button>

                    <Button
                      id="botao-banner"
                      mt={4}
                      colorScheme="teal"
                      type="submit"
                    >
                      Cadastrar
                    </Button>
                  </div>
                </Stack>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;

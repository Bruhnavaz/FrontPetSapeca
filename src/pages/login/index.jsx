import {
  // Container,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useUsers } from "../../hooks/mutationUser";
import { Link } from "react-router-dom";

const CreateUser = () => {
  const { reset, register, handleSubmit } = useForm();

  const { mutate: mutateCreateUser, isError } = useUsers();

  const onSubmit = (data) => {
    mutateCreateUser(data);
    if (!isError) {
      reset();
      alert("Usuário cadastrado com sucesso!");
    }
  };

  return (
    <main className="main-login">
      <div className="logo-login">
      {/* <h1>LOGO AQUI</h1> */}
     <img src="/logo.svg" alt="Logo" />  
      </div>

      <div className="container-login">
        <h1 className="titulo-login">LOGIN</h1>
        <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <FormControl id="email" className="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" {...register("email", { required: true })} />
            </FormControl>
            <div className="space-5"></div>
            <FormControl id="senha" className="senha">
              <FormLabel>Senha</FormLabel>
              <Input
                className="input"
                type="password"
                {...register("senha", { required: true })}
              />
            </FormControl>
            {/* tirar dúvida sobre como fazer o login */}
              <Button id="botao-login" mt={4} colorScheme="teal" type="submit">
                <Link to="/home">Entrar</Link>{" "}
              </Button>
          </Stack>
        </form>
      </div>
      <Button id="botao-cadastro" mt={4} colorScheme="teal" type="submit">
        <Link to="/cadastrar">Cadastre-se</Link>{" "}
      </Button>
    </main>
    // <Container className="container-login">
    //   {/* tirar dúvida sobre como inserir imagem
    //   <img src= {logoImg} alt="Logo" /> */}
    //   <h1 className="titulo-login">LOGIN</h1>
    //   <hr />
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <Stack className="form-login">
    //       <FormControl id="email" className="email">
    //         <FormLabel>Email</FormLabel>
    //         <Input type="email" {...register("email", { required: true })} />
    //       </FormControl>
    //       <FormControl id="senha" className="senha">
    //         <FormLabel>Senha</FormLabel>
    //         <Input
    //           className="input"
    //           type="password"
    //           {...register("senha", { required: true })}
    //         />
    //       </FormControl>
    //       {/* tirar dúvida sobre como fazer o login */}
    //       <div className="botoes-login">
    //         <Button id="botao-cadastro" mt={4} colorScheme="teal" type="submit">
    //           <Link to="/cadastrar">Cadastre-se</Link>{" "}
    //         </Button>
    //         <Button id="botao-login" mt={4} colorScheme="teal" type="submit">
    //           <Link to="/home">Entrar</Link>{" "}
    //         </Button>
    //       </div>
    //     </Stack>
    //   </form>
    // </Container>
  );
};

export default CreateUser;

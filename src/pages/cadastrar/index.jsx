import {useToast,Stack,FormControl,FormLabel,Input,Button,} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useUsers } from "../../hooks/mutationUser";
  import { Link } from "react-router-dom";

const CreateUser = () => {
  const toast = useToast()
  const { reset, register, handleSubmit } = useForm();

  const { mutate: mutateCreateUser, isError } = useUsers();

  const onSubmit = (data) => {
    mutateCreateUser(data)
    if(!isError){
        toast({
            title: "Sucesso",
            description: "Usuário criado com sucesso",
            status: 'success',
            // duration: 3000,
            // isClosable: true,
            // onCloseComplete: () => window.location = '/'
        })
        reset()
    }
}

  return (
    <main className="main-cadastrar">
     <div className="logo-cadastrar"> 
     <img src="/logo.svg" alt="Logo" />  
     </div> 

    <div className="container-cadastrar">
    <h1 className="titulo-cadastro">CADASTRAR</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack className="form-cadastrar">
          <FormControl id="cpf" className="cpf">
            <FormLabel>Cpf</FormLabel>
            <Input type="string" {...register("cpf", { required: true })} />
          </FormControl>

          <div className="space-5"></div>
          <FormControl id="nome" className="nome">
            <FormLabel>Nome</FormLabel>
            <Input type="text" {...register("nome", { required: true })} />
          </FormControl>

          <div className="space-5"></div>
          <FormControl id="email" className="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" {...register("email", { required: true })} />
          </FormControl>

          <div className="space-5"></div>
          <FormControl id="rua" className="rua">
            <FormLabel>Rua</FormLabel>
            <Input type="text" {...register("rua", { required: true })} />
          </FormControl>

          <div className="space-5"></div>
          <FormControl id="numero" className="numero">
            <FormLabel>Número</FormLabel>
            <Input type="string" {...register("numero", { required: true })} />
          </FormControl>

          <div className="space-5"></div>
          <FormControl id="bairro" className="bairro">
            <FormLabel>Bairro</FormLabel>
            <Input type="text" {...register("bairro", { required: true })} />
          </FormControl>

          <div className="space-5"></div>
          <FormControl id="cidade" className="cidade">
            <FormLabel>Cidade</FormLabel>
            <Input type="text" {...register("cidade", { required: true })} />
          </FormControl>
          
          <div className="space-5"></div>
          <FormControl id="estado" className="estado">
            <FormLabel>Estado</FormLabel>
            <Input type="text" {...register("estado", { required: true })} />
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

          <Button id="botao-cadastrar" mt={4} colorScheme="teal" type="submit">Cadastrar
            {/* <Link to="/home"></Link>{" "}  */}
          </Button>
        </Stack>
      </form>

    </div>
      </main>
  );
};

export default CreateUser;

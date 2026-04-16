import './RegisterLogin.css';

import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';


  // definindo regras do zod fora do componente para mais performance
  const loginSchema = z.object({
    name: z.string()
      .nonempty("O nome é obrigatório")
      .trim() /* tira os espaços extras no inicio e no fim */
      .min(2, 'O nome precisa ter 2-30 caracteres')
      .max(30, 'O nome precisa ter 2-30 caracteres'),

    email: z.email("Formato de e-mail inválido")
      .min(1, "O e-mail é obrigatório"),

    password: z.string()
      .min(6, "A senha precisa ter 6-20 caracteres")
      .max(20, "A senha precisa ter 6-20 caracteres")
  });

export function Register() {

  const {
    register,

    // faz os dados passarem pela regras que criei fora do componente, caso reprove joga isso dentro do errors
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(loginSchema), // o RHF agora sabe que deve usar o Zod
  });

  const enviarDados = (dadosValidados) => {
    console.log("Sucesso!", dadosValidados);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        
        <div className="login-header">
          <h2>Crie uma conta</h2>
          <p>Digite seu nome, e-mail e senha abaixo para efetuar o cadastro</p>
        </div>

        <form onSubmit={handleSubmit(enviarDados)} className="login-form">
          <div className="input-group">

            <label htmlFor="name">Nome:</label>
            <input 
              id='name'
              type='text'
              placeholder='Seu nome'
              autoComplete='Off'
              required

              /* injeta o nome no RHF */
              { ...register("name") }
            />
            {errors.name && <span className='incorrect' >{errors.name.message}</span>}

            <label htmlFor="email">E-mail:</label>
            <input 
              id="email" 
              type="email" 
              placeholder="seuemail@aqui.com"
              autoComplete='off'
              required 

              /* o resgister faz o input ser controlado pelo RHF */
              { ...register("email") }
            />
            {errors.email && <span className='incorrect' >{errors.email.message}</span>}
          </div>

          <div className="input-group">
            <div className="password-header">
              <label htmlFor="password">Senha:</label>
              
            </div>
            <input 
              id="password" 
              type="password" 
              placeholder="••••••••"
              required 

              /* o resgister faz o input ser controlado pelo RHF */
              { ...register("password") }
            />
            {errors.password && <span className='incorrect'>{errors.password.message}</span>}

          </div>

          <button type="submit" className="btn-primary">Entrar</button>

          <p>
            Já tem uma conta? <Link to="/login" className='not-registered-yet'>Entre</Link>
          </p>
        </form>

      </div>
    </div>
  );
}
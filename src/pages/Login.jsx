import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import './Login.css';


  // definindo regras do zod fora do componente para mais performance
  const loginSchema = z.object({
    email: z.email("Formato de e-mail inválido")
      .min(1, "O e-mail é obrigatório"),

    password: z.string()
      .min(6, "A senha precisa ter 6-20 caracteres")
      .max(20, "A senha precisa ter 6-20 caracteres")
  });

export function Login() {

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
          <h2>Acesse sua conta</h2>
          <p>Digite seu e-mail e senha abaixo para entrar</p>
        </div>

        <form onSubmit={handleSubmit(enviarDados)} className="login-form">
          <div className="input-group">
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
            <small>Senha inválida</small>
          </div>

          <button type="submit" className="btn-primary">Entrar</button>

          <p>
            Não tem uma conta? <a className='not-registered-yet' href="#" >Cadastre-se</a>
          </p>
        </form>

      </div>
    </div>
  );
}
import './Login.css';

export function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        
        <div className="login-header">
          <h2>Acesse sua conta</h2>
          <p>Digite seu e-mail e senha abaixo para entrar</p>
        </div>

        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">E-mail:</label>
            <input 
              id="email" 
              type="email" 
              placeholder="seuemail@aqui.com" 
              required 
            />
          </div>

          <div className="input-group">
            <div className="password-header">
              <label htmlFor="password">Senha:</label>
              <a style={{ color: '#3695e3',  }} href="#">Esqueceu a senha?</a>
            </div>
            <input 
              id="password" 
              type="password" 
              placeholder="••••••••"
              required 
            />
          </div>

          <button type="submit" className="btn-primary">Entrar</button>

          <p className="signup-link">
            Não tem uma conta? <a style={{ color: '#3695e3',  }} href="#">Cadastre-se</a>
          </p>
        </form>

      </div>
    </div>
  );
}
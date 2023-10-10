
import UsuarioStore from './store';

function Login() {
  const setUser = UsuarioStore((state) => state.setUser);

  function handleLogin() {
    setUser({ name: 'Alexandro Matineke', email: 'Canja.Matine@gmail.com' });
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default Login;
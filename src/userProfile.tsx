
import UsuarioStore from './store';

function PerfilUsuario() {
  const user = UsuarioStore((state) => state.user);

  if (!user) {
    return <p>Nenhum usuário logado.</p>;
  }

  return (
    <div>
      <h2>Perfil do Usuário</h2>
      <p>Nome: {user.name}</p>
      <p>E-mail: {user.email}</p>
    </div>
  );
}

export default PerfilUsuario;
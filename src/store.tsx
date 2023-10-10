import create from 'zustand';

interface User {
  name: string;
  email: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UsuarioStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default UsuarioStore;
import type { User } from '@/interfaces/user.interface';
import { create } from 'zustand'
import { loginAction } from '../actions/login.action';
import { chechAuthAction } from '../actions/check-auth.actions';
import { registerAction } from '../actions/register.action';

type AuthStatus = 'authenticated' | 'not-authenticated' | 'cheking';

type AuthState = {
  //Propiedades (Solo lectura)
    user:  User | null,
    token: string | null,
    authStatus: AuthStatus;

  // Getters (Valores computados)
    isAdmin: () => boolean;

  //Acciones 
  login: (email: string, password: string) => Promise<Boolean>;
  logut: () => void;
  register: ( name: string, email: string, password: string ) => Promise<Boolean>;
  chechAuthStatus: () => Promise<Boolean>
} 

export const useAuthStore = create<AuthState>()((set, get) => ({
  user: null,
  token: null,
  authStatus: 'cheking',

  isAdmin: () => {
    const roles = get().user?.roles ?? [];
    return roles.includes('admin');
  },

  
  login: async( email: string, password: string ) => {
    try {
        const data = await loginAction(email, password)
        localStorage.setItem('token', data.token);
        set({user: data.user, token: data.token, authStatus: 'authenticated'});
        // console.log(get().user);
        
        return true;
    } catch (error) {
        localStorage.removeItem('token');
        set({user: null, token: null, authStatus: 'not-authenticated'});
        return false;
    }
  },

  logut: () => {
    localStorage.removeItem('token');
    set({user: null, token: null, authStatus: 'not-authenticated'});
  },

  register: async( name, email, password ) => {
        try {
        const data = await registerAction(name, email, password);  
        localStorage.setItem('token', data.token);
        set({user: data.user, token: data.token, authStatus: 'authenticated'});
        return true;
    } catch (error) {
        localStorage.removeItem('token');
        set({user: null, token: null, authStatus: 'not-authenticated'});
        return false;
    }
  },

  chechAuthStatus: async () => {
    try {
      const { user,token } = await chechAuthAction();
      set({user: user, token: token, authStatus: 'authenticated'});
      return true;
    } catch (error) {
      set({user: undefined, token: undefined, authStatus: 'not-authenticated'});
      return false;
    }
  },

}));

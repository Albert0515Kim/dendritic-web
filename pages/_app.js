import '../src/index.css';
import { AuthProvider } from '../src/context/AuthContext';
import { SetsProvider } from '../src/context/SetsContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <SetsProvider>
        <Component {...pageProps} />
      </SetsProvider>
    </AuthProvider>
  );
}

export default MyApp;

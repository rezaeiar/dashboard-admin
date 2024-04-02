import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import LanguageSelector from './utils/LanguageSelector.ts'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const queryClient = new QueryClient();
LanguageSelector()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </QueryClientProvider>
)
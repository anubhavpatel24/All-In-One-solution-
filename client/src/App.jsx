import Navbar from './components/Navbar';
import AppRoutes from './routes';

function App() {
  return (
    <div className="min-h-screen bg-[#fffdf9] font-body text-slate-800">
      <Navbar />
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;

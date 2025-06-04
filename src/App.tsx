import { LoginForm } from "./components/LoginForm";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <Toaster position="top-center" />
      <LoginForm />
    </div>
  );
}

export default App;
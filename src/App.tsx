import { Toaster } from "@/components/ui/toaster";
import { RegistrationForm } from "./components/RegistrationForm";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <RegistrationForm />
      <Toaster />
    </div>
  );
}
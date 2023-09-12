import { Button } from "./components/ui/button";
import { useState } from 'react'

export function App() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleTheme() {
    setDarkMode(!darkMode)

    const root = document.documentElement;

    if (darkMode) {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
  }

  return (
    <div>
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl">
          upload.ai
        </h1>

        <div>
          <span>Desenvolvido por Rodrigo Silva</span>
          <Button>
            Github
          </Button>
        </div>
      </div>

    </div>
  )
}
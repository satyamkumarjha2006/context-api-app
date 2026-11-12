import { useEffect, useState } from "react"
import { ThemeContextProvider } from "./Context/Context"
import ThemeBtn from "./Components/themeBtn"
import Card from "./Components/Card"




function App() {

  const [themeBtn , setThemeBtn] = useState("light")

  const lightTheme = () => {
    setThemeBtn("light")
  }

   const darkTheme = () => {
    setThemeBtn("dark")
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("light" , "dark")
    document.querySelector("html").classList.add(themeBtn)

  },[themeBtn]) 


    return (
      <ThemeContextProvider value = {{themeBtn , lightTheme , darkTheme}}>
      <div className="flex flex-wrap min-h-screen bg-slate-950 items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn/> 
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
            </ThemeContextProvider>
            
    
  )
}

export default App

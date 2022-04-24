import { BrowserRouter, Route, Routes } from "react-router-dom"
import MobileDetailScreen from "../screens/mobile-detail/mobile-detail.screen"
import MobileListScreen from "../screens/mobile-list/mobile-list.screen"

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/:mobileId" element={ <MobileDetailScreen /> } />
            <Route path="/" element={ <MobileListScreen /> } />
        </Routes>
    </BrowserRouter>
  )
}
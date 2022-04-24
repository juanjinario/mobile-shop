import HeaderComponent from "../shared/components/header/header.component";
import { AppRouter } from "../routers/app.router";

function StoreApp() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <AppRouter></AppRouter>
    </>
  );
}

export default StoreApp;

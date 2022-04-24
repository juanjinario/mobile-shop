import HeaderComponent from "../shared/components/header/header.component";
import { AppRouter } from "../routers/app.router";

function StoreApp() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className="page-container">
        <AppRouter></AppRouter>
      </div>
    </>
  );
}

export default StoreApp;

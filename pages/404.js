import Warning from "../components/Warning";
import MainHeader from "../components/layout/MainHeader";
import Background from "../components/layout/Background";

const NotFoundPage = () => {
  const notFound = (
    <div>
      <p> 404 </p>
      <p>Página não encontrada</p>
    </div>
  );
  return (
    <Background>
      <MainHeader />
      <Warning text={notFound} />
    </Background>
  );
};

export default NotFoundPage;

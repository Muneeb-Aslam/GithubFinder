import Footer from "../components/layouts/footer";
import NavBar from "../components/layouts/navbar";
import UsersResult from "../components/users/usersresult";
import UserSearch from "../components/users/userssearch";

const Home: React.FC = () => {
  return (
    <div className="bg-neutral flex flex-col justify-between h-max">
      <NavBar title="Github Finder"/>
      <main className="container mx-auto px-3 pb-12">
        <UserSearch />
        <UsersResult />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import { CandidateLists } from "../../components/candidateLists";
import Navbar from "../../components/navBar";
import SideNav from "../../components/sideNav";
import SearchComponent from "../../components/search";

const Home: React.FC = () => {
  return (
    <>
      <main className="flex bg-lightBlue w-full">
        <SideNav />
        <SearchComponent />
        <div className="p-4  w-full">
          <Navbar />
          <CandidateLists />
        </div>
      </main>
    </>
  );
};

export default Home;

import React from "react";
import Categorie from "./Categorie";
import Footer from "./Footer";
import Data from "./Data";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data
    };
  }
  render() {
    return (
      <div>
        {this.state.Data.map((item) => {
          return (
            <Categorie
              key={item.type}
              type={item.type}
              url={item.url}
              id={item.id}
              scroll={item.scroll}
            >
            </Categorie>
          )
        })}
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  };
};
export default HomePage;

import classes from "./Layout.module.css";
import MainNav from "./MainNav";

function Layout(props) {
  return (
    <div className={classes.layout}>
      <MainNav />
      <main>{props.children}</main>
      {/* <Footer/> here goes the footer component of the layout*/}
    </div>
  );
}

export default Layout;

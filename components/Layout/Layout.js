import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={classes.layout}>
      {/* <MainNav/> here goes the main nav top bar component*/}
      <main>{props.children}</main>
      {/* <Footer/> here goes the footer component of the layout*/}
    </div>
  );
}

export default Layout;

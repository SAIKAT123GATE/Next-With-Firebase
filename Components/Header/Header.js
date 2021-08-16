//import { useHistory } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

import Link from "next/link";
import { auth } from "../firebase/firebase.utils";
import { useRouter } from 'next/router'

export default function Header(props) {
  console.log(props);
  const router = useRouter();

  const historys = () => {
    auth.signOut();
    router.push("/");
    
    
  };
  return (
    <div id='header'>
      <Navbar bg='dark' expand='lg' variant='dark'>
        <Container>
          <Navbar.Brand>
            <Link href='/'>
              <a>WELCOME</a>
            </Link>
            <style jsx>{`
              a {
                color: white;
                text-decoration: none;
              }
            `}</style>
          </Navbar.Brand>

          <Navbar.Collapse
            id='basic-navbar-nav'
            style={{ justifyContent: "flex-end" }}>
            <Nav
              className='my-2 my-lg-0'
              style={{ maxHeight: "100px", justifyContent: "flex-end" }}
              navbarScroll>
              {!props.currentuser ? (
                <Link href='/'>
                  <a>SIGN-IN</a>
                </Link>
              ) : (
                <>
                  <div onClick={()=>historys()} style={{cursor:"pointer",marginRight:"0.5rem"}}>
                    <a>SIGN-OUT</a>
                  </div>

                  <Link href='/mypost' >
                    <a >MY-POST</a>
                  </Link>
                </>
              )}
              <style jsx>{`
                a {
                  color: white;
                  text-decoration: none;
                }
              `}</style>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

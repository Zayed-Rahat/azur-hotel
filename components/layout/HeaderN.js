import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/actions/userActions";
import { signOut } from "next-auth/client";
import { Navbar, Container, NavDropdown } from "react-bootstrap";
const HeaderN = () => {
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.loadedUser);

  useEffect(() => {
    if (!user) {
      dispatch(loadUser());
    }
  }, [dispatch, user]);

  const logoutHandler = () => {
    signOut();
  };

  return (
    <Navbar bg="dark" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <Image
            style={{ cursor: "pointer" }}
            src="/images/AzurHotel_logo2.png"
            alt="AzurHotel"
            height={110}
            width={95}
          />
        </Navbar.Brand>
        {user ? (
          <NavDropdown
            className="right"
            title={user && user.name}
            id="basic-nav-dropdown"
          >
            <Image
              src={user.avatar && user.avatar.url}
              alt={user && user.name}
              className="rounded-circle"
              height={100}
              width={90}
            />

            {user.role === "admin" && (
              <>
                <NavDropdown.Item href="/admin/rooms">Rooms</NavDropdown.Item>
                <NavDropdown.Item href="/admin/bookings">
                  Bookings
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin/users">Users</NavDropdown.Item>
                <NavDropdown.Item href="/admin/reviews">
                  Reviews
                </NavDropdown.Item>
              </>
            )}
            <NavDropdown.Item href="/bookings/me">My Bookings</NavDropdown.Item>
            <NavDropdown.Item href="/me/update">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/" onClick={logoutHandler}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        ) : (
          !loading && (
            <Link href="/login">
              <a className="btn btn-danger px-4 text-white login-header-btn float-right">
                Login
              </a>
            </Link>
          )
        )}
      </Container>
    </Navbar>
  );
};

export default HeaderN;

import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { EditButton } from "./ProfileModal.styled";
import { logout } from "#redux/auth/operations";
import { ProfieleModalContainer, LogoutButton } from "./ProfileModal.styled";
import { TiPencil } from "react-icons/ti";

const UserLogoutModal = ({ handleEditProfileOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/auth/login");
  };

  return (
    <ProfieleModalContainer>
      <EditButton onClick={handleEditProfileOpen}>
        Edit profile
        <TiPencil />
      </EditButton>
      <LogoutButton onClick={handleLogout}>
        Log out
        <FiArrowRight />
      </LogoutButton>
    </ProfieleModalContainer>
  );
};

export default UserLogoutModal;

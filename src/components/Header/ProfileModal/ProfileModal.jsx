import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/auth/operations";

import { FiArrowRight } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import {
  ProfieleModalContainer,
  EditButton,
  LogoutButton,
} from "./ProfileModal.styled";

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
        <HiOutlinePencil />
      </EditButton>
      <LogoutButton onClick={handleLogout}>
        Log out
        <FiArrowRight />
      </LogoutButton>
    </ProfieleModalContainer>
  );
};

export default UserLogoutModal;

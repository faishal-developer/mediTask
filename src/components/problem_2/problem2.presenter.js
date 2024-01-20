import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getService } from "../../ApiService/ApiService";
import { Endpoints } from "../../ApiService/apiEndPoint";


// logic handling of problem 2
const useProblem2 = () => {
  // all states
  const [showContactAllModal, setShowContactAllModal] = useState(false);
  const [showUsContactModal, setShowUsContactModal] = useState(false);
  const [contact1Data, setContact1Data] = useState({ results: [] });
  const [contactUsData, setContactUsData] = useState({ results: [] });
  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);
  const history = useNavigate();

  // modal opening for all contact
  const openModal1 = () => {
    history("/problem-2?contact=contactall");
    setShowContactAllModal(true);
    getAllContactData();
  };

  // open modal for contact us
  const openModal2 = () => {
    history("/problem-2?contact=contactUS");
    setShowUsContactModal(true);
    getAllContactDataUS();
  };

  // even data showing
  const handleCheck = () => {
    setCheck(!check);
  };
  // even data showing for us
  const handleCheck2 = () => {
    setCheck(!check2);
  };

  const getDataByCheck = (data) => {
    let newData = data ?? contact1Data;
    if (check) {
      return newData?.results.filter((item) => item.id % 2 === 0);
    } else {
      return newData?.results;
    }
  };

  // get all contact data
  const getAllContactData = () => {
    getService(Endpoints.contacts + "?format=json&page=1", {
      thenCB: (res) => {
        setContact1Data(res.data);
      },
      catchCB: (error) => console.log(error),
      finallyCB: () => console.log("finally"),
    });
  };

  //get all contact data us
  const getAllContactDataUS = () => {
    getService(
      Endpoints.country_contacts("United States") + "?format=json&page=1",
      {
        thenCB: (res) => {
          setContactUsData(res.data);
          console.log(res.data);
        },
        catchCB: (error) => console.log(error),
        finallyCB: () => console.log("finally"),
      }
    );
  };
  return {
    contactUsData,
    setContactUsData,
    showUsContactModal,
    setShowContactAllModal,
    getAllContactDataUS,
    handleCheck,
    getDataByCheck,
    showContactAllModal,
    contact1Data,
    openModal1,
    openModal2,
    setShowUsContactModal,
    getAllContactData,
  };
};

export default useProblem2;

import React from "react";
import { Container } from "@mui/material";
import InvitationCard from "./components/InvitationCard.jsx";

export default function App() {
  const demoSections = [
    {
      invitedBy: "Khushi Bansal",
      data: {
        hostName: "Tom",
        phoneNumber: "883733378",
        email: "tom@gmail.com",
      },
      eventDetails: {
        status: "pending",
        onAccept: () => alert("Accepted!"),
        onDecline: () => alert("Declined!"),
      },
      ticketInformation: {
        ticketImage:
          "https://res.cloudinary.com/dolkad2sb/image/upload/v1756975176/ticket_rnm5is.png",
        onViewTicket: () => alert("Viewing ticket"),
        onDownloadTicket: () => alert("Downloading ticket"),
        onPrintTicket: () => alert("Printing ticket"),
      },
    },
  ];

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <InvitationCard sections={demoSections} />
    </Container>
  );
}

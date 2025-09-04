import React from "react";
import { Typography, Divider } from "@mui/material";
import ThumbUpAlt from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAlt from "@mui/icons-material/ThumbDownAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";

import {
  RootCard,
  Section,
  Row,
  Title,
  StatusChip,
  TicketImage,
  ActionButton,
} from "./invitation-card.styles";

export default function InvitationCard({ sections = [] }) {
  return (
    <RootCard>
      {sections.map((section, index) => (
        <Section key={index}>
          {/* Header */}
          <Row>
            <Title variant="h6">
              Invited by {section.invitedBy || "Unknown"}
            </Title>
            {section.eventDetails?.status && (
              <StatusChip
                label={section.eventDetails.status}
                color="primary"
                variant="outlined"
              />
            )}
          </Row>

          {/* Host Data */}
          {section.data &&
            Object.entries(section.data).map(([key, value]) => (
              <Row key={key}>
                <Typography color="textSecondary">{key}</Typography>
                <Typography>{value}</Typography>
              </Row>
            ))}

          {/* Event Details */}
          {section.eventDetails && (
            <Section>
              <Typography variant="subtitle1" fontWeight={600}>
                Event Details
              </Typography>
              <Row>
                <ActionButton
                  variant="contained"
                  startIcon={<ThumbUpAlt />}
                  onClick={section.eventDetails.onAccept}
                >
                  Accept
                </ActionButton>
                <ActionButton
                  variant="outlined"
                  startIcon={<ThumbDownAlt />}
                  onClick={section.eventDetails.onDecline}
                >
                  Decline
                </ActionButton>
              </Row>
            </Section>
          )}

          {/* Ticket Information */}
          {section.ticketInformation && (
            <Section>
              <Typography variant="subtitle1" fontWeight={600}>
                Ticket
              </Typography>
              {section.ticketInformation.ticketImage && (
                <TicketImage
                  src={section.ticketInformation.ticketImage}
                  alt="Ticket"
                />
              )}
              <Row>
                <ActionButton
                  startIcon={<VisibilityIcon />}
                  onClick={section.ticketInformation.onViewTicket}
                >
                  View
                </ActionButton>
                <ActionButton
                  startIcon={<DownloadIcon />}
                  onClick={section.ticketInformation.onDownloadTicket}
                >
                  Download
                </ActionButton>
                <ActionButton
                  startIcon={<PrintIcon />}
                  onClick={section.ticketInformation.onPrintTicket}
                >
                  Print
                </ActionButton>
              </Row>
            </Section>
          )}

          {index < sections.length - 1 && <Divider />}
        </Section>
      ))}
    </RootCard>
  );
}

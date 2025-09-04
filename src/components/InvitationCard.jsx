import React from "react";
import {
  RootCard,
  Section,
  Title,
  HostRow,
  EventRow,
  ButtonGroup,
  AcceptButton,
  DeclineButton,
} from "./invitation-card.styles";
import { CalendarToday, AccessTime, LocationOn } from "@mui/icons-material";

export default function InvitationCard() {
  return (
    <RootCard>
      {/* Header (centered) */}
      <Title>Invited By Tom</Title>

      {/* Host Info block (labels in fixed left column; values in right column aligned) */}
      <Section>
        <HostRow>
          <div className="label">Host Name</div>
          <div className="value">Tom</div>
        </HostRow>

        <HostRow>
          <div className="label">Email</div>
          <div className="value">Tom@Gmail.Com</div>
        </HostRow>

        <HostRow>
          <div className="label">Phone Number</div>
          <div className="value">+91 72135412554</div>
        </HostRow>
      </Section>

      {/* Event Details block (icon in narrow left column, text in right column) */}
      <Title>Event Details</Title>
      <Section>
        <EventRow>
          <div className="eventIcon">
            <CalendarToday fontSize="small" />
          </div>
          <div className="eventText">Sep 25, 2025</div>
        </EventRow>

        <EventRow>
          <div className="eventIcon">
            <AccessTime fontSize="small" />
          </div>
          <div className="eventText">05:00 PM</div>
        </EventRow>

        <EventRow>
          <div className="eventIcon">
            <LocationOn fontSize="small" />
          </div>
          <div className="eventText">Dubai</div>
        </EventRow>

        <ButtonGroup>
          <AcceptButton>Accept</AcceptButton>
          <DeclineButton>Decline</DeclineButton>
        </ButtonGroup>
      </Section>
    </RootCard>
  );
}

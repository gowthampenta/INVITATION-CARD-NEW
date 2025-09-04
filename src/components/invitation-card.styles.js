import { styled } from "@mui/material/styles";
import { Card, Stack, Typography, Chip, Button } from "@mui/material";

// Main card container
export const RootCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "16px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  background: "#ffffff",
}));

// Section layout
export const Section = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
}));

// Row layout
export const Row = styled(Stack)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

// Section titles
export const Title = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: "18px",
  color: "#333",
}));

// Status chip
export const StatusChip = styled(Chip)(() => ({
  textTransform: "capitalize",
  fontWeight: 600,
}));

// Ticket image
export const TicketImage = styled("img")(() => ({
  maxWidth: "100%",
  borderRadius: "8px",
  border: "1px solid #eee",
}));

// Styled button
export const ActionButton = styled(Button)(() => ({
  borderRadius: "8px",
  textTransform: "none",
  fontWeight: 600,
}));

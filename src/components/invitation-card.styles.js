import { styled } from "@mui/material/styles";
import { Card as MuiCard, Stack, Typography, Button } from "@mui/material";

/**
 * Styled components tuned to exactly match your "INvitaion UI" screenshot:
 * - card width ~ 397px (max)
 * - card background, inner section background colors
 * - Inter font
 * - Host values aligned vertically using CSS grid columns (fixed label column + content column)
 * - Event details: narrow icon column + text column
 */

// Outer card
export const RootCard = styled(MuiCard)(({ theme }) => ({
  width: "100%",
  maxWidth: "397px",           // matches screenshot width
  margin: "0 auto",
  padding: theme.spacing(3),
  borderRadius: 16,
  background: "#171717",
  color: "#ffffff",
  boxSizing: "border-box",
  border: "1px solid #242424",
  boxShadow: "0 6px 20px rgba(0,0,0,0.6)",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),

  // responsive small-screen adjustments
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    maxWidth: "100%",
    margin: "0 12px",
    borderRadius: 12,
  },
}));

// Inner section area (slightly lighter)
export const Section = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  background: "#2A2A2A", // inner section
  padding: 16,
  borderRadius: 12,
  border: "1px solid #242424",
}));

// Title (header)
export const Title = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: 16,
  color: "#fff",
  marginBottom: 4,
  textAlign: "center",
  fontFamily: "Inter, sans-serif",
}));

// HOST GRID ROW: grid with two columns: fixed label width + flexible value column
export const HostRow = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "130px 1fr", // label column fixed, value column aligns vertically
  alignItems: "center",
  gap: "8px",
  width: "100%",
  fontFamily: "Inter, sans-serif",

  ".label": {
    color: "#aaa",
    fontSize: 14,
  },
  ".value": {
    color: "#fff",
    fontSize: 14,
    fontWeight: 500,
    textAlign: "left", // left align so Tom, email, phone all start at same x
    wordBreak: "break-word",
  },
}));

// Event row: icon column + text column
export const EventRow = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "28px 1fr", // narrow icon column + text
  alignItems: "center",
  gap: "8px",
  width: "100%",
  fontFamily: "Inter, sans-serif",

  ".eventText": {
    color: "#fff",
    fontSize: 14,
    fontWeight: 500,
  },
  ".eventIcon": {
    color: "#bbb",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

// Buttons container
export const ButtonGroup = styled(Stack)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  flexDirection: "row",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

// Accept button (white background, black text)
export const AcceptButton = styled(Button)(() => ({
  flex: 1,
  borderRadius: 12,
  textTransform: "none",
  fontWeight: 700,
  padding: "10px 14px",
  background: "linear-gradient(90deg, #ffffff 0%, #d9d9d9 100%)",
  color: "#000",
  boxShadow: "none",
  fontFamily: "Inter, sans-serif",
  border: "none",
  "&:hover": {
    background: "linear-gradient(90deg, #f2f2f2 0%, #cfcfcf 100%)",
  },
}));

// Decline button (outlined)
export const DeclineButton = styled(Button)(() => ({
  flex: 1,
  borderRadius: 12,
  textTransform: "none",
  fontWeight: 700,
  padding: "10px 14px",
  background: "transparent",
  color: "#fff",
  border: "1px solid #555",
  fontFamily: "Inter, sans-serif",
  "&:hover": {
    background: "#2a2a2a",
  },
}));

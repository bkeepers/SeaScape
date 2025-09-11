import { StyleSheet } from "react-native";
import useTheme from "./useTheme";

export default function useStyles() {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: theme.background,
    },
    list: {
      borderRadius: 10,
      backgroundColor: theme.surface,
    },
    listItem: {
      flex: 1,
      padding: 15,
    },
    listItemActive: {
      backgroundColor: theme.primary,
      color: theme.textPrimary,
    },
    listLabel: {
      paddingVertical: 10,
      color: theme.textSecondary,
    },
    label: {
      fontSize: 18,
    },



    statIconContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 12,
    },
    statIcon: {
      fontSize: 20,
    },
    statNumber: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 4,
    },
    statLabel: {
      fontSize: 12,
      fontWeight: "500",
      textAlign: "center",
    },
    daysHeader: {
      flexDirection: "row",
      paddingBottom: 16,
      alignItems: "center",
    },
    habitNamePlaceholder: {
      flex: 1,
    },
    dayHeaderItem: {
      width: 36,
      alignItems: "center",
      marginHorizontal: 2,
    },
    dayLabel: {
      fontSize: 12,
      fontWeight: "600",
      textAlign: "center",
    },
    habitCard: {
      borderRadius: 20,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      elevation: 2,
    },
    habitInfo: {
      marginBottom: 16,
    },
    habitHeader: {
      flexDirection: "row",
      alignItems: "flex-start",
    },
    habitNumberContainer: {
      width: 32,
      height: 32,
      borderRadius: 16,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 12,
    },
    habitNumber: {
      fontSize: 16,
      fontWeight: "bold",
    },
    habitTitleContainer: {
      flex: 1,
    },
    habitName: {
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 8,
      lineHeight: 24,
    },
    habitMeta: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    streakText: {
      fontSize: 14,
      fontWeight: "500",
    },
    percentageBadge: {
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
    },
    percentageText: {
      fontSize: 12,
      fontWeight: "600",
    },
    daysContainer: {
      flexDirection: "row",
      gap: 4,
    },
    dayButton: {
      width: 36,
      height: 36,
      borderRadius: 18,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 2,
      borderWidth: 2,
      elevation: 1,
    },
    dayButtonText: {
      fontSize: 16,
      fontWeight: "600",
    },
    addButton: {
      marginTop: 20,
      marginBottom: 40,
      borderRadius: 20,
      padding: 20,
      alignItems: "center",
      elevation: 4,
    },
    addButtonContent: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    addButtonIcon: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#ffffff",
      marginRight: 8,
    },
    addButtonText: {
      fontSize: 18,
      fontWeight: "600",
      color: "#ffffff",
    },
  });
}

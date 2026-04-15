import React, { useState } from "react";

const NoteWrapper = ({ children }) => {
  const [done, setDone] = useState("problems");

  const tabs = [
    { key: "problems", label: "Problems" },
    { key: "date", label: "Date" },
    { key: "notes", label: "Notes" },
  ];

  const filteredChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return null;

    const type = child.props?.["data-type"];
    if (!type) return child;

    return type === done ? child : null;
  });

  return (
    <div style={{ padding: "16px" }}>
      {/* Tabs */}
      <div style={styles.tabContainer}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setDone(tab.key)}
            style={{
              ...styles.tab,
              ...(done === tab.key ? styles.activeTab : {}),
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ marginTop: "16px" }}>{filteredChildren}</div>
    </div>
  );
};

const styles = {
  tabContainer: {
    display: "flex",
    gap: "10px",
    padding: "6px",
    background: "#f3f4f6",
    borderRadius: "12px",
    width: "fit-content",
  },
  tab: {
    padding: "8px 14px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    background: "transparent",
    color: "#555",
    fontWeight: 500,
    transition: "0.2s",
  },
  activeTab: {
    background: "#2e8555",
    color: "white",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  },
};

export default NoteWrapper;
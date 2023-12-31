"use client";

import React, { useContext, useState } from "react";

import EarnExpanded from "@/components/EarnExpanded";
import EmailExpanded from "@/components/EmailExpanded";
import HistoryExpanded from "@/components/HistoryExpanded";

import { SettingsContext } from "@/context/SettingsContext";

const settings = () => {
  const { focused } = useContext(SettingsContext);

  return (
    <div>
      {focused === "earn" ? (
        <EarnExpanded />
      ) : focused === "history" ? (
        <HistoryExpanded />
      ) : focused === "email" ? (
        <EmailExpanded />
      ) : (
        <EarnExpanded />
      )}
    </div>
  );
};

export default settings;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { selectionModePlugin } from "@react-pdf-viewer/selection-mode";
import { UserContext } from "../../App";

// Import styles
import "@react-pdf-viewer/selection-mode/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export const PdfAccess = ({ fileUrl }) => {
  const { state, dispatch } = useContext(UserContext);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const selectionModePluginInstance = selectionModePlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
      {!state.user ? (
        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.3)",
            height: "750px",
            filter: "blur(4px)",
          }}
        >
          <Viewer fileUrl={fileUrl} />
        </div>
      ) : (
        <div
          style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '750px',
          }}
        >
          <Viewer 
            fileUrl={fileUrl} 
            plugins={[
              defaultLayoutPluginInstance,
              selectionModePluginInstance,
            ]}
          />
        </div>
      )}
    </Worker>
  );
};

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { jsPDF } from "jspdf";

const downloadPDF = () => {
    const doc = new jsPDF();
    
    // Define some content and styling for the PDF
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    
    // Title of the flow chart
    doc.text("Phase One Flow Chart", 20, 20);

    // Add nodes and edges to the PDF (example: simple representation)
    nodesData.forEach((node, index) => {
      const nodePosition = `Node: ${node.label}, Position: (${node.x}, ${node.y})`;
      doc.text(nodePosition, 20, 30 + index * 10);
    });

    // Add some simple edges for illustration (could be more complex depending on your needs)
    edges.forEach(([fromId, toId], index) => {
      const fromNode = nodesData.find((node) => node.id === fromId);
      const toNode = nodesData.find((node) => node.id === toId);
      const edgeLine = `Edge from ${fromNode.label} to ${toNode.label}`;
      doc.text(edgeLine, 20, 30 + (nodesData.length + index) * 10);
    });

    // Save the generated PDF
    doc.save("phase_one_flow_chart.pdf");
  };

const nodesData = [
  { id: "start", label: "Start With Registration", x: 0, y: 0 },
  { id: "two", label: "Phase Two Starts", x: 200, y: 0 },
  { id: "create", label: "Create Account", x: 0, y: 80 },
  { id: "email", label: "Using Email ID", x: 110, y: 160 },
  { id: "mobile", label: "Using Mobile No.", x: 70, y: 240 },
  { id: "seller", label: "Using Seller Position", x: 0, y: 320 },
  { id: "afterReg", label: "After Registration", x: 300, y: 240 },
  {
    id: "login",
    label:
      "Login Option\n1. Username & Password\n2. Email & OTP\n3. Phone no. & OTP\n4. WhatsApp no. & OTP",
    x: 500,
    y: 200,
  },
  { id: "chooseLogin", label: "Choose One Method for Login", x: 730, y: 225 },
  { id: "ends", label: "Phase Two Ends", x: 1000, y: 225 },
];

const edges = [
  ["start", "create"],
  ["start", "two"],
  ["create", "email"],
  ["create", "mobile"],
  ["create", "seller"],
  ["email", "afterReg"],
  ["mobile", "afterReg"],
  ["seller", "afterReg"],
  ["afterReg", "login"],
  ["login", "chooseLogin"],
  ["chooseLogin", "ends"],
];

const FlowNode = ({ node, onClick }) => (
  <motion.div
    className="absolute cursor-pointer rounded-md text-sm text-white shadow-lg whitespace-pre-line transition duration-300"
    style={{
      left: node.x,
      top: node.y,
      background:
        node.id === "email"
          ? "#10b981"
          : node.id === "mobile"
          ? "#8b5cf6"
          : node.id === "seller"
          ? "#06b6d4"
          : node.id === "two"
          ? "#226DB4"
          : node.id === "ends"
          ? "#226DB4"
          : "#111827",
    }}
    whileHover={{ scale: 1.05 }}
    onClick={() =>
      ["email", "mobile", "seller"].includes(node.id) && onClick(node)
    }
  >
    <div className="h-5 w-full rounded-t-md bg-[#F5F5F5] px-1.5 gap-1 border-1 border-[#111827] flex items-center">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{
          backgroundColor:
          node.id === "email"
          ? "#10b981"
          : node.id === "mobile"
          ? "#8b5cf6"
          : node.id === "seller"
          ? "#06b6d4"
          : node.id === "two"
          ? "#226DB4"
          : node.id === "ends"
          ? "#226DB4"
          : "#111827",
        }}
      ></span>
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{
          backgroundColor:
          node.id === "email"
          ? "#10b981"
          : node.id === "mobile"
          ? "#8b5cf6"
          : node.id === "seller"
          ? "#06b6d4"
          : node.id === "two"
          ? "#226DB4"
          : node.id === "ends"
          ? "#226DB4"
          : "#111827",
        }}
      ></span>
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{
          backgroundColor:
          node.id === "email"
          ? "#10b981"
          : node.id === "mobile"
          ? "#8b5cf6"
          : node.id === "seller"
          ? "#06b6d4"
          : node.id === "two"
          ? "#226DB4"
          : node.id === "ends"
          ? "#226DB4"
          : "#111827",
        }}
      ></span>
    </div>
    <div className="p-3">{node.label}</div>
  </motion.div>
);

const SVGEdge = ({ from, to }) => {
  // Adjust these values based on your node's dimensions
  const nodeWidth = 120;  // Approximate width of the nodes
  const nodeHeight = 50;  // Approximate height of the nodes

  const startX = from.x + nodeWidth / 2;
  const startY = from.y + nodeHeight / 2;
  const endX = to.x + nodeWidth / 2;
  const endY = to.y + nodeHeight / 2;

  // Midpoint for the curve
  const midX = (startX + endX) / 2;
  const midY = (startY + endY) / 2;

  return (
    <motion.path
      d={`M${startX},${startY} C${midX},${startY} ${midX},${endY} ${endX},${endY}`}
      stroke="#9ca3af"
      strokeWidth={2}
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8 }}
    />
  );
};


const FlowChartOverlay = ({ selected, onClose }) => {
  const backdropRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (backdropRef.current && !backdropRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-20"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
        >
          <motion.div
            ref={backdropRef}
            className="bg-white p-6 rounded-lg max-w-lg w-full shadow-xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <h2 className="text-xl font-bold mb-4">{selected.label}</h2>
            <p>
              This is a popup for <strong>{selected.label}</strong> flow
              details.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const BottomContent = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div className="relative w-full overflow-hidden mt-10 bg-white p-5 rounded-2xl space-y-10">
      <div className="w-full flex justify-end items-center">
        <div className="flex items-center gap-2">
          <button className="text-[#1A1A1A] p-2 border cursor-pointer text-xs border-[#1A1A1A] rounded-full bg-white" onClick={downloadPDF}>
            Download Phase One Flow
          </button>
          <button className="text-[#1A1A1A] p-2 border cursor-pointer text-xs border-[#1A1A1A] rounded-full bg-white">
            Continue to Phase Two
          </button>
        </div>
      </div>
      <div
        className="overflow-x-scroll scrollbar-hide py-10 px-5 relative md:min-h-[400px] min-h-[520px]"
        
      >
        {/* SVG Lines */}
        <svg className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none">
          {edges.map(([fromId, toId], i) => {
            const from = nodesData.find((n) => n.id === fromId);
            const to = nodesData.find((n) => n.id === toId);
            return <SVGEdge key={i} from={from} to={to} />;
          })}
        </svg>

        {/* Nodes */}
        {nodesData.map((node) => (
          <FlowNode key={node.id} node={node} onClick={setSelectedNode} />
        ))}
      </div>

      {/* Overlay Modal */}
      <FlowChartOverlay
        selected={selectedNode}
        onClose={() => setSelectedNode(null)}
      />

      {/* Disclaimer */}
      <div className="text-sm text-red-600 font-semibold px-5 mt-4">
        Disclaimer :-
        <span className="text-red-500 font-normal ml-2">
          Download the Whole Flow with Details Explanation for Better
          Understanding
        </span>
      </div>
    </div>
  );
};

export default BottomContent;

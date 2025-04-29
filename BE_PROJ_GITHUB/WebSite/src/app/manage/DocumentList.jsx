"use client";
import { useState } from 'react';
import AccessControl from './accessControl';
import { RiCircleFill } from "react-icons/ri";

const mockDocuments = [
  { name: 'Methane Detection Report - Area 1', hash: '0x1234...', date: '2024-10-01', status: 'Verified' },
  { name: 'Calibration Certificate', hash: '0x5678...', date: '2024-09-25', status: 'Pending' },
  { name: 'Sensor Data - Region A', hash: '0x1234...', date: '2024-10-01', status: 'Verified' },
  { name: 'Analysis Summary', hash: '0x5678...', date: '2024-09-25', status: 'Verified' },
];

export default function DocumentList() {
  const [documents, setDocuments] = useState(mockDocuments);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const deleteDocument = (hash) => {
    if (window.confirm("Are you sure you want to delete this document?")) {
      setDocuments(documents.filter((doc) => doc.hash !== hash));
    }
  };

  const openAccessControl = (doc) => {
    setSelectedDocument(doc);
  };

  const closeAccessControl = () => {
    setSelectedDocument(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Verified':
        return 'text-green-600';
      case 'Pending':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="p-6 bg-[#0A0A0A] text-white rounded-lg border border-[#656565]">
      <h2 className="text-lg font-semibold mb-6">Your Uploaded Methane Detection Documents</h2>
      <div className="overflow-x-auto">
        <div className="table-auto w-full flex flex-col text-left border-collapse">
          <div className='rounded-lg w-full'>
            <div className="bg-black flex w-full font-semibold justify-between border-[#656565] border-x border-t rounded-t-lg">
              <div className="px-4 py-2 w-[25%]">Document Name</div>
              <div className="px-4 py-2 w-[20%]">Hash</div>
              <div className="px-4 py-2 w-[15%]">Date</div>
              <div className="px-4 py-2 w-[10%] text-center">Status</div>
              <div className="px-4 py-2 w-[30%] text-center">Actions</div>
            </div>
          </div>
          <div className='flex flex-col'>
            {documents.map((doc, idx) => (
              <div key={idx} className="bg-black border-b flex border text-sm border-[#656565] hover:bg-[#0A0A0A] transition">
                <div className="px-4 py-2 w-[25%]">{doc.name}</div>
                <div className="px-4 py-2 truncate w-[20%]">{doc.hash}</div>
                <div className="px-4 py-2 w-[15%]">{doc.date}</div>
                <div className="px-4 py-2 w-[10%] flex justify-center items-center">
                  <div className={`flex space-x-2 px-3 py-2 font-semibold text-xs rounded-md`}>
                    <div className={`text-lg ${getStatusColor(doc.status)}`}>
                      <RiCircleFill />
                    </div>
                    <div className="text-white pt-[3px]">
                      {doc.status}
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2 space-x-4 w-[30%] flex justify-center">
                  <button
                    onClick={() => openAccessControl(doc)}
                    className="px-4 py-2 bg-white text-black font-semibold rounded-md text-sm transition"
                  >
                    Manage Access
                  </button>
                  <button
                    onClick={() => deleteDocument(doc.hash)}
                    className="px-4 py-2 border border-white text-white font-semibold rounded-md text-sm transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Show modal if a document is selected */}
      {selectedDocument && (
        <AccessControl docHash={selectedDocument.hash} onClose={closeAccessControl} />
      )}
    </div>
  );
}

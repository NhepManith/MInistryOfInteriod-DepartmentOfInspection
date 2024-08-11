import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { format } from 'date-fns';
import { Modal, Table, Button } from 'flowbite-react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Ensure the complete and correct base64 string
const notoSerifKhmerBase64 = '...'; // Replace with the complete base64 string

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [filterKeyword, setFilterKeyword] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [messageIdToDelete, setMessageIdToDelete] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/message/all');
        setMessages(response.data.data);
        if (response.data.data.length < 9) {
          setShowMore(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [messages, filterKeyword, filterDate]);

  const applyFilters = () => {
    let filtered = [...messages];

    if (filterKeyword) {
      filtered = filtered.filter(
        (message) =>
          message.name.toLowerCase().includes(filterKeyword.toLowerCase()) ||
          message.message.toLowerCase().includes(filterKeyword.toLowerCase()) ||
          message.location.toLowerCase().includes(filterKeyword.toLowerCase()) ||
          message.phoneNumber.toLowerCase().includes(filterKeyword.toLowerCase())
      );
    }

    if (filterDate) {
      filtered = filtered.filter(
        (message) => format(new Date(message.createdAt), 'yyyy-MM-dd') === filterDate
      );
    }

    // Sort by createdAt in descending order
    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    setFilteredMessages(filtered);
  };

  const handleShowMore = async () => {
    const startIndex = messages.length;
    try {
      const response = await axios.get(`/api/message/all?startIndex=${startIndex}`);
      const newMessages = response.data.data;
      setMessages((prev) => [...prev, ...newMessages]);
      if (newMessages.length < 9) {
        setShowMore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownloadPDF = (message) => {
    const doc = new jsPDF();

    // Embed the custom font
    doc.addFileToVFS('NotoSerifKhmer-Regular.ttf', notoSerifKhmerBase64);
    doc.addFont('NotoSerifKhmer-Regular.ttf', 'NotoSerifKhmer', 'normal');
    doc.setFont('NotoSerifKhmer');

    const tableRows = [
      [
        format(new Date(message.createdAt), 'yyyy-MM-dd HH:mm'),
        message.name,
        message.message,
        message.location,
        message.phoneNumber,
      ],
    ];

    doc.autoTable({
      head: [['Date', 'Name', 'Message', 'Location', 'Phone Number']],
      body: tableRows,
    });

    doc.save(
      `${message.name}-${format(new Date(message.createdAt), 'yyyyMMddHHmm')}.pdf`
    );
  };

  const handleDeleteMessage = async () => {
    try {
      await axios.delete(`/api/message/delete/${messageIdToDelete}`);
      setMessages(messages.filter((message) => message._id !== messageIdToDelete));
      setFilteredMessages(filteredMessages.filter((message) => message._id !== messageIdToDelete));
      setShowModal(false);
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  return (
    <div className="flex">
      <div className="container mx-auto px-10 py-8">
        <div className="flex items-center mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">All Messages</h1>
            <p className="text-sm text-gray-600">
              Total Messages: {filteredMessages.length}
            </p>
          </div>
        </div>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search by keyword"
            value={filterKeyword}
            onChange={(e) => setFilterKeyword(e.target.value)}
            className="p-2 border rounded mr-2"
          />
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="p-2 border rounded"
          />
        </div>
        {filteredMessages.length > 0 ? (
          <>
            <Table hoverable className="shadow-md">
              <Table.Head>
                <Table.HeadCell className="w-56">Date</Table.HeadCell>
                <Table.HeadCell className="w-56">Name</Table.HeadCell>
                <Table.HeadCell>Message</Table.HeadCell>
                <Table.HeadCell className="w-56">Location</Table.HeadCell>
                <Table.HeadCell className="w-56">Phone Number</Table.HeadCell>
                <Table.HeadCell>Actions</Table.HeadCell>
              </Table.Head>
              {filteredMessages.map((message, index) => (
                <Table.Body
                  key={message._id}
                  className={`divide-y ${
                    index === 0 ? 'bg-red-100 dark:bg-red-800' : 'bg-white dark:bg-gray-800'
                  }`}
                >
                  <Table.Row>
                    <Table.Cell>
                      {format(new Date(message.createdAt), 'yyyy-MM-dd HH:mm')}
                    </Table.Cell>
                    <Table.Cell>{message.name}</Table.Cell>
                    <Table.Cell>{message.message}</Table.Cell>
                    <Table.Cell>{message.location}</Table.Cell>
                    <Table.Cell>{message.phoneNumber}</Table.Cell>
                    <Table.Cell>
                      <Button color="success" onClick={() => handleDownloadPDF(message)}>
                        Download
                      </Button>
                      <Button
                        color="danger"
                        onClick={() => {
                          setShowModal(true);
                          setMessageIdToDelete(message._id);
                        }}
                        className="ml-2"
                      >
                        Delete
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
            </Table>
            {showMore && (
              <button
                onClick={handleShowMore}
                className="w-full text-teal-500 self-center text-sm py-7"
              >
                Show more
              </button>
            )}
          </>
        ) : (
          <p>You have no messages yet!</p>
        )}
        <Modal show={showModal} onClose={() => setShowModal(false)} popup size="md">
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
              <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this message?
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="failure" onClick={handleDeleteMessage}>
                  Yes, I'm sure
                </Button>
                <Button color="gray" onClick={() => setShowModal(false)}>
                  No, cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default MessageList;

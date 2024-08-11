import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Label, TextInput, Textarea, Button, Select, Card } from 'flowbite-react';
import Imagelogo1 from '../Images/ImageOne.png';
import Imagelogo2 from '../Images/imageTwo.png';
import Imagelogo3 from '../Images/imageThree.png';
import Imagelogo4 from '../Images/imageFour.png';
import Imagelogo5 from '../Images/imageFive.png';
import Imagelogo6 from '../Images/imageSix.png';
import Imagelogo7 from '../Images/imageSeven.png';
import Imagelogo8 from '../Images/imageEight.png';

const relatedOrganizations = [
  { img: Imagelogo1, name: 'អង្គការសហព័ន្ធជាតិសង្គម' },
  { img: Imagelogo2, name: 'អង្គការជនជាតិ' },
  { img: Imagelogo3, name: 'អង្គការមនុស្សគ្រប់គ្រង' },
  { img: Imagelogo4, name: 'អង្គការការងារ' },
  { img: Imagelogo5, name: 'អង្គការវប្បធម៌' },
  { img: Imagelogo6, name: 'អង្គការពាណិជ្ជកម្ម' },
  { img: Imagelogo7, name: 'អង្គការពាណិជ្ជកម្ម' },
  { img: Imagelogo8, name: 'អង្គការពាណិជ្ជកម្ម' },
];

const MessageForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [option, setOption] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % relatedOrganizations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/message', {
        name,
        message,
        option,
        location,
        phoneNumber,
      });
      console.log(response.data);
      setName('');
      setMessage('');
      setOption('');
      setLocation('');
      setPhoneNumber('');
      alert('អ្នកបានផ្ងើរសារជោគជ័យ!');
    } catch (error) {
      console.error(error);
      alert('ការផ្ងើរមិនបានជោគជ័យ សូមពិនិត្យម្តងទៀត');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full space-y-8 flex">
        <div className="w-2/3 p-4">
          <Card className="p-8 shadow-lg">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">កន្លែងបញ្ចូលបណ្តឹង</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" value="ឈ្មោះ" />
                <TextInput
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="បំពេញឈ្មោះ"
                  required
                  className="mt-1 w-full"
                />
              </div>
              <div>
                <Label htmlFor="option" value="ប្រភេទបណ្តឹង" />
                <Select
                  id="option"
                  value={option}
                  onChange={(e) => setOption(e.target.value)}
                  required
                  className="mt-1 w-full"
                >
                  <option value="">ជ្រើសរើស</option>
                  <option value="បណ្តឹង">បណ្តឹង</option>
                  <option value="របាយការណ៏">របាយការណ៏</option>
                  <option value="ស្នើរសូម">ស្នើរសូម</option>
                </Select>
              </div>
              <div>
                <Label htmlFor="location" value="ទីតាំង" />
                <TextInput
                  id="location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="បំពេញទីតាំង"
                  required
                  className="mt-1 w-full"
                />
              </div>
              <div>
                <Label htmlFor="phoneNumber" value="លេខទូរសព្ទ័" />
                <TextInput
                  id="phoneNumber"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="បំពេញលេខទូរសព្ទ័"
                  required
                  className="mt-1 w-full"
                />
              </div>
              <div>
                <Label htmlFor="message" value="កន្លែងសរសេរបណ្តឹងរឺពត៏មាន" />
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="បំពេញបណ្តឹងរឺពត៏មាន"
                  required
                  rows="6"
                  className="mt-1 w-full"
                />
              </div>
              <div className="mt-8">
                <Button type="submit" className="w-full">
                  ផ្ញើបណ្តឹង
                </Button>
              </div>
            </form>
          </Card>
        </div>
        <div className="w-1/3 p-4 space-y-4 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">អង្គភាពចំណុះក្រសួងមហាផ្ទៃ</h2>
          <div className="relative overflow-hidden h-80  ">
            <div className="absolute flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {relatedOrganizations.map((org, index) => (
                <div key={index} className="min-w-full h-full p-4">
                    <img src={org.img} alt={org.name} className="h-auto w-auto mb-4 object-cover " />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;

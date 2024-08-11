import { Button } from 'flowbite-react';
import LogoOr from '../Images/organization.png';
import Imgi1 from '../Images/3RlXPcha-72-3-removebg-preview.png';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-5 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center gap-8'>
      <div className="flex-1 flex flex-col items-center">
        <h2 className='text-2xl mb-5 font-bold'>   
          អគ្គាធិការដ្ឋាន​ក្រសួង​មហាផ្ទៃមាន ៦ នាយកដ្ឋាន​ចំណុះ និង​មានតួនាទីធ្វើជាសេនាធិការជូនរដ្ឋមន្ត្រីក្រសួងមហាផ្ទៃ
        </h2>
        <img src={LogoOr} alt="Description" className="shadow-lg h-96 mb-5" />
        <Button gradientDuoTone='purpleToPink' className='mt-10'>
          <a href="https://www.facebook.com/GeneralDepartmentofInspection" target='_blank' rel='noopener noreferrer'>
            ស្វែងយល់បន្ថែមពីអគ្គាធិការដ្ឋានក្រសួងមហាផ្ទៃ 
          </a>
        </Button>
      </div>

      <div className="flex-1 flex flex-col items-center">
        <h2 className='text-2xl mb-5 font-bold'>   
          អគ្គាធិការដ្ឋាន​ក្រសួង​មហាផ្ទៃមាន មានសមភាព​ ដឹកនាំដោយអគ្គធិការ ចំនួន ១​ រូប 
        </h2>
        <img src={Imgi1} alt="Description" className="shadow-lg h-96 mb-5" />
        <Button gradientDuoTone='purpleToPink' className='mt-10'>
          <a href="https://www.facebook.com/GeneralDepartmentofInspection" target='_blank' rel='noopener noreferrer'>
            ឯកឧត្តមឧត្តមសេនីយ៏ឯក ឯម វិចិត្រ្ត អគ្គាធិការក្រសួង​មហាផ្ទៃ
          </a>
        </Button>
      </div>
    </div>
  );
}

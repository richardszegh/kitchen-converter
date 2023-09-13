import { useEffect, useState } from 'react';
import { BsFillCupFill } from 'react-icons/bs';
import { TbRulerMeasure } from 'react-icons/tb';
import { RxReset } from 'react-icons/rx';
import { LuChefHat } from 'react-icons/lu';
import { Helmet } from 'react-helmet-async';

const CUP_TO_ML = 238;

function Home() {
  const [cup, setCup] = useState('');
  const [ml, setMl] = useState('');

  useEffect(() => {
    if (cup === '') {
      return;
    }
    const cupNumber = parseFloat(cup);
    if (!isNaN(cupNumber)) {
      setMl(String(cupNumber * CUP_TO_ML));
    }
  }, [cup]);

  useEffect(() => {
    if (ml === '') {
      return;
    }
    const mlNumber = parseFloat(ml);
    if (!isNaN(mlNumber)) {
      setCup(String(mlNumber / CUP_TO_ML));
    }
  }, [ml]);

  return (
    <div className="w-full h-screen flex items-center justify-center text-white relative">
      <div className="absolute top-0 right-0 bottom-0 left-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1670963025556-c2d4dc880a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-indigo-700 absolute top-0 right-0 bottom-0 left-0 opacity-60" />

      <div className="bg-indigo-700 border border-indigo-600 shadow-2xl shadow-gray-900 rounded-xl p-12 z-10">
        <div className="flex items-center justify-center mb-4">
          <LuChefHat className="w-10 h-10 hover:animate-spin" />
        </div>
        <p className="text-2xl font-semibold mb-8 bg-white text-white text-center py-2 px-6 rounded-lg bg-opacity-10">
          Cup / ml converter
        </p>

        <div className="space-y-4">
          <label className="space-y-1 block group" htmlFor="cup">
            <p className="mb-1 flex items-center space-x-2">
              <BsFillCupFill className="w-4 h-4 group-hover:animate-bounce" />
              <span>cup</span>
            </p>
            <input
              name="cup"
              type="number"
              value={cup}
              onChange={e => setCup(e.target.value)}
              placeholder="2"
              className="w-full py-1.5 px-3 text-black placeholder-gray-400 rounded-lg"
            />
          </label>

          <label className="space-y-1 block group" htmlFor="ml">
            <p className="mb-1 flex items-center space-x-2">
              <TbRulerMeasure className="w-4 h-4 group-hover:animate-bounce" />
              <span>ml</span>
            </p>
            <input
              name="ml"
              type="number"
              value={ml}
              onChange={e => setMl(e.target.value)}
              placeholder="200"
              className="w-full py-1.5 px-3 text-black placeholder-gray-400 rounded-lg"
            />
          </label>
        </div>

        <button
          type="button"
          onClick={() => {
            setCup('');
            setMl('');
          }}
          className="flex items-center justify-center text-center w-full py-2 px-4 mt-14 bg-white text-indigo-800 font-semibold rounded-lg hover:bg-indigo-100 transition duration-200 ease-in-out hover:scale-110"
        >
          Reset
          <RxReset className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}

export { Home };

import React from 'react';

const Layout = () => {
  return (
    <div className='bg-blue-200 flex justify-center  h-fit  md:h-screen '>
      <div className='container-wrapper  max-w-sm bg-red-600 md:max-w-2xl md:w-[32rem] flex  flex-col h-fit items-center mx-2 my-12 space-y-12'>
        <header className='card  bg-zinc-50 py-4 w-full mt-4  flex flex-col items-center rounded-2xl shadow-xl '>
          <img
            src=''
            alt=''
            className='border-2 
                    rounded-full
                    border-blue-700
                    h-20
                    w-20           
                    '
          />
          <h1 className='text-blue-900 text-xl font-medium'>
            Nombre restaurante{' '}
          </h1>
          <h2 className='text-zinc-500 text-md'> Subtiyulo</h2>

          <h2 className='text-zinc-500 text-md'> Disclaimar</h2>
        </header>
        <div className='card bg-zinc-50   p-4 flex flex-col space-y-4 rounded-2xl shadow-xl '>
          <header className='card-header  p-2 flex flex-col'>
            <h1 className='card-title   break-all  flex justify-center'>
              Tituloasd afaf sadasds
            </h1>
            <h2 className='card-sub-title   break-all flex justify-center'>
              Subtitulo
            </h2>
            <p className='card-disclaimer   break-all flex justify-center'>
              Disclaimer
            </p>
          </header>
          <div className='card-content  p-2 space-y-4 flex flex-col  '>
            <div className='question  flex flex-col p-2 '>
              <label
                htmlFor=''
                className='text-zinc-500 text-md mb-2 mt-4 flex justify-start'
              >
                Pregunta sdvdbsdbadffbaXCZXCZXCczxczxczxcawdfgwdwgs
              </label>
              <input
                className='py-2 px-12 rounded-lg  shadow-lg  border-2 border-blue-300 max-w-lg'
                type='text'
                placeholder='placeholder'
              />
            </div>
            <div className='question  flex flex-col p-2 '>
              <label
                htmlFor=''
                className='text-zinc-500 text-md mb-2 mt-4 break-all'
              >
                Preguntaqwrqw
              </label>
              <input
                className='py-2 px-12 rounded-lg  shadow-lg  border-2 border-blue-300'
                type='text'
                placeholder='placeholder'
              />
            </div>
          </div>
        </div>
        <div className='card bg-zinc-50 w-full   p-4 flex flex-col space-y-4 rounded-2xl shadow-xl '>
          <header className='card-header  p-2 flex flex-col'>
            <h1 className='card-title   break-word  flex justify-center'>
              Tituloasd afaf sadasds
            </h1>
            <h2 className='card-sub-title   break-all flex justify-center'>
              Subtitulo
            </h2>
            <p className='card-disclaimer   break-all flex justify-center'>
              Disclaimer
            </p>
          </header>
          <div className='card-content  p-2 space-y-4 '>
            <div className='question  flex flex-col p-2 items-center'>
              <label htmlFor='' className='text-zinc-500 text-md mb-2 mt-4'>
                Pregunta
              </label>
              <input
                className='py-2 px-12 rounded-lg  shadow-lg  border-2 border-blue-300 w-full'
                type='text'
                placeholder='placeholder'
              />
            </div>
            <div className='question  flex flex-col p-2 '>
              <label
                htmlFor=''
                className='text-zinc-500 text-md mb-2 mt-4 break-all'
              >
                Preguntaqwrqw
              </label>
              <input
                className='py-2 px-12 rounded-lg  shadow-lg  border-2 border-blue-300'
                type='text'
                placeholder='placeholder'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

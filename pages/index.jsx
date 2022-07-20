const index = () => {
  return (
    <>
      <div className='flex justify-center m-5'>
        <img className='border-2 border-white rounded-full shadow-black shadow-lg' src='/favicon.ico' width='200px' height='200px'></img>
      </div>
      <div className='mt-5 flex flex-col'>
        <h1 className='text-2xl m-auto text-white p-3 font-bold'>SameetMoosavi ( Developer / Designer )</h1>
        <h2 className='m-auto text-white text-lg'>Hello, I&apos;m full-stack and software developer based in Iran!</h2>
        <div className='flex m-auto'>
          <a href='https://www.github.com/smsameet' className='m-3' title='GitHub'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" color="#FFFFFF" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a>
          <a href='https://www.github.com/VSNeovim' className='m-3' title='VSNeovim'><img src='https://avatars.githubusercontent.com/u/96680326?s=200&v=4' width='30' height='30'/></a>
          <a href='https://www.youtube.com/channel/UC_XJ4oRW4qL2Cmi7VHo9KsQ' className='m-3' title='YouTube'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" color="#FE0000" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg></a>
          <a href='https://twitter.com/sameetmoosavi' className='m-3' title='Twitter'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#1c9bf0" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a>
          <a href='mailto:sameetmoosavi@yahoo.com' className='m-3 text-yellow-500' title='Email'><svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="30" width="30"><path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"/></svg></a>
          <a href='https://payping.ir/@sameet' className='m-3' title='Support'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#EB48AB" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg></a>
        </div>
      </div>
      <h2 className='text-white text-xl font-bold w-fit border-b-4 border-blue-500'>Bio</h2>
      <p className='text-white text-lg mt-5 text-justify indent-4'>
        I love Linux and free softwares , my most popular Linux distribution is Arch. I am a full stack developer based in Isfahan and interested in learning the latest technologies. I'm full-stack developer based in Esfahan. I'm currently working on the <a className='text-blue-500' href='https://www.github.com/VSNeovim/VSNeovim'>VSNeovim</a> project, which is a completely free and open source programming and coding layer that provides us with most of the features we need during development.
      </p>
      <h2 className='text-white text-xl font-bold w-fit border-b-4 border-blue-500 mt-5'>Portfolio</h2>
      <div className='grid md:grid-cols-2 gap-5 mt-5'>
        <a href='https://github.com/smsameet/SameetDjangoBlog' target='_blank'><img className='rounded-xl border-2 border-white hover:border-blue-500' src='/sameetdjangoblog.jpg' width='100%'/></a>
        <a href='https://github.com/smsameet/sameetmoosavi.com' target='_blank'><img className='rounded-xl border-2 border-white hover:border-blue-500' src='/sameetBlog.png' width='100%'/></a>
        <a href='https://github.com/VSNeoVim/VSNeoVim' target='_blank'><img className='rounded-xl border-2 border-white hover:border-blue-500' src='/vsneovim.png' width='100%'/></a>
        <a href='https://github.com/smsameet'><img className='rounded-xl border-2 border-white hover:border-blue-500' src='/myarchsetup.png' width='100%'/></a>
      </div>
      <h2 className='text-white text-xl font-bold mt-5 w-fit border-b-4 border-blue-500'>Skills</h2>
      <div className='w-12/12 ml-auto flex flex-col text-lg'>
        <span className='text-white mt-5'>Html</span>
        <div className="bg-gray-200 h-1 mt-3">
          <div className="bg-blue-500 h-1 w-6/6 flex items-center justify-end">
            <svg className="icon icon-tabler icon-tabler-check bg-blue-500 p-0.5 h-6 w-6 rounded-full shadow items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </div>
        </div>
        <span className='text-white mt-5'>Css</span>
        <div className="bg-gray-200 h-1 mt-3">
          <div className="bg-blue-500 h-1 w-6/6 flex items-center justify-end">
            <svg className="icon icon-tabler icon-tabler-check bg-blue-500 p-0.5 h-6 w-6 rounded-full shadow items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </div>
        </div>
        <span className='text-white mt-5'>Tailwindcss</span>
        <div className="bg-gray-200 h-1 mt-3">
          <div className="bg-blue-500 h-1 w-5/6 flex items-center justify-end">
            <svg className="icon icon-tabler icon-tabler-check bg-blue-500 p-0.5 h-6 w-6 rounded-full shadow items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </div>
        </div>
        <span className='text-white mt-5'>Bootstrap</span>
        <div className="bg-gray-200 h-1 mt-3">
          <div className="bg-blue-500 h-1 w-6/6 flex items-center justify-end">
            <svg className="icon icon-tabler icon-tabler-check bg-blue-500 p-0.5 h-6 w-6 rounded-full shadow items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </div>
        </div>
        <span className='text-white mt-5'>JavaScript</span>
        <div className="bg-gray-200 h-1 mt-3">
          <div className="bg-blue-500 h-1 w-4/6 flex items-center justify-end">
            <svg className="icon icon-tabler icon-tabler-check bg-blue-500 p-0.5 h-6 w-6 rounded-full shadow items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </div>
        </div>
        <span className='text-white mt-5'>React</span>
        <div className="bg-gray-200 h-1 mt-3">
          <div className="bg-blue-500 h-1 w-5/6 flex items-center justify-end">
            <svg className="icon icon-tabler icon-tabler-check bg-blue-500 p-0.5 h-6 w-6 rounded-full shadow items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </div>
        </div>
        <span className='text-white mt-5'>Next</span>
        <div className="bg-gray-200 h-1 mt-3">
          <div className="bg-blue-500 h-1 w-5/6 flex items-center justify-end">
            <svg className="icon icon-tabler icon-tabler-check bg-blue-500 p-0.5 h-6 w-6 rounded-full shadow items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </div>
        </div>
        <span className='text-white mt-5'>Nodejs</span>
        <div className="bg-gray-200 h-1 mt-3">
          <div className="bg-blue-500 h-1 w-3/6 flex items-center justify-end">
            <svg className="icon icon-tabler icon-tabler-check bg-blue-500 p-0.5 h-6 w-6 rounded-full shadow items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </div>
        </div>
        <span className='text-white mt-5'>C</span>
        <div className="bg-gray-200 h-1 mt-3">
          <div className="bg-blue-500 h-1 w-4/6 flex items-center justify-end">
            <svg className="icon icon-tabler icon-tabler-check bg-blue-500 p-0.5 h-6 w-6 rounded-full shadow items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </div>
        </div>
        <span className='text-white mt-5'>Lua</span>
        <div className="bg-gray-200 h-1 mt-3">
          <div className="bg-blue-500 h-1 w-6/6 flex items-center justify-end">
            <svg className="icon icon-tabler icon-tabler-check bg-blue-500 p-0.5 h-6 w-6 rounded-full shadow items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </div>
        </div>
        <span className='text-white mt-5'>Python</span>
        <div className="bg-gray-200 h-1 mt-3">
          <div className="bg-blue-500 h-1 w-6/6 flex items-center justify-end">
            <svg className="icon icon-tabler icon-tabler-check bg-blue-500 p-0.5 h-6 w-6 rounded-full shadow items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </div>
        </div>
        <span className='text-white mt-5'>Flask</span>
        <div className="bg-gray-200 h-1 mt-3">
          <div className="bg-blue-500 h-1 w-6/6 flex items-center justify-end">
            <svg className="icon icon-tabler icon-tabler-check bg-blue-500 p-0.5 h-6 w-6 rounded-full shadow items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </div>
        </div>
        <span className='text-white mt-5'>Django</span>
        <div className="bg-gray-200 h-1 mt-3">
          <div className="bg-blue-500 h-1 w-6/6 flex items-center justify-end">
            <svg className="icon icon-tabler icon-tabler-check bg-blue-500 p-0.5 h-6 w-6 rounded-full shadow items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </div>
        </div>
        <span className='text-white mt-5'>Shell</span>
        <div className="bg-gray-200 h-1 mt-3">
          <div className="bg-blue-500 h-1 w-6/6 flex items-center justify-end">
            <svg className="icon icon-tabler icon-tabler-check bg-blue-500 p-0.5 h-6 w-6 rounded-full shadow items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </div>
        </div>
        <span className='text-white mt-5'>Databases ( sqlite / mariadb redis )</span>
        <div className="bg-gray-200 h-1 mt-3">
          <div className="bg-blue-500 h-1 w-6/6 flex items-center justify-end">
            <svg className="icon icon-tabler icon-tabler-check bg-blue-500 p-0.5 h-6 w-6 rounded-full shadow items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </div>
        </div>
        <span className='text-white mt-5'>Neovim / vim / vi</span>
        <div className="bg-gray-200 h-1 mt-3">
          <div className="bg-blue-500 h-1 w-6/6 flex items-center justify-end">
            <svg className="icon icon-tabler icon-tabler-check bg-blue-500 p-0.5 h-6 w-6 rounded-full shadow items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </div>
        </div>
        <span className='text-white mt-5'>Working on Gnu/Linux</span>
        <div className="bg-gray-200 h-1 mt-3">
          <div className="bg-blue-500 h-1 w-6/6 flex items-center justify-end">
            <svg className="icon icon-tabler icon-tabler-check bg-blue-500 p-0.5 h-6 w-6 rounded-full shadow items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </div>
        </div>
        <span className='text-white mt-5'>Working with Git</span>
        <div className="bg-gray-200 h-1 mt-3">
          <div className="bg-blue-500 h-1 w-6/6 flex items-center justify-end">
            <svg className="icon icon-tabler icon-tabler-check bg-blue-500 p-0.5 h-6 w-6 rounded-full shadow items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default index

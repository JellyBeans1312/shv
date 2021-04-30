import Head from 'next/head'
import SearchIcon from '../src/icons/search'
import { useState, useEffect } from 'react';
import TrashIcon from '../src/icons/trash'
import Plus from '../src/icons/plus'

export default function Home() {
  const [isOpen, setStatus] = useState(false);

  return (
    <div className={`bg-gray-100 min-h-screen`}>
      <Head>
        <title>Filter Menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`container m-auto pt-6`}>
        <header className={`w-full`}>
          <button onClick={() => setStatus((prev) => !prev)}>
            <SearchIcon className={`fill-current text-gray-800 inline-block mr-2`} />
            <span>Manage Filters</span>
          </button>
        </header>
        { isOpen ? <Filter props={isOpen, setStatus}/> : null}
      </main>
    </div>
  )
}

function Filter(props) {
  const [filterOpen, setFilterStatus] = useState(props)
  useEffect(() => {
    setFilterStatus(props);
  }, [props])

  if(filterOpen) {
    return (
      <div className="bg-white rounded p-3 w-96 shadow">
        <div className="flex">
          <div className="flex-grow">
            <header>
              <SearchIcon className={`fill-current text-blue-500 inline-block mx-2`} />
              <h3 className="inline-block font-medium">Filter</h3>
            </header>
          </div>
          <button onClick={() => setFilterStatus((prev) => !prev)}>
              <span className="text-lg justify-self-end">&times;</span>
          </button>
        </div>
        <div className="bg-gray-100 p-3 m-3 rounded shadow">
          <div className="flex">
            <div className="flex-grow">
            <select className="bg-gray-100 text-gray-700 font-medium">
              <option>
                Short Description
              </option>
            </select>
            
            <select className="bg-gray-100 text-gray-700 font-medium">
              <option>
                matches
              </option>
            </select>
            </div>
              <TrashIcon className={`fill-current text-blue-500 mr-2 inline-block justify-self-end`} />
          </div>
          <input className="w-full p-2 rounded border border-gray-200" placeholder="Define in Flow..."></input>
        </div>
        <div className="flex">
          <div className="flex-grow">
            <Plus className={`fill-current text-blue-500 mx-2 inline-block`}/>
            <button>
              <span className="text-gray-700 font-medium">Add Filter</span>
            </button>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white rounded w-20 h-7 mx-1 justify-self-end font-medium">Save</button>
          <button className="bg-gray-700 hover:bg-gray-700 text-white rounded w-20 h-7 mx-1 justify-self-end font-medium">Cancel</button>
        </div>
      </div>
    )
  }
  return ;
}